// programacion orientada a objetos en javascript
   //para enteder estos conceptos es necesario mencionar lo siguiente:
   //propiedades: como es
   //metodos: que puede hacer
   //instancias: diferentes elementos con similares caracterpisticas
// otro aspecto a considerar es la nomenclatura del punto, es decir, la propiedad que se modificará o se ejecutará en nuestro programa, por ejemplo:
   //document.write
   //boton.focus
   //ejemplo.color="azul"

// modificando nuestro boton1 desde js
var miboton = document.getElementById("boton1");
miboton.style.width="120px";
miboton.style.height="35px";
miboton.style.color="#fff";
miboton.style.background="olive";
miboton.style.fontWeight="bold";
miboton.style.border="5px solid #fff";
miboton.style.borderStyle="outset";
miboton.style.cursor="pointer";

// ahora hacemos algos similar con nuestro boton2
var miboton2=document.getElementById("boton2");
miboton2.style.width="110px";
miboton2.style.height="30px";
miboton2.style.color="#fff";
miboton2.style.fontWeight="bold";
miboton2.style.background="crimson";
miboton2.style.border="4px solid gainsboro";
miboton2.style.borderStyle="outset";

//agregamos un cuadro de texto dentro de una variable.
var cuadrotexto=document.getElementById("micuadro");
cuadrotexto.style.background="lightgreen";
cuadrotexto.style.height="1.5rem";
// ahora trabajaremos con metodos para nuestros tres elementos
   // Focus
miboton2.focus(); //hará que el foco este sobre el boton 2
   // value
// cuadrotexto.value="Escriba aquí...";
