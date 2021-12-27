//Tooltip bs//

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(document).ready(function () {

//METODO TOGGLE//
    //torres-del-paine//
    $(".torres-del-paine").on("click", function () {
        $(".card-text1").toggle();
    });

    //los-flamencos//
    $(".los-flamencos").on("click", function () {
        $(".card-text2").toggle();
    });

    //desierto//
    $(".laguna").on("click", function () {
        $(".card-text3").toggle();
    });

    //bosque//
    $(".bosque").on("click", function () {
        $(".card-text4").toggle();
    });

    });
    

  