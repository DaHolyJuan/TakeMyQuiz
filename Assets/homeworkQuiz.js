var timeEl = document.querySelector(".timer");
var time = 60;
var mainEl = document.querySelector(".main");
var contentEl = document.querySelector(".content");
var startButtonEl = document.querySelector(".start");
var verifyEl = document.querySelector(".verify");
var quizIndex = 0;
var quiz = [
    {
        question : "What color is the sky?",
        answers : ["blue", "green", "yellow", "orange"],
        correct : "blue"
    }, 
    {
        question : "what color is the water?"
        answers : ["orange", "red", "green", "blue"],
        correct: "blue"
    },
    {
        question : "what color is the sun?"
        answers : ["black", "blue", "green", "yellow"]
        correct : "yellow"
    },
    {
        queston : "what color is the grass?"
        answers : ["red", "green", "yellow", "blue"]
        correct : "green"
    },
];

function counter() {
    var intervalId = setInterval(function (){
        time--;
        timeEl.textContent = "Time " + time;
        if (time === 0 || quizIndex >= 4) {
            timeEl.textContent = "Score: " + time;
            tallyScore();
            prompt("Congradulations, Please enter your Name!")
        }
    })
}



startButtonEl.addEventListener("click", function() {
    startButtonEl.style.display= "none";
    console.log(startButtonEl);
)} 