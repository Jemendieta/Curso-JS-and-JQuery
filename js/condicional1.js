// ESTRUCTURAS DE CONTROL DE FLUJO
   
   // ejemplo-1
/*
var preciocoche=60000;
var dineroahorrado=150000;

if (dineroahorrado >= preciocoche) {
   alert("puedes comprar el choche...felicidades!");
}
alert("Te falta plata misio...! continuamos con el programa");
*/

   // ejemplo-2 usando prompt y else

var preciocoche=60000;
var dineroahorrado=prompt("ingrese cantidad ahorrada");

if (dineroahorrado >= preciocoche) {
   alert("puedes comprar el choche...felicidades!");
}
else{
   alert("no puedes comprar el coche, te falta dinero");
}

alert("continuamos con el programa");
