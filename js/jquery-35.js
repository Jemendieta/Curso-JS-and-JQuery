// trabajando con efectos y animaciones
$(document).ready(function(){
// primera forma
   $("#abierto").click(function(){
      $("#login form").toggle(300);
      $(this).toggleClass("cerrado");
   });
// segunda forma(toggle no funciona en versiones actuales de jquery)
   // $("#abierto").toggle(
   //    function(){
   //       $("#login form").slideDown(300);
   //       $(this).addClass("cerrado");
   //    },
   //    function(){
   //       $("#login form").fadeOut(600);
   //       $(this).removeClass("cerrado");
   //    }
   // );   
   
});