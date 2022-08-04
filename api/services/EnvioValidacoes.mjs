class EnvioValidacoes {

    /**
     * 
     * @param {string} meioTransporte 
     * @returns boolean
     */
  static validaMeioTransporte(meioTransporte) {
    const meiosTransporte = [
      "BICICLETA",
      "BICICLETA ELÉTRICA",
      "BICICLETA ELETRICA",
      "MOTO ELÉTRICA",
      "MOTO ELETRICA"
    ];

    if (meiosTransporte.includes(meioTransporte.toUpperCase().trim()) === true) {
      return true;
    } else {
      return false;
    }
  }


  /**
   * 
   * @param {int} prazo 
   * @returns boolean
   */
  static validaPrazo(prazo) {
    return prazo <= 48 && prazo >= 1;
  }

  static isValid(meioTransporte, prazo) {
    return (
      this.validaMeioTransporte(meioTransporte) &&
      this.validaPrazo(prazo)
    );
  }

}

export default EnvioValidacoes;
