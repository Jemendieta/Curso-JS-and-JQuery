// FUNCIONES PARTE 3
// funciones- operaciones básicas
var repetir="si";

function suma(num1, num2){
   alert("la suma es: " + (num1+num2));
}

function resta(num1, num2){
   alert("la resta es: " + (num1-num2));
}

function multiplicar(num1, num2){
   alert("la multiplicación es: " + (num1*num2));
}

function dividir(num1, num2){
   alert("la división es: " + (num1/num2));
}
do{
   var operacion=prompt("¿Que operación deseas realizar?");

   var operador1=parseInt(prompt("ingresa el primer número"));
   var operador2=parseInt(prompt("ingresa el segundo número"));

   if (operacion=="sumar") {
      suma(operador1,operador2);
   }
   else if (operacion=="restar") {
      resta(operador1,operador2);
   }
   else if (operacion=="multiplicar") {
      multiplicar(operador1,operador2);
   }
   else if (operacion=="dividir") {
      dividir(operador1,operador2);
   }
   else{
      alert("Operación no contemplada");
   }
   repetir=prompt("¿desea repetir?");
   
}while(repetir=="si");