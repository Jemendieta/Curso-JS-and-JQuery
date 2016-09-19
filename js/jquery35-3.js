// parte tres de la clase de efectos y animaciones con jquery
$(document).ready(function() {
// modo uno con toggle(obsoleto)
   // $("#boton").toggle(function(){
   //    $("#menu").animate(
   //    {
   //       left:"0px"
   //    });
   // }, function(){
   //    $("#menu").animate({
   //       left:"-210px"
   //    });
   // });
// modo dos
   var con_menu=false;
   $("#boton").click(function(){
      if (con_menu===false) {
         $("#menu").animate({left:"0px"},{duration:500});
         con_menu=true;
      }else{
         $("#menu").animate({left:"-210px"},{duration:500});
         con_menu=false;
      }
   });
});