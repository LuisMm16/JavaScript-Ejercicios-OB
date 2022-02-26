import Figura from "../Ejercicio1/Ejercicio1.js";
import { Circulo, Rectangulo } from "../Ejercicio2/Ejercicio2.js";

//Se ha implementado el método calcularArea() en Ejercicio1 y Ejercicio2
//Pruebas

//Figura genérica:
const figGenerica = new Figura();
console.log(figGenerica.calcularArea());

//Círculo
const circulo = new Circulo(5, "verde");
console.log(circulo.calcularArea());

//Rectángulo
const rectangulo = new Rectangulo(4, 6, "rojo");
console.log(rectangulo.calcularArea());