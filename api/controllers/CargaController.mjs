import db from "../models/index.mjs";

class CargaController {
    static async mostraCarga(req,res) {
        try {
            const allCarga = await db.Carga.findAll();
            console.log(allCarga);
            return res.status(200).json(allCarga);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }

    static async mostraUmaCarga(req, res) {
        const { id } = req.params;
        try {
            const oneCarga = await db.Carga.findOne ({where: {id: Number(id)}});
            return res.status(200).json(oneCarga);
        } catch (e){
            return res.status(500).json(e.message);
        }
    }

    static async criaCarga(req,res) {
        const newCarga = req.body;
        try {
            const cargaCriada = await db.Carga.create(newCarga);
            return res.status(200).json(cargaCriada);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }

    static async atualizaCarga(req,res) {
        const { id } = req.params;
        const atualizacaoCarga = req.body;
        try {
            await db.Carga.update(atualizacaoCarga, {where: {id: Number(id)}});
            const cargaAtualizada = await db.Carga.findOne ({where: {id: Number(id)}});
            return res.status(200).json(cargaAtualizada);
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
}

export default CargaController;