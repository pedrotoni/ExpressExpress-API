import db from "../models/index.mjs";

class ComercianteController {
  static async mostraComerciante(req, res) {
    try {
      const allComerciantes = await db.Comerciante.findAll();
      return res.status(200).json(allComerciantes);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
}


export default ComercianteController;
