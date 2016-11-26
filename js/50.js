// estructura de código para nuestro ejemplo de objetos json clase 53
$(document).ready(function() {
    $("#login").submit(function() {




        var datosForm = $(this).serialize();
        $.getJSON("js/login2.php", datosForm, procesaDatos);
        return false;
    });

    function procesaDatos(devuelve_datos) {
        $("#contenidos_externos").html("<p>La edad es: " + devuelve_datos.Edad + "</p>");
    }
});