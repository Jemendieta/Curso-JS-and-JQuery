// estructura js para nuestros ejemplos de ajax
$(Document).ready(function() {
    $("#noticias a").click(function() {
        var web = $(this).attr("href");
        $("#contenidos_externos").load(web + " #noticia");
        return false;
    });
});
// NOTAS
// en la concatenación de la parte superior es necesario dejar un espacio para que nuestra variable carge lo que le corresponde y no se generen problemas con el selector id