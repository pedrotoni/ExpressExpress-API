class CargaValidacoes {

    /**
     * 
     * @param {string} peso 
     * @returns boolean
     */
    static validaPeso_KG(peso) {
        if (peso >= 0.1 && peso <=50.0) {
            return true;
        } else {
            return false;
        }
     }

    /**
      * 
      * @param {string} quantidade 
      * @returns boolean
      */
    static validaNumero_de_Volume(quantidade) {
        if (quantidade > 0 && quantidade <= 5) {
            return true;
        } else { 
            return false;
        }
    }

    /**
     * 
     * @param {true} seguro
     * @returns boolean
     */
    static validaSeguro(seguro) {
        if (typeof seguro == "boolean") {
            return true;
        } else {
            return false;
        }
    } 

    /**
     * 
     * @param {true} fragil
     * @returns boolean
     */
    static validaFragil (fragil) {
        if (typeof fragil == "boolean"){
            return true;
        } else {
            return false;
        }
    }

    /**
     * 
     * @param {string} peso 
     * @param {string} quantidade 
     * @param {boolean} seguro 
     * @param {boolean} fragil 
     * @returns 
     */
    static isValid(peso, quantidade, seguro, fragil){
            return this.validaPeso_KG(peso) && this.validaNumero_de_Volume(quantidade) && this.validaSeguro(seguro) && this.validaFragil(fragil);
    }
    
}


export default CargaValidacoes;