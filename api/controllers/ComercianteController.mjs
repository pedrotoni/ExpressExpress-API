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

    static async mostraUmComerciante(req, res) {
        const { id } = req.params;
        try {
            const oneComerciante = await db.Comerciante.findOne({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(oneComerciante);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }

    static async criaComerciante(req, res) {
        const newComerciante = req.body;
        try {
            const ComercianteCriado = await db.Comerciante.create(newComerciante);
            return res.status(200).json(comercianteCriado);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }


static async atualizaComerciante(req, res) {
    const { id } = req.params;
    const atualizacaoComerciante = req.body;
    try{
      await db.Comerciante.update(atualizacaoComerciante, {where: {id: Number(id)}});
      const comercianteAtualizado = await db.Comerciante.findOne({where: {id: Number(id)}});
      return res.status(200).json(comercianteAtualizado);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }
}

export default ComercianteController;
