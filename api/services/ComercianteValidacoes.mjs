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

    /**
     * 
     * @param {string} cpf //confirmar com Leo depois
     * @returns boolean
     */

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
            'ACRE','AC',
            'ALAGOAS','AL',
            'AMAPÁ','AMAPA','AP',
            'AMAZONAS','AM',
            'BAHIA','BA',
            'CEARÁ','CE',
            'DISTRITO FEDERAL','DF',
            'ESPÍRITO SANTO','ESPIRITO SANTO','ES',
            'GOIÁS','GOIAS','GO',
            'MARANHÃO','MARANHAO','MA',
            'MATO GROSSO','MT',
            'MATO GROSSO DO SUL','MS',
            'MINAS GERAIS','MG',
            'PARÁ','PARA','PA',
            'PARAÍBA','PARAIBA','PB',
            'PARANÁ','PARANA','PR',
            'PERNAMBUCO','PE',
            'PIAUÍ','PIAUI','PI',
            'RIO DE JANEIRO','RJ',
            'RIO GRANDE DO NORTE','RN',
            'RIO GRANDE DO SUL','RS',
            'RORAIMA','RR',
            'RONDÔNIA','RONDONIA','RO',
            'SANTA CATARINA','SC',
            'SÃO PAULO','SAO PAULO','SP',
            'SERGIPE','SE',
            'TOCANTINS','TO'
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


