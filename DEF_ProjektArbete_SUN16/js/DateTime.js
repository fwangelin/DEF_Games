function updateTime() {
    // deklarerar variabler för klocka
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    // Deklarerar variabler för datum
    var date = currentTime.getDate()
    var year = currentTime.getFullYear()

    // skapa en array för månader, då vanlig "utskrift" blir 0 för januari osv...
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
         "November",
         "December"];
    // spara ner arrayen i en variable
    var month = months[currentTime.getMonth()]

    // skapa array för dagar i veckan, normal "utskrift" blir 0 för söndag osv...
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"];
    // spara ner arrayen i en variable
    var day = days[currentTime.getDay()]

    // if satser för att lägga till 0 om klockan är mindre än 10 (tim, min, sek)
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    // skapa variable för hur utskrift av klocka och datum ser ut.
    var displayDateTime =
      day + " " + date + " / " + month + " / " + year +" "+ hours + ":" + minutes + ":" + seconds + " ";

    // lägger till AM eller PM beroende på vilken tid på dygnet
    if (hours > 11) {
        displayDateTime += "PM";
    } else {
        displayDateTime += "AM";
    }
    document.getElementById('clock').innerHTML = displayDateTime;
}
// ser till att uppdatera klockan varje sekund
setInterval(updateTime, 1000);



//    document.getElementById('todaysDate').innerHTML = todaysDate;
// }

    
    // Här sätter vi tiden vi vill räkna ner till 
    var countDownDate = new Date("Sep 12, 2018 17:00:00").getTime();

    // Uppdatera tiden varje sekund
    var x = setInterval(function () {
        
        // Hämtar tiden just nu
        var now = new Date().getTime();

        // hittar distansen från vad klockan är nu till tiden vi satt som vi vill räkna ner till
        var distance = countDownDate - now;

        // Använder math.floor för att få ut dagar, timmar, minuter och sekunder
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // lägger if-satser för att lägga till 0 före sekunder och minuter om de är mindre än 10
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // Visar upp tiden i html med taggen: id="countDownClock"
        document.getElementById("countDownClock").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // När tiden vi räknat ner till är slut så skriver vi ut att Betan finns
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countDownClock").innerHTML = "BETA IS LIVE";
        }
    }, 1000);
