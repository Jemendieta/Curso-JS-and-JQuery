// estructura para nuestro segundo ejemplo de peloader y rollover

$(document).ready(function() {
    var foto_hover = ["img/other/1.jpg", "img/other/2.jpg",
        "img/other/3.jpg",
        "img/other/4.jpg"
    ];   
    var imagenes = [];
   
    for (var i = 0; i < foto_hover.length; i++) {
        imagenes[i] = new Image();
        imagenes[i].src = foto_hover[i];
    }

    $("img").each(function() {
        $(this).hover(cambiar, restaurar);
    });

    function cambiar(e) {
        //   alert("Has entrado...!");
        if (e.target == img1) {
            $("#img1").attr("src", imagenes[0].src);
        } else if (e.target == img2) {
            $("#img2").attr("src", imagenes[1].src);
        } else if (e.target == img3) {
            $("#img3").attr("src", imagenes[2].src);
        } else if (e.target == img4) {
            $("#img4").attr("src", imagenes[3].src);
        }
    }

    function restaurar(e) {
        //   alert("Has salido...!");
        if (e.target == img1) {
            $("#img1").attr("src", "img/imgopa/1.jpg");
        } else if (e.target == img2) {
            $("#img2").attr("src", "img/imgopa/2.jpg");
        } else if (e.target == img3) {
            $("#img3").attr("src", "img/imgopa/3.jpg");
        } else if (e.target == img4) {
            $("#img4").attr("src", "img/imgopa/4.jpg");
        }
    }
});