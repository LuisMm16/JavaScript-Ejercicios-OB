function eliminarUltimo(myArray) {
	myArray.pop();
	console.log("Se ha eliminado el último elemento");
}

const array = [1,2,3,4,5];
console.log("Inicialmente: " + array)
eliminarUltimo(array);
console.log("Después de llamar a la función: " + array);