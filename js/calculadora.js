// CREANDO UNA CALCULADORA CON JS para dos números

var num1=prompt("ingresa el primer número");
var num2=prompt("ingresa el segundo número");
// alert(typeof(num1));
if (!isNaN(num1)&& !isNaN(num2)) {//con esta linea verificamos si el dato ingresado es un número(1) o si no lo es(uno) alterando la acción por defecto de isNaN con el operador !
   var operacion=prompt("Que operación deseas realizar? Suma, Resta, Multiplicación o Divicisión");

   if (operacion=="suma") {
      alert(parseInt(num1)+parseInt(num2));
   }
   else if(operacion=="resta"){
      alert(parseInt(num1)-parseInt(num2));
   }
   else if(operacion=="multiplicación" || operacion=="multiplicacion"){
      alert(parseInt(num1)*parseInt(num2));
   }
   else if(operacion=="divición" || operacion=="division"){
      alert(parseInt(num1)/parseInt(num2));
   }
   else{
      alert("operación no contemplada");
   }
}
else{
   if(typeof(num1)=="string" || typeof(num2)=="string"){
      alert("has introducido valores numéricos");
   }
   else{
      alert("ha ocurrido un error no identificado");
   }
}

// else{
//    alert("No se pueden operar los números ingresados en forma de texto");
// }