import db from "../models/index.mjs";
import ComercianteValidacoes from "../services/ComercianteValidacoes.mjs";

class ComercianteController {
  static async mostraComerciante(req, res) {
    try {
      const allComerciantes = await db.Comerciante.findAll();
      return res.status(200).json(allComerciantes);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async mostraUmComerciante(req, res) {
    const { id } = req.params;
    try {
      const oneComerciante = await db.Comerciante.findOne({
        where: { id: Number(id) },
      });
      if (oneComerciante) {
        return res.status(200).json(oneComerciante);
      } else {
        return res
          .status(404)
          .json(
            `O registro ${id} ainda não foi criado ou foi deletado! Revise o ID inserido.`
          );
      }
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
  static async criaComerciante(req, res) {
    const novoComerciante = req.body;
    const isValid = ComercianteValidacoes.isValid(
      novoComerciante["Razao_Social"],
      novoComerciante["CNPJ"],
      novoComerciante["Contato"],
      novoComerciante["E_Commerce"],
      novoComerciante["Estado"]
    );

    const Razao_SocialCorreta =
      ComercianteValidacoes.validaRazaoSocialComerciante(
        novoComerciante["Razao_Social"]
      );
    const CNPJCorreto = ComercianteValidacoes.validaCNPJComerciante(
      novoComerciante["CNPJ"]
    );
    const ContatoCorreto = ComercianteValidacoes.validaContatoComerciante(
      novoComerciante["Contato"]
    );
    const E_CommerceCorreto = ComercianteValidacoes.validaEcommerce(
      novoComerciante["E_Commerce"]
    );
    const EstadoCorreto = ComercianteValidacoes.validaEstadoComerciante(
      novoComerciante["Estado"]
    );

    try {
      if (isValid) {
        const comercianteCriado = await db.Comerciante.create(novoComerciante);
        return res.status(200).json(comercianteCriado);
      } else {
        if (!Razao_SocialCorreta) {
          throw new Error(`Razão social inválida, tente novamente.`);
        }

        if (!CNPJCorreto) {
          throw new Error(`CNPJ inválido, tente novamente.`);
        }

        if (!ContatoCorreto) {
          throw new Error(`Contato inválido, tente novamente.`);
        }

        if (!E_CommerceCorreto) {
          throw new Error(`E-commerce inválido, tente novamente.`);
        }
        if (!EstadoCorreto) {
          throw new Error(`Estado inválido, tente novamente.`);
        }
      }
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
  static async atualizaComerciante(req, res) {
    const { id } = req.params;
    const atualizacaoComerciante = req.body;
    const isValid = ComercianteValidacoes.isValid(
      atualizacaoComerciante["Razao_Social"],
      atualizacaoComerciante["CNPJ"],
      atualizacaoComerciante["Contato"],
      atualizacaoComerciante["E_Commerce"],
      atualizacaoComerciante["Estado"]
    );

    const Razao_SocialCorreta =
      ComercianteValidacoes.validaRazaoSocialComerciante(
        atualizacaoComerciante["Razao_Social"]
      );
    const CNPJCorreto = ComercianteValidacoes.validaCNPJComerciante(
      atualizacaoComerciante["CNPJ"]
    );
    const ContatoCorreto = ComercianteValidacoes.validaContatoComerciante(
      atualizacaoComerciante["Contato"]
    );
    const E_CommerceCorreto = ComercianteValidacoes.validaEcommerce(
      atualizacaoComerciante["E_Commerce"]
    );
    const EstadoCorreto = ComercianteValidacoes.validaEstadoComerciante(
      atualizacaoComerciante["Estado"]
    );

    try {
      await db.Comerciante.update(atualizacaoComerciante, {
        where: { id: Number(id) },
      });
      const comercianteAtualizado = await db.Comerciante.findOne({
        where: { id: Number(id) },
      });

      if (comercianteAtualizado) {
        if (isValid) {
          return res.status(200).json(comercianteAtualizado);
        } else {
          if (!Razao_SocialCorreta) {
            throw new Error(`Razão social inválida, tente novamente.`);
          }

          if (!CNPJCorreto) {
            throw new Error(`CNPJ inválido, tente novamente.`);
          }

          if (!ContatoCorreto) {
            throw new Error(`Contato inválido, tente novamente.`);
          }

          if (!E_CommerceCorreto) {
            throw new Error(`E-commerce inválido, tente novamente.`);
          }
          if (!EstadoCorreto) {
            throw new Error(`Estado inválido, tente novamente.`);
          }
        }
      } else {
        return res
          .status(404)
          .json(
            `Não foi possível atualizar o registro ${id} pois o mesmo ainda não foi criado ou foi deletado. Revise o ID inserido.`
          );
      }
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async deletaComerciante(req, res) {
    const { id } = req.params;
    try {
      const idDeletado = await db.Comerciante.destroy({
        where: { id: Number(id) },
      });

      if (idDeletado) {
        return res.status(200).json(`Registro ${id} deletado com sucesso!`);
      } else {
        return res
          .status(404)
          .json(
            `Não foi possível deletar o registro ${id} pois o mesmo não existe ou já foi deletado anteriormente. Revise o ID inserido.`
          );
      }
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
}

export default ComercianteController;
