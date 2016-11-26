// estructura de código para nuestro ejemplo de login con ajax y js
$(document).ready(function() {
    $(document).submit(function() {
        // primera forma
        // var datosForm = { usuario: $("#usuario").val(), contra: $("#contra").val() };
        // segunda forma
        var datosForm = $(this).serialize();
        $.get("login.php", datosForm, procesaDatos);
        return false;
    });

    function procesaDatos(datos) {
        if (datos === "autorizado") {
            $("#contenidos_externos").html("<p>Hola Jorge, Bienvenido</p>");
        } else {
            $("#contenidos_externos").html("<p>Usuario no autorizado</p>");
        }
    }
});

// NOTAS
// la funcion serialize recorre todos los campos del this, que en este ejemplo son los campos de nuestro formulario, esto es de mucha ayuda cuando tenemos mas de dos campos
// para este ejmplo se ha usado una estructura php