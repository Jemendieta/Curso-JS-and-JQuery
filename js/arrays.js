// trabajando con arrays
// decalaramos nuestro array
   var articulos=["zapatillas","pantalones","camisetas","balones"];

// ahora escribimos en pantalla el contenido segpun la propiedad

   document.write("<p> el primer artículo es <strong>");
   document.write(articulos[0] + "</strong></p>");
   // alert(articulos.length);

   document.write("<p>El ultimo elemento del array es <strong>");
   document.write(articulos[articulos.length-1] + "</strong></p>");

// agregando elementos(inicio) a nuestro array con la propiedad "unshift"
   articulos.unshift("canicas");
   document.write("<p> casi nos olvidamos!! de agregar las <strong>");
   document.write(articulos[0] + "</strong></p>")

// agregando elementos(final) a nuestro array con la propiedad "push"
articulos.push("canilleras");
document.write("<p>agreganos un elemento al final de nuestro array <strong>");
document.write(articulos[articulos.length-1] + "</strong></p>");

// también podemos combinar la propiedad push con prompt
articulos.push(prompt("ingrese el artículo para agregar a lista"));
document.write("<p>agreganos un elemento al final de nuestro array usando prompt <strong>");
document.write(articulos[articulos.length-1] + "</strong></p><br>");

// ahora mostraremos la cantida de elementos que se encuentran en nuestro array
document.write("<p>" + articulos[0] + "<br>");
document.write(articulos[1] + "<br>");
document.write(articulos[2] + "<br>");
document.write(articulos[3] + "<br>");
document.write(articulos[4] + "<br>");
document.write(articulos[5] + "<br>");
document.write(articulos[6] + "<br></p><br>");

// este ejemplo nos permite borrar un elemento de nuestra lista, "shift" para que sea el primero y "pop" para el ultimo
alert("borraremos el primer elemento");
articulos.shift(); 
document.write("<p>" + articulos[0] + "<br>");
document.write(articulos[1] + "<br>");
document.write(articulos[2] + "<br>");
document.write(articulos[3] + "<br>");
document.write(articulos[4] + "<br>");
document.write(articulos[5] + "<br></p><br>");

// ahora haremos lo mismo con "pop" para eliminar el ultimo elemento
alert("borraremos el ultimo elemento");
articulo.pop();
document.write("<p>" + articulos[0] + "<br>");
document.write(articulos[1] + "<br>");
document.write(articulos[2] + "<br>");
document.write(articulos[3] + "<br>");
document.write(articulos[4] + "<br>");
document.write(articulos[5] + "<br></p>");
