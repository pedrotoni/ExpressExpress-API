class ClienteValidacoes{
    /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
    static validaNomeCliente(nome) {
        const regexNome = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,50}$/;
        return regexNome.test(nome)
    } 

    /**
     * 
     * @param {string} cpf
     * @returns boolean
     */

    static validaCPFCliente(cpf) {
        const regexCPF = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
        return regexCPF.test(cpf);
    }

    /**
     * 
     * @param {string} email 
     * @returns boolean
     */
    static validaEmailCliente(email){
        const regexCliente = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        return regexCliente.test(email)
    }

    /**
     * 
     * @param {string} estado 
     * @returns boolean
     */

    static validaEstadoCliente(estado) {
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
            if (estadosBrasil.includes(estado.toUpperCase()) === true) {
                return true;
            } else {
                return false;
            }
    }

    /**
     * 
     * @param {string} nome 
     * @param {string} cpf 
     * @param {string} email 
     * @param {string} estado 
     * @returns boolean
     */

    static isValid(nome,cpf,email,estado) {
        return this.validaNomeCliente(nome) && this.validaCPFCliente(cpf) && this.validaEmailCliente(email) && this.validaEstadoCliente(estado);
    }


}

export default ClienteValidacoes;
