var one = "";
var two = "";
function login() {
    one = document.getElementById("1").value;
    two = document.getElementById("2").value;
    localStorage.setItem("player1_name", one);
    localStorage.setItem("player2_name", two);
    window.location = "game.html";
}
