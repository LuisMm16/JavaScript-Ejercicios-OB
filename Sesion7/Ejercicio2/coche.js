export class Coche {
	#peso;
	#potencia;
	#marca;

  constructor (peso, potencia, marca){
		this.#peso = peso;
		this.#potencia = potencia;
		this.#marca = marca;
	}

	get peso(){
		return this.#peso;
  }
  
  get potencia(){
		return this.#potencia;
  }

	get marca(){
		return this.#marca;
	}

	set peso(peso){
		this.#peso = peso;
	}

	set potencia(potencia){
		this.#potencia = potencia;
	}

	set marca(marca){
		this.#marca = marca;
	}
}