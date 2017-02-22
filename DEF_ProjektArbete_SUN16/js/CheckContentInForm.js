
// Validering av form, att något skrivs in i emails input fält.
function validateEmailForBetaSignup() {
    // Skapar en variabel där vi hämtar värdet för Juhas form1 och name email
    var x = document.forms["form1"]["email"].value;
    // basic if-sats för att kolla av om det är tomt, då skickar vi en alert och 
    // låter användaren inte kunna göra annat än att skriva in email för att skicka.
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
}