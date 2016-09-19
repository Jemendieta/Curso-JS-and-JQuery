// clase jqueryde la función animate
$(document).ready(function(){
// ejemplo nro uno
   // $("#imagen").click(function(){
   //    $(this).animate({
   //       marginLeft:"+=1000px"
   //    }, 1500
   //    );
   // });
// ejemplo nro dos
   $("img").mouseover(function(){
      $(this).animate({
            opacity:1
         }, 250
      );
   });
   $("img").mouseout(function(){
      $(this).animate({
            opacity:0.5
         }, 250
      );
   });
});