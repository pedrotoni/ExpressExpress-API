import db from "../models/index.mjs";
import CargaValidacoes from "../services/CargaValidacoes.mjs";

class CargaController {
    static async mostraCarga(req,res) {
        try {
            const allCarga = await db.Carga.findAll();
            return res.status(200).json(allCarga);
        } catch (e) {
            return res.status(400).json(e.message);
        }
    }

    static async mostraUmaCarga(req, res) {
        const { id } = req.params;
        try {
            const oneCarga = await db.Carga.findOne ({where: {id: Number(id)}});
            if (oneCarga){
                return res.status(200).json(oneCarga);    
            } else {
                return res.status(404).json (`Não foi possível encontrar a carga ID:${id}. Por favor revise od ID inserido.`);
            } 
        } catch (e){
            return res.status(400).json(e.message);
        }
    }

    static async criaCarga(req,res) {
        const newCarga = req.body;
        const isValid = CargaValidacoes.isValid(
            newCarga["Peso_KG"],
            newCarga["Numero_de_volume"],
            newCarga["Fragil"],
            newCarga["Seguro"]
        );
        
        const pesoCorreto = CargaValidacoes.validaPeso_KG(newCarga["Peso_KG"]);
        const volumeCorreto = CargaValidacoes.validaNumero_de_Volume(newCarga["Numero_de_volume"]);
        const fragilCorreto = CargaValidacoes.validaFragil(newCarga["Fragil"]);
        const seguroCorreto = CargaValidacoes.validaSeguro(newCarga["Seguro"]);

        try {
            if (isValid) {
                const cargaCriada = await db.Carga.create(newCarga);
                return res.status(200).json(cargaCriada);
            } else {
                if (!pesoCorreto){
                    throw new Error (`Peso informado precisa estar entre 1 e 50kg. Verifique o valor informado.`)
                }
                
                if (!volumeCorreto){
                    throw new Error (`Entregamos até 5 volumes em um envio. Verifique o valor informado.`)
                }
                
                if (!fragilCorreto) {
                    throw new Error (`O atributo fragil é um booleano. Digite true para carga frágil ou false se não for.`)
                }

                if (!seguroCorreto) {
                    throw new Error (`O atributo seguro é um booleano. Digite true para carga frágil ou false se não for.`)
                }
            }

        } catch (e) {
            return res.status(400).json(e.message);
        }
    }

    static async atualizaCarga(req,res) {
        const { id } = req.params;
        const atualizacaoCarga = req.body;
        const isValid = CargaValidacoes.isValid(
            atualizacaoCarga["Peso_KG"],
            atualizacaoCarga["Numero_de_volume"],
            atualizacaoCarga["Fragil"],
            atualizacaoCarga["Seguro"]
        );

        const pesoCorreto = CargaValidacoes.validaPeso_KG(atualizacaoCarga["Peso_KG"]);
        const volumeCorreto = CargaValidacoes.validaNumero_de_Volume(atualizacaoCarga["Numero_de_volume"]);
        const fragilCorreto = CargaValidacoes.validaFragil(atualizacaoCarga["Fragil"]);
        const seguroCorreto = CargaValidacoes.validaSeguro(atualizacaoCarga["Seguro"]);

        try {
            await db.Carga.update(atualizacaoCarga, {where: {id: Number(id)}
            });
            const cargaAtualizada = await db.Carga.findOne ({where: {id: Number(id)}
            });
        
        if (cargaAtualizada) {
            if (isValid) {
              return res.status(200).json(cargaAtualizada);  
            } else {
                if (!pesoCorreto){
                    throw new Error (`Peso informado precisa estar entre 1 e 50kg. Verifique o valor informado.`)
                }
                
                if (!volumeCorreto){
                    throw new Error (`Entregamos até 5 volumes em um envio. Verifique o valor informado.`)
                }
                
                if (!fragilCorreto) {
                    throw new Error (`O atributo fragil é um booleano. Digite true para carga frágil ou false se não for.`)
                }

                if (!seguroCorreto) {
                    throw new Error (`O atributo seguro é um booleano. Digite true para carga frágil ou false se não for.`)
                } 
                  else{
                      return res.status(404).json(`Não foi possível atualizar o registro ID:${id} pois o mesmo ainda não foi criado ou foi deletado. Verifique o ID informado.`);                              
                  }                
                }
             }
        } catch (e) {
            return res.status(400).json(e.message)
        }
    }

    static async deletaCarga(req, res) {
        const { id } = req.params;
        try{
            const idDeletado = await db.Carga.destroy({
                where: {id: Number(id)}
            })

            if (idDeletado) {
                return res.status(200).json(`Registro ID:${id} deletado com sucesso!`);
            } else {
                return res.status(200).json(`Não foi possível deletar o registo de ID:${id}, pois o mesmo já foi deletado ou ainda não foi criado. Verifique o ID informado.`);
            }
            
        } catch (e) {
            return res.status(400).json(e.message)
        }
    }
}

export default CargaController;