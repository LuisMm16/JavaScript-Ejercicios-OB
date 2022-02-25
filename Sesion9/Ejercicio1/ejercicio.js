const sumar = (a,b) => {
  if(typeof a != 'number' || typeof b != 'number'){
    throw new Error("Uno de los elementos no es un número");
  }
  return a + b;
}

console.log(sumar(4,6));
console.log(sumar(20,[]));