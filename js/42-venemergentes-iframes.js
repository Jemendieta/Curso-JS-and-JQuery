// estructura de código para nuestra clase de ventanas emergentes e iframes
$(document).ready(function(e) {
    $("#miformulario").hide();
    $("#mivinculo").click(function(e) {
        $("#miformulario").fadeIn(1500);
        //una forma de lograr el efecto es usando   
        //   e.preventDefault();
        // la otra forma es usando
        return false;
    });
    
});