
// hämtar hela dokumentet och väntar på att den är klar med ready
jQuery(document).ready(function ($) {
    // hämtar id flip och on "click" så kör den signuppanel med en slide toggle.
    $("#flip").on('click', function () {
        $("#signupPanel").slideToggle("slow");
    });
});         