class ClienteValidacoes{
    /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
    static validaNomeCliente(nome) {
        const regexNome = /^[a-zA-Z]{3,50}$/;
        return regexNome.test(nome)
    } //Procurar regex que aceita acentos depois

    /**
     * 
     * @param {string} cpf //confirmar com Leo depois
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
            'AC',
            'ALAGOAS',
            'AL',
            'AMAPÁ',
            'AMAPA',
            'AP',
            'AMAZONAS',
            'AM',
            'BAHIA',
            'BA',
            'CEARÁ',
            'CE',
            'DISTRITO FEDERAL',
            'DF',
            'ESPÍRITO SANTO',
            'ESPIRITO SANTO',
            'ES',
            'GOIÁS',
            'GOIAS',
            'GO',
            'MARANHÃO',
            'MARANHAO',
            'MA',
            'MATO GROSSO',
            'MT',
            'MATO GROSSO DO SUL',
            'MS',
            'MINAS GERAIS',
            'MG',
            'PARÁ',
            'PARA',
            'PA',
            'PARAÍBA',
            'PARAIBA',
            'PB',
            'PARANÁ',
            'PARANA',
            'PR',
            'PERNAMBUCO',
            'PE',
            'PIAUÍ',
            'PIAUI',
            'PI',
            'RIO DE JANEIRO',
            'RJ',
            'RIO GRANDE DO NORTE',
            'RN',
            'RIO GRANDE DO SUL',
            'RS',
            'RORAIMA',
            'RR',
            'RONDÔNIA',
            'RONDONIA',
            'RO',
            'SANTA CATARINA',
            'SC',
            'SÃO PAULO',
            'SAO PAULO',
            'SP',
            'SERGIPE',
            'SE',
            'TOCANTINS',
            'TO'
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
