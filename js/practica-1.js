// CALCULADORA DON INTERFAZ GRÁFICA
   // función para los números
   // la variable cifra permite concatenar un número al lado del que gerena la función display_numeros

// cifra con cadena vacía permite concatenar números en nuestra calculadora
var cifra="";
var acumula=0;//guarda el valor de la concatenación
var operacion=true;// la iniciamos a modo de primera operación
var sumar=false;
var restar=false;

// función para mostrar números en nuestra calculadora

function display_numeros(numero){
   document.getElementById('display').value=cifra+numero;//concatenamos nuestros números
   cifra=document.getElementById("display").value;//mostramos la concatenación anterior
}

// función para la operación suma

function suma(){
   if (restar) {//por si nuestra primera operación fue resta
      acumula=acumula-parseInt(cifra);
      document.getElementById("display").value=acumula;
   }else{
      acumula=acumula+parseInt(cifra);
   document.getElementById("display").value=acumula;
   }
   
   cifra="";
   sumar=true;
   restar=false;//reseteamos la variable para que regrese a su estado de declaración

}

// función para la operación resta

function resta(){
if (operacion===false) {//si no es la primera operación
   if (sumar) {
      acumula=acumula+parseInt(cifra);
      document.getElementById("display").value=acumula;
   }else {
      acumula=acumula-parseInt(cifra);
   document.getElementById("display").value=acumula;
      }
}else{// si es la primera operación

      acumula=parseInt(cifra);
      operacion=false;// es false porque ya se ha eralizado una operación

      cifra="";
      sumar=false;
      restar=true;
   }
   
}

// función para el resultado(boton igual)
function resultado(){
   if (sumar) {
      document.getElementById("display").value=acumula+parseInt(cifra);

   }else if(restar){
      document.getElementById("display").value=acumula-parseInt(cifra);
   }
// esto almacena lo que tenemos en pantalla luego de realizar las operaciones
   acumula=parseInt(document.getElementById("display").value);
   cifra=0;
}
