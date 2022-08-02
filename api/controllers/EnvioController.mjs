import db from "../models/index.mjs";

class EnvioController {
    static async mostraEnvio(req,res) {
        try {
            const allEnvios = await db.Envio.findAll();
            return res.status(200).json(allEnvios)
        } catch (e) {
            return res.status(500).json(e.message);

        }
    }

    static async mostraUmEnvio(req,res) {
        const { id } = req.params;
        try {
            const oneEnvio = await db.Envio.findOne({where: {id: Number(id)}});
            if (oneEnvio) {
                return res.status(200).json(oneEnvio);
            } else {
                return res.status(404).json(`Não foi possível encontrar o envio nº${id}. Por favor revise o ID inserido.`)
            }
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async criaEnvio(req,res) {
        const newEnvio = req.body;
        
        try{
            const envioCriado = await db.Envio.create(newEnvio);
            return res.status(200).json(envioCriado)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    static async atualizaEnvio(req,res) {
        const { id } = req.params;
        const atualizacaoEnvio = req.body;
        try {
            await db.Envio.update(atualizacaoEnvio, {where: {id: Number(id)}});
            const envioAtualizado = await db.Envio.findOne({where: {id: Number(id)}});
            return res.status(200).json(envioAtualizado);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }

    static async deletaEnvio(req, res) {
        const { id } = req.params;
        try {
            await db.Envio.destroy({where: {id: Number(id)}});
            return res.status(200).json(`Envio nº ${id} deletado com sucesso.`)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
}

export default EnvioController;