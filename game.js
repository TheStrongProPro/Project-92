var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;
var question_turn = "player1";
var answer_turn = "player2";
var answer = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question-turn").innerHTML =
    "Question Turn - " + player1_name;
document.getElementById("answer-turn").innerHTML =
    "Answer Turn - " + player2_name;

function send() {
    number_1 = document.getElementById("1").value;
    number_2 = document.getElementById("2").value;
    final = number_1 + " X " + number_2;
    answer = Number.parseInt(number_1) * Number.parseInt(number_2);
    question_word = "<h4 id='word_display'>Q. " + final + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button =
        "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question-turn").innerHTML =
            "Question Turn - " + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("question-turn").innerHTML =
            "Question Turn - " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("answer-turn").innerHTML =
            "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("answer-turn").innerHTML =
            "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
