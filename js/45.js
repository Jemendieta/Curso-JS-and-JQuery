// estructura de código js para nuestro ejemplo de formularios parte 2

// Ejemplo #1

// $(document).ready(function(){
//    $("#paypal").click(function(){
//       $("#email").attr("disabled", false).focus().css("background-color","#fff");
//       $("#tarjeta").attr("disabled", true).css("background-color","teal");
//       $("#fecha_tarjeta").attr("disabled",true).css("background-color","teal");

//    });
   
//    $("#visa").click(function(){
//       $("#tarjeta").attr("disabled", false).focus().css("background-color","#fff");
//       $("#fecha_tarjeta").attr("disabled",false).css("background-color","#fff");

//       $("#email").attr("disabled", true).css("background-color","teal");
//    });

//       $("#master").click(function(){
//       $("#tarjeta").attr("disabled", false).focus().css("background-color","#fff");
//       $("#fecha_tarjeta").attr("disabled",false).css("background-color","#fff");

//       $("#email").attr("disabled", true).css("background-color","teal");
//    });
// });


// Ejemplo #2
$(document).ready(function(){
   $("#visa").click(function(){
      $("#n_tarjeta").css("visibility","visible");
      $("#tarjeta").css("visibility","visible");

      $("#f_tarjeta").css("visibility","visible");
      $("#fecha_tarjeta").css("visibility","visible");

      $("#e_mail").css("visibility","hidden");
      $("#email").css("visibility","hidden");

      $("#tarjeta").focus();
      // se mostraan solo los inputs de visa
   });

   $("#master").click(function(){
      $("#n_tarjeta").css("visibility","visible");
      $("#tarjeta").css("visibility","visible");

      $("#f_tarjeta").css("visibility","visible");
      $("#fecha_tarjeta").css("visibility","visible");

      $("#e_mail").css("visibility","hidden");
      $("#email").css("visibility","hidden");

      $("#fecha_tarjeta").focus();
      // se mostraan solo los inputs de master
   });

   $("#paypal").click(function(){
      $("#n_tarjeta").css("visibility","hidden");
      $("#tarjeta").css("visibility","hidden");

      $("#f_tarjeta").css("visibility","hidden");
      $("#fecha_tarjeta").css("visibility","hidden");

      $("#e_mail").css("visibility","visible");
      $("#email").css("visibility","visible");

      $("#email").focus();
      // se mostraan solo los inputs de email
   });

});
