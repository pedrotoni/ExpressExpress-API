import db from "../models/index.mjs";

class EnvioValidacoes {
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

  static validaPrazo(prazo) {
    return prazo <= 24;
  }

  /*static async verificaEstadosIguais(idCliente, idComerciante) {
    const cliente = await db.Cliente.findOne(idCliente);
    const comerciante = await db.Comerciante.findOne(idComerciante);

    if (!cliente || !comerciante) {
      return false;
    } else {
      return cliente["Estado"] === comerciante["Estado"];
    }
  }*/

  static isValid(meioTransporte, prazo) {
    return (
      this.validaMeioTransporte(meioTransporte) &&
      this.validaPrazo(prazo)
    );
  }
}

export default EnvioValidacoes;
