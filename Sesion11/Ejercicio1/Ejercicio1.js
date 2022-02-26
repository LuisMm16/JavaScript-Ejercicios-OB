export default class Figura {
  #_color;
  constructor(color){
    this.#_color = color;
  }

  calcularArea(){
    return -1;
  }

  get getColor(){
    return this.#_color;
  }

  set setColor(color){
    this.#_color = color;
  }
}

/*
const figura1 = new Figura("azul");
console.log("Antes: " + figura1.getColor);
figura1.setColor = "verde";
console.log("Después: " + figura1.getColor);
*/