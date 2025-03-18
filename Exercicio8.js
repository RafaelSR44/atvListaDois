class Veiculo {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
  }

  calcularConsumo() {
    return 0;
  }
}

class Carro extends Veiculo {
  constructor(modelo, ano, consumo) {
    super(modelo, ano);
    this.consumo = consumo;
  }

  calcularConsumo() {
    return this.consumo;
  }
}

class Moto extends Veiculo {
  constructor(modelo, ano, eficiencia, distanciaPercorrida) {
    super(modelo, ano);
    this.eficiencia = eficiencia;
    this.consumo = 0;
    this.distanciaPercorrida = distanciaPercorrida;
  }

  calcularConsumo() {
    this.consumo = this.distanciaPercorrida / this.eficiencia;
    return this.consumo;
  }
}