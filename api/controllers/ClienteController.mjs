import db from "../models/index.mjs";
import ClienteValidacoes from "../services/ClienteValidacoes.mjs"

class ClienteController {
  static async mostraCliente(req, res) {
    try {
      const allClientes = await db.Cliente.findAll();
      return res.status(200).json(allClientes);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async mostraUmCliente(req, res) {
    const { id } = req.params;
    try {
      const oneCliente = await db.Cliente.findOne({where: {id: Number(id)}});
      if (oneCliente) {
        return res.status(200).json(oneCliente);
      } else {
        return res.status(404).json(`O registro ${id} ainda não foi criado ou foi deletado! Revise o ID inserido.`)
      }
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async criaCliente(req, res) {
    const newCliente = req.body;
    const isValid = ClienteValidacoes.isValid(newCliente["Nome"],newCliente["CPF"],newCliente["E_mail"],newCliente["Estado"]);

    try {
      if (isValid){
        const clienteCriado = await db.Cliente.create(newCliente);
        return res.status(200).json(clienteCriado);
      } else {
        throw new Error("Há um erro nos dados que você está tentando inserir! Tente novamente!")
      }
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
  
  static async atualizaCliente(req, res) {
    const { id } = req.params;
    const atualizacaoCliente = req.body;
    try{

      await db.Cliente.update(atualizacaoCliente, {where: {id: Number(id)}});
      const clienteAtualizado = await db.Cliente.findOne({where: {id: Number(id)}});

      if (clienteAtualizado) {
        return res.status(200).json(clienteAtualizado);
      } else {
        return res.status(404).json(`Não foi possível atualizar o registro ${id} pois o mesmo ainda não foi criado ou foi deletado. Revise o ID inserido.`)
      }

    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  static async deletaCliente(req,res) {
    const { id } = req.params;
    try{
      const idDeletado = await db.Cliente.destroy({where: {id: Number(id)}})

      if (idDeletado) {
        return res.status(200).json(`Registro ${id} deletado com sucesso!`);
      } else {
        return res.status(404).json(`Não foi possível deletar o registro ${id} pois o mesmo não existe ou já foi deletado anteriormente. Revise o ID inserido.`)
      }
    } catch(e) {
      return res.status(500).json(e.message)
    }
  }
}

export default ClienteController;
