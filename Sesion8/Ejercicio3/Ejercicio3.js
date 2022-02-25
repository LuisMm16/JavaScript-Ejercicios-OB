function eliminarUltimo(myArray) {
	if(!Array.isArray(myArray)){
		return console.log("El elemento ingresado no es un Array");
	} else if (myArray.length == 0) {
		return console.log("El array no contiene elementos")
	}
	myArray.pop();
	console.log("Se ha eliminado el último elemento");
}

const a = [1,2,3];
const b = {
  "name": "Luis",
  "apellido":"Martinez"
}

eliminarUltimo([]);
eliminarUltimo(b);
eliminarUltimo([1,2]);