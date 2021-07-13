document.querySelector("#startPlay").addEventListener("click", play);

function play() {
    var dicePlayer1 = Math.floor((Math.random() * 6) + 1);
    var dicePlayer2 = Math.floor((Math.random() * 6) + 1);

    var dice1URL = "images/dice" + dicePlayer1 + ".png"
    var dice2URL = "images/dice" + dicePlayer2 + ".png"

    document.querySelector(".img1").setAttribute("src", dice1URL);
    document.querySelector(".img2").setAttribute("src", dice2URL);

    var resultText;
    if (dicePlayer1 > dicePlayer2)
        resultText = "Player 1 Wins!";
    else if (dicePlayer2 > dicePlayer1)
        resultText = "Player 2 Wins!"
    else
        resultText = "It's a draw, play again!";

    document.querySelector(".result").textContent = resultText;
}