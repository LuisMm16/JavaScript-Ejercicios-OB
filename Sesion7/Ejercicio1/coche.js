export class Coche {
  constructor (peso, potencia, marca){
		this.peso = peso;
		this.potencia = potencia;
		this.marca = marca;
  }
}

const coche = new Coche(45,20, "ford");
console.log(coche.potencia);