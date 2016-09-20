// clase 38 del curso de js y jquery
$(document).ready(function() {
    $("#titulo").hide();
    $("#foto img").width(60).height(40).click(function() {
        $(this).animate({
            marginLeft: "150px",
            width: "300px",
            height: "200px",
        }, 1500, function() {
            $("#titulo").fadeIn(1000).delay(1000).fadeOut(1000);
        }).delay(3000); //termina función animate
        $(this).animate({
            marginLeft: "0px",
            width: "60px",
            height: "40px",
        }, 1500);
    }); //termina función click
}); //termina función ready