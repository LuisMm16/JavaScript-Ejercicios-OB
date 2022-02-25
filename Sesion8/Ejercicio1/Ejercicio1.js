const suma = (a,b) => console.log(a + b);
const resta = (a,b) => console.log(a - b);
const multi = (a,b) => console.log(a * b);
const division = (a,b) => {
	if (b == 0) return console.log("No se puede dividir por cero");
	console.log(a / b);
}

suma(2,3);
resta(5,2);
multi(5,2);
division(5,0);
division(7,2);