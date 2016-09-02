// trabajando con el bucle Do While

var aleatorio= Math.round(Math.random()*100);
alert(aleatorio);

var minum, intentos;

minum=0;
intentos=0;

var mensaje=document.getElementById("c_mensaje");
var intentosconsumidos=document.getElementById("c_intentos");

do{
   minum=prompt("ingresa un nro entre 0 y 100");
   if (aleatorio>minum) {
      // alert("El número generado es mas alto");
      // document.write("El número generdo es más alto" + "<br>");
      mensaje.value="Es más alto";
      mensaje.style.fontSize="18px";
   }
   if (aleatorio<minum) {
      // alert("El número generado es mas  bajo");
      // document.write("El número generado es más bajo" + "<br>");
      mensaje.value="Es más Bajo";
      mensaje.style.fontSize="18px";
   }
   intentos++;

   intentosconsumidos.value=intentos;
   intentosconsumidos.style.fontSize="18px";
   intentosconsumidos.style.color="red";
   intentosconsumidos.style.textAlign="center";
}
while(aleatorio!=minum);
// alert("Acertaste...lo lograste en "+ intentos + " intentos");
 // document.write("<strong>Acertaste, lo conseguiste en</strong> " + intentos + " <strong>intentos</strong>");
   mensaje.value="correcto...!";
   mensaje.style.color="red";

