// estructura de código para nuestro segundo ejemplo de ventanas emergentes e iframes


$(document).ready(function(e){
   var param = "width=300, height=200, left=300, top=300";
   var ventana= open("http://www.facebook.com", "Red docial", param);
   
   $("#botoncerrar").click(function(e){
      e.preventDefault();
      ventana.close();
   });
});


// usamos una variable para declarar nuestros parámetros para luego asignar la variable dentro de nuestra declaración open.