// Estructuras de control de flujo segunda parte

// continuacion del ejemplo anterior condicional1
// ahora usamos el operador && y ||

var preciocoche=60000;
var dineroahorrado=prompt("ingrese cantidad ahorrada");
var loteria=prompt("te has ganado la lotería?");

if (dineroahorrado >= preciocoche || loteria=="si") {
   alert("puedes comprar el choche...felicidades!");
}
else{
   alert("no puedes comprar el coche, no cumples los requisitos de compra");
}

alert("continuamos con el programa");
