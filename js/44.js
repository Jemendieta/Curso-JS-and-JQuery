// estructura js para nuestro ejemplo de formularios
// ejemplo1: comprobar datos
// $(document).ready(function(e){
//    // $("#comprobar").click(comprobar_datos);
// });

// function comprobar_datos(){
//    // $(":text").each(function(){
//       // alert($(this).val());//con esto accedemos al valor de los elementos de tipo text de nuestro formulario
//       if ($("#masculino").prop("checked")) {
//          alert("Eres hombre");

//       }else{
//          alert("Eres mujer");
//       }
//    // });
// }

// si queremos comprobar que los datos son capturados solo debemos cambiar el id del objeto jquery en el if.
// para este ejemplo usamos prop en lugar de attr debido a que la segunda muestra por defecto valores undefined

// ejemplo2:::envío de datos
$(document).ready(function() {

    $("#form_datos").submit(function() {
        if ($("#nombre").val() === "") {
            alert("por favor ingresa un nombre");
            $("#nombre").focus();
            return false;
        }
    });

    // la siguiente estructura de código nos permite validar el campo edad
    $("#uedad").blur(function() {
        var edad_usuario = $(this).val();
        if (isNaN(edad_usuario)) {
            alert("porfavir ingrese un valor numérico en campo edad");
            $(this).focus();
            $(this).val("");
        }
    });

    // en la siguiente estructura nos ocuparemos de los elementos de tipo radio
    // $(":radio").click(function() {
    //     alert($(this).val());
    // });
    
    // la siguientes estructura funciona para capturar los elementos tipo check
    var miArray = new Array();
    var i=0;

    $(":checkbox").click(function() {
      miArray[i]=$(this).val();
      // alert("posición " + i + " " + miArray[i]);
      $("#las_aficiones").append(miArray[i]).append("<br>");
      i++;
    });

    // ahora capturamos los datos de nuestro select con la funcion change
    $("#pais").change(function(){
        alert("El País seleccionado es " + $(this).val());
    });

});





// indicando return como false, lograremos decirle al navegador que si el campo indicado(nombre) esta vació la información no se envíe
// la funcióm append() permite agregar elementos a un conenedor

