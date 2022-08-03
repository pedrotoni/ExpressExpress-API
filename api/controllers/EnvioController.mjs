import db from "../models/index.mjs";
import EnvioValidacoes from "../services/EnvioValidacoes.mjs";

class EnvioController {
  static async mostraEnvio(req, res) {
    try {
      const allEnvios = await db.Envio.findAll();
      return res.status(200).json(allEnvios);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async mostraUmEnvio(req, res) {
    const { id } = req.params;
    try {
      const oneEnvio = await db.Envio.findOne({ where: { id: Number(id) } });
      if (oneEnvio) {
        return res.status(200).json(oneEnvio);
      } else {
        return res
          .status(404)
          .json(
            `Não foi possível encontrar o envio nº${id}. Por favor revise o ID inserido.`
          );
      }
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async criaEnvio(req, res) {
    const newEnvio = req.body;
    const isValid = EnvioValidacoes.isValid(
      newEnvio["Meio_de_transporte"],
      newEnvio["Prazo"]
    );
    const meio = EnvioValidacoes.validaMeioTransporte(
      newEnvio["Meio_de_transporte"]
    );
    const prazo = EnvioValidacoes.validaPrazo(newEnvio["Prazo"]);

    try {
      if (isValid) {
        const envioCriado = await db.Envio.create(newEnvio);
        return res.status(200).json(envioCriado);
      } else {
        if (!meio && prazo) {
          throw new Error(`Não trabalhamos com esse meio de transporte!`);
        } else if (!prazo && meio) {
          throw new Error(
            `Esse prazo é inválido! Trabalhamos apenas com prazos de 1h a 48h.`
          );
        } else {
          throw new Error(
            `Revise os dados que você está tentando inserir. Ambos são inválidos.`
          );
        }
      }
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async atualizaEnvio(req, res) {
    const { id } = req.params;
    const atualizacaoEnvio = req.body;
    const isValid = EnvioValidacoes.isValid(
      atualizacaoEnvio["Meio_de_transporte"],
      atualizacaoEnvio["Prazo"]
    );
    const meio = EnvioValidacoes.validaMeioTransporte(
      atualizacaoEnvio["Meio_de_transporte"]
    );
    const prazo = EnvioValidacoes.validaPrazo(atualizacaoEnvio["Prazo"]);

    try {
      await db.Envio.update(atualizacaoEnvio, { where: { id: Number(id) } });
      const envioAtualizado = await db.Envio.findOne({
        where: { id: Number(id) },
      });

      if (envioAtualizado) {
        if (isValid) {
          return res.status(200).json(envioAtualizado);
        } else {
          if (!meio && prazo) {
            throw new Error(
              `Não foi possível atualizar os dados pois não trabalhamos com esse meio de transporte!`
            );
          } else if (!prazo && meio) {
            throw new Error(
              `Não foi possível atualizar os dados pois trabalhamos apenas com prazos de 1h a 48h.`
            );
          } else {
            throw new Error(
              `Revise os dados que você está tentando atualizar. Ambos são inválidos.`
            );
          }
        }
      } else {
        return res
          .status(404)
          .json(
            `Não foi possível atualizar as informações do envio nº ${id}. Revise os dados e tente novamente!`
          );
      }
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async deletaEnvio(req, res) {
    const { id } = req.params;
    try {
      const idEnvioDeletado = await db.Envio.destroy({
        where: { id: Number(id) },
      });
      if (idEnvioDeletado) {
        return res.status(200).json(`Envio nº ${id} deletado com sucesso.`);
      } else {
        return res
          .status(404)
          .json(
            `Não foi possível deletar o registro do envio nº${id} pois o mesmo já foi deletado ou ainda não foi criado! Tente novamente.`
          );
      }
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
}

export default EnvioController;
