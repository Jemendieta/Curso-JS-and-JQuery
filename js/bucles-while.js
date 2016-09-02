// TRABAJANDO CON BUCLES WHILE=Mientras

// var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
// var contador=0;

// while(contador<meses.length){
//    document.write(meses[contador]+"<br>");
//    contador++;
// }
// script para validar los datos denuestro div
var nombre, edad, poblacion;

nombre=prompt("ingresa tu nombre", "aquí tu nombre");
   while(!isNaN(nombre)){
      nombre=prompt("solo texto para el nombre", "aquí tu nombre");
}
edad=prompt("ingresa tu edad", "aquí tu edad");
   while(edad<=0||edad>100 || isNaN(edad)){
      edad=prompt("ingresa una edad validad", "aquí tu edad");
}
poblacion=prompt("ingresa la población", "aquí tu ciudad");
   while(!isNaN(poblacion)){
      poblacion=prompt("solo texto para el nombre", "aquí tu ciudad");
}
// ahora colocaremos esos datos al lado que corresponde e nuestro div

