// estructura de código js para nyuestro ejemplo de formularios parte 3 validación
$(document).ready(function() {
    $("#form_datos").validate({
        rules: {
            nombre: "required",
            f_nacimiento: {
                required: true,
                date: true,
            },
            mail: {
                required: true,
                email: true,
            },
            edad: {
                required: true,
                number: true,
                range: [1, 105]
            },
            p_web: {
                required: true,
                url: true,
            }
        },
        messages: {
            nombre: "Ingrese un Nombre",
            f_nacimiento: "ingrese una fecha válida",
            mail: "ingrese un mail válido",
            edad: {
                required: "ingrese su edad",
                number: "La edad debe ser numérica",
                range: "Entre 1 y 105"
            },
            p_web: "ingrese un sitio web válido",
            // mail:{
            //    required:"Ingresa un mail válido",
            //    mail:"",
            // }
        }
    });
});