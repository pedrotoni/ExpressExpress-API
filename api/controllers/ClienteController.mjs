import db from "../models/index.mjs";
import ClienteValidacoes from "../services/ClienteValidacoes.mjs";

class ClienteController {
  static async mostraCliente(req, res) {
    try {
      const allClientes = await db.Cliente.findAll();
      return res.status(200).json(allClientes);
    } catch (e) {
      return res.status(400).json(e.message);
    }
  }

  static async mostraUmCliente(req, res) {
    const { id } = req.params;
    try {
      const oneCliente = await db.Cliente.findOne({
        where: { id: Number(id) },
      });
      if (oneCliente) {
        return res.status(200).json(oneCliente);
      } else {
        return res
          .status(404)
          .json(
            `O registro ${id} ainda não foi criado ou foi deletado! Revise o ID inserido.`
          );
      }
    } catch (e) {
      return res.status(400).json(e.message);
    }
  }

  static async criaCliente(req, res) {
    const newCliente = req.body;
    const isValid = ClienteValidacoes.isValid(
      newCliente["Nome"],
      newCliente["CPF"],
      newCliente["E_mail"],
      newCliente["Estado"]
    );

    const nomeCorreto = ClienteValidacoes.validaNomeCliente(newCliente["Nome"]);
    const cpfCorreto = ClienteValidacoes.validaCPFCliente(newCliente["CPF"]);
    const emailCorreto = ClienteValidacoes.validaEmailCliente(newCliente["E_mail"]);
    const estadoCorreto = ClienteValidacoes.validaEstadoCliente(newCliente["Estado"]);

    try {
      if (isValid) {
        const clienteCriado = await db.Cliente.create(newCliente);
        return res.status(200).json(clienteCriado);
      } else {

        if (!nomeCorreto) {
          throw new Error (`Nome digitado inválido, tente novamente.`)
        }

        if (!cpfCorreto) {
          throw new Error (`CPF digitado inválido, tente novamente.`)
        }

        if (!emailCorreto) {
          throw new Error (`E-mail digitado inválido, tente novamente.`)
        }

        if (!estadoCorreto) {
          throw new Error (`Estado digitado inválido, tente novamente.`)
        }

      }
    } catch (e) {
      return res.status(400).json(e.message);
    }
  }

  static async atualizaCliente(req, res) {
    const { id } = req.params;
    const atualizacaoCliente = req.body;
    const isValid = ClienteValidacoes.isValid(
      atualizacaoCliente["Nome"],
      atualizacaoCliente["CPF"],
      atualizacaoCliente["E_mail"],
      atualizacaoCliente["Estado"]
    );
    const nomeCorreto = ClienteValidacoes.validaNomeCliente(atualizacaoCliente["Nome"]);
    const cpfCorreto = ClienteValidacoes.validaCPFCliente(atualizacaoCliente["CPF"]);
    const emailCorreto = ClienteValidacoes.validaEmailCliente(atualizacaoCliente["E_mail"]);
    const estadoCorreto = ClienteValidacoes.validaEstadoCliente(atualizacaoCliente["Estado"]);

    try {
      await db.Cliente.update(atualizacaoCliente, {
        where: { id: Number(id) },
      });
      const clienteAtualizado = await db.Cliente.findOne({
        where: { id: Number(id) },
      });

      if (clienteAtualizado) {
        if (isValid) {
          return res.status(200).json(clienteAtualizado);
        } else {
          
          if (!nomeCorreto) {
            throw new Error (`Nome digitado inválido, tente novamente.`)
          }
  
          if (!cpfCorreto) {
            throw new Error (`CPF digitado inválido, tente novamente.`)
          }
  
          if (!emailCorreto) {
            throw new Error (`E-mail digitado inválido, tente novamente.`)
          }
  
          if (!estadoCorreto) {
            throw new Error (`Estado digitado inválido, tente novamente.`)
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
      return res.status(400).json(e.message);
    }
  }

  static async deletaCliente(req, res) {
    const { id } = req.params;
    try {
      const idDeletado = await db.Cliente.destroy({
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
      return res.status(400).json(e.message);
    }
  }
}

export default ClienteController;
