// estructura de nuetra clase deventanas emergentes e iframes tercera parte
$(document).ready(function(e){
   $("#pulsar").click(function(e){
      e.preventDefault();
      $("#iframe").attr("src","http://www.marca.com");
   });
});

// este ejemplo permite cargar un sitio web en un espacio de nuestra web principal.