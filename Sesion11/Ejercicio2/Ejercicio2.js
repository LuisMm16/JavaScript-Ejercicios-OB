import Figura from "../Ejercicio1/Ejercicio1.js";

export class Circulo extends Figura {
  constructor(radio, color){
    super(color);
    this.radio = radio;
  }

  calcularArea(){
    return 3.14* (this.radio**2);
  }
}

export class Rectangulo extends Figura {
  constructor(base, altura, color){
    super(color);
    this.base = base;
    this.altura = altura;
  }

  calcularArea(){
    return this.base * this.altura;
  }
}


//Pruebas
/*
//Circulo
const circulo = new Circulo(5, "verde");
console.log("El radio del círculo es: " + circulo.radio);
console.log("El color del círculo es: " + circulo.getColor);
console.log("------------------------------------------------------")

//Rectangulo
const rectangulo = new Rectangulo(4, 6, "rojo");
console.log("La altura del rectángulo es: " + rectangulo.altura);
console.log("La base del rectángulo es: " + rectangulo.base);
console.log("El color del rectángulo es: " + rectangulo.getColor);
rectangulo.setColor = "amarillo";
console.log("El color del rectángulo es: " + rectangulo.getColor);
*/