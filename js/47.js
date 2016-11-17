// estructura de código js para nuestro ejeplo de validación de formularios

$(document).ready(function() {
    $("#form_registro").validate({
        rules: {
            nombre: "required",
            e_mail: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                rangelenght: [8, 17],
            },
            confirma: {
                required: true,
                equalTo: "#password",
            },

        }, //end rules

        messages: {
            nombre: "Ingrese Nombre",
            e_mail: {
                required: "ingresa un email",
                email: "el formato es erroneo",

            },
            password: {
                required: "ingresa contraseña",
                rangelenght: "entre 8 y 17 caracteres",
            },
            confirma: {
                required: "repita su contraseña",
                equalTo: "no coinciden los campos",
            }
        }, //end messages

        // para que las siguientes lineas funciones se debe crear las rules & messages para radio y checkbox
        // errorPlacement: function(error, elemen) {
        //     if (element.is(":radio") || element.is(":checkbox")) {
        //         error.appendTo(elemen.parent());
        //     } else {
        //         error.insertAfter(elemen);
        //     }
        // }
    });

});