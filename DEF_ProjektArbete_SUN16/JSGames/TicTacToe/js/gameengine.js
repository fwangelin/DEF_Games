var playerturn = "X";
var count = 0;

function button_click(clickedButton) {
    
    var clickedButton = document.getElementById("btn" + clickedButton);		//Lägger till knappen som tryckts i en variabel.
    clickedButton.setAttribute('disabled', true);				//Gör knappen disabled, så att det inte går att trycka på den
    clickedButton.value = playerturn;						//Ändrar knappens Text till playern som är aktuell (ex X)
    checkPlayerTurn();								//Anropar metoden checkPlayerTurn för att byta till Player2 (ex O)
    checkWinner(clickedButton);							//Anropar metoden checkWinner för att kolla om någon har vunnit
    checkRound();								//Kollar vilken runda som körts. Ifall rundan är 9 så visas en Lika ruta
}

function checkPlayerTurn() {
    if (playerturn == "X") {
        playerturn = "O";
    }
    else if (playerturn == "O")
        playerturn = "X";
}

function checkRound() {
    count++;
    if (count == 9 && won==false) {
        alert("Lika");
        location.reload();
    }
}