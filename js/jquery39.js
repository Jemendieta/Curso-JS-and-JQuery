// estrutura js para nuestro ejemplo de peloader y rollover
$(Document).ready(function() {
    var foto_nueva = new Image(); //variable de tipo imagen
    foto_nueva.src = "img/other/1.jpg";
    $(foto).hover(function() {
            $(this).attr("src", foto_nueva.src);
        },
        function() {
            $(this).attr("src", "img/imgopa/1.jpg");
        });
});