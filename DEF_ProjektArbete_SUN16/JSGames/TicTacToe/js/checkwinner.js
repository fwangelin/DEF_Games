var won = false;

function checkWinner(clickedButton) {

    var btn1 = document.getElementById("btn1").value;						//Lägger till varje knapp i en egen variabel.
    var btn2 = document.getElementById("btn2").value;
    var btn3 = document.getElementById("btn3").value;

    var btn4 = document.getElementById("btn4").value;
    var btn5 = document.getElementById("btn5").value;
    var btn6 = document.getElementById("btn6").value;

    var btn7 = document.getElementById("btn7").value;
    var btn8 = document.getElementById("btn8").value;
    var btn9 = document.getElementById("btn9").value;

         if (btn1 == "X" && btn2 == "X" && btn3 == "X") { winnerMessage("X"); }			//Kollar ifall ex knapp 1-3 har samma värde tex (X)
    else if (btn4 == "X" && btn5 == "X" && btn6 == "X") { winnerMessage("X"); }			//I sånt fall anropas winnerMessage som visar en vinnar ruta.
    else if (btn7 == "X" && btn8 == "X" && btn9 == "X") { winnerMessage("X"); }

    else if (btn1 == "X" && btn4 == "X" && btn7 == "X") { winnerMessage("X"); }
    else if (btn2 == "X" && btn5 == "X" && btn8 == "X") { winnerMessage("X"); }
    else if (btn3 == "X" && btn6 == "X" && btn9 == "X") { winnerMessage("X"); }

    else if (btn1 == "X" && btn5 == "X" && btn9 == "X") { winnerMessage("X"); }
    else if (btn3 == "X" && btn5 == "X" && btn7 == "X") { winnerMessage("X"); }


    else if (btn1 == "O" && btn4 == "O" && btn7 == "O") { winnerMessage("O"); }
    else if (btn2 == "O" && btn5 == "O" && btn8 == "O") { winnerMessage("O"); }
    else if (btn3 == "O" && btn6 == "O" && btn9 == "O") { winnerMessage("O"); }


    else if (btn1 == "O" && btn2 == "O" && btn3 == "O") { winnerMessage("O"); }
    else if (btn4 == "O" && btn5 == "O" && btn6 == "O") { winnerMessage("O"); }
    else if (btn7 == "O" && btn8 == "O" && btn9 == "O") { winnerMessage("O"); }

    else if (btn1 == "O" && btn5 == "O" && btn9 == "O") { winnerMessage("O"); }
    else if (btn3 == "O" && btn5 == "O" && btn7 == "O") { winnerMessage("O"); }

}

function winnerMessage(winner) {
    alert(winner + " vann");
    won = true;
    location.reload();
}