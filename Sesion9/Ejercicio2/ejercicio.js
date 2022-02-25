const sumar = (a,b) => {
  if(typeof a != 'number' || typeof b != 'number'){
    throw new Error("Uno de los elementos no es un número");
  }
  return a + b;
}

try {
  sumar(1,[]);
} catch (error) {
  console.warn("No se está utilizando correctamente la función");
  console.error(error);
}

console.info("El programa ha finalizado");