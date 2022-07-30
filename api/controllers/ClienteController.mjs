import db from "../models/index.mjs";

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
      const oneCliente = await db.Cliente.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(oneCliente);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async criaCliente(req, res) {
    const newCliente = req.body;
    try {
      const clienteCriado = await db.Cliente.create(newCliente);
      return res.status(200).json(clienteCriado);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
}

export default ClienteController;
