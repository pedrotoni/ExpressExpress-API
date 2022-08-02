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
     try {
          if (isValid) {
            const comercianteCriado = await db.Comerciante.create(novoComerciante);
            return res.status(200).json(comercianteCriado);
          } else {
            throw new Error(
              "Há um erro nos dados que você está tentando inserir! Tente novamente!"
            );
          }
        } catch (e) {
          return res.status(500).json(e.message);
        }
      }
      static async atualizaComerciante(req, res) {
        const { id } = req.params;
        const atualizacaoComerciante = req.body;
        const isValid = ComercianteValidacoes.isValid(
          atualizacaoComerciante["Nome"],
          atualizacaoComerciante["CPF"],
          atualizacaoComerciante["E_mail"],
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
              throw new Error(
                "Há um erro nos dados que você está tentando atualizar! Tente novamente!"
              );
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