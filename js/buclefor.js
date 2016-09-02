// TRABAJANDO CON EL BUCLE FOR

// ejemplo 1
   // for(var i=0;i<10;i++){
   //    alert("Saludo " + i);
   // }
// ::::::::::::::::::::::::::::
// ejemplo 2
// array 1
   // var meses=["enero", "febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octurbe", "Novuembre", "Diciembre"];
   // document.write(meses[0]+ "<br>");

   // for (var i =0 ; i<12; i++) {
   //    document.write(meses[i]+ "<br>");
   // }
// Ejemplo 3: usando lenght(aunque en este caso no es necesario porque conocemos el limite del array)

  // for (var i =0 ; i<meses.length; i++) {
  //     document.write(meses[i]+ "<br>");
  //  }

// Ejemplo 4
   // Array 2
   var trabajores=new Array();
   var persona="";
   var contador=0;

   while(persona!="salir"){
      persona=prompt("ingresa el nombre de un trabajador");
      trabajores[contador]=persona;
      contador++;
   }
   trabajores.pop();
   for(var i=0;i<trabajores.length;i++){
      document.write(trabajores[i]+ "<br>");
   }
