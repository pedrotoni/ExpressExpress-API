class ComercianteValidacoes{
    /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
    static validaRazaoSocialComerciante(Razao_Social) {
        const regexRazao_Social = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,50}$/;
        return regexRazao_Social.test(Razao_Social)
    } //Procurar regex que aceita acentos depois

  

    static validaCNPJComerciante(CNPJ) {
        const regexCNPJ = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
        return regexCNPJ.test(CNPJ);
    }


    static validaContatoComerciante(Contato){
        const regexComerciante = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        return regexComerciante.test(Contato)


    }
    static validaEcommerce(E_Commerce){
        const regexEcommerce =  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,50}$/;
        return regexEcommerce.test(E_Commerce)
    }

    /**
     * 
     * @param {string} estado 
     * @returns boolean
     */

    static validaEstadoComerciante(Estado) {
        const estadosBrasil = [
            'ACRE',
            'ALAGOAS',
            'AMAPÁ','AMAPA',
            'AMAZONAS',
            'BAHIA',
            'CEARÁ',
            'DISTRITO FEDERAL',
            'ESPÍRITO SANTO','ESPIRITO SANTO',
            'GOIÁS','GOIAS',
            'MARANHÃO','MARANHAO',
            'MATO GROSSO',
            'MATO GROSSO DO SUL',
            'MINAS GERAIS',
            'PARÁ','PARA',
            'PARAÍBA','PARAIBA',
            'PARANÁ','PARANA',
            'PERNAMBUCO',
            'PIAUÍ','PIAUI',
            'RIO DE JANEIRO',
            'RIO GRANDE DO NORTE',
            'RIO GRANDE DO SUL',
            'RORAIMA',
            'RONDÔNIA','RONDONIA',
            'SANTA CATARINA',
            'SÃO PAULO','SAO PAULO',
            'SERGIPE',
            'TOCANTINS',
            ]
            if (estadosBrasil.includes(Estado.toUpperCase()) === true) {
                return true;
            } else {
                return false;
            }
    }

    /**
     * 
     * @param {string} razao_Social
     * @param {string} cnpj
     * @param {string} contato
     * @param {string} e_Commerce
     * @param {string} estado 
     * @returns boolean
     */

    static isValid(Razao_Social,CNPJ,Contato,E_Commerce,Estado) {
        return this.validaRazaoSocialComerciante(Razao_Social) && this.validaCNPJComerciante(CNPJ)  && this.validaContatoComerciante(Contato) && this.validaEcommerce(E_Commerce) && this.validaEstadoComerciante(Estado);
    }


}

export default ComercianteValidacoes;


