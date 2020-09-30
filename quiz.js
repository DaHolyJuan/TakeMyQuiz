// @ts-check
//this variable is for where the user is at 
var position = 0;
//this variable holds how many correct 
var correct = 0;
//these variables hold the div, header, question, user answer, and "a, b, c, d"
var quiz, quizStatus, question, choice, choices, answer1, answer2, answer3, answer4;
// this var is our "array" of questions, with choices and correct answer
var timer = document.getElementById("timer");
var counter = 60;
var interval = setInterval(function() {
    counter --;
    if (counter <= 0) {
        clearInterval(interval);
        $('#timer').html("<h3>Count down complete</h3>");  
        return;
    } else {
        $('#timer').text(counter);
        console.log("Timer --> " + counter);
    }
}, 1000);
var questions = [
    {
        question: "What does html stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Makeup Language",
        c: "Hypertext Markup Love",
        d: "Help the Man Louis!",
        answer: "A"

    },
    {
        question: "What is a good source for answers you dont know?",
        a: "Outside",
        b: "Google",
        c: "Sleep",   
        d: "Going to grab a burger at your local diner",
        answer: "B"
    },
    {
        question: "What does css stand for?",
        a: "Cascading Silence Sheets",
        b: "Cascading Script Sheeets",
        c: "Cascading Style Sheets",
        d: "Cold Sauce Singing",
        answer: "C"
    },
    {
        question: "What is the purpose of javaScript",
        a: "A way to refrence images on the internet in your html",
        b: "A programming language used to create different styles to your html",
        c: "A cup of coffee that writes your papers",
        d: "A programming language used to create dynamic and interactive elements to the user",
        answer: "D"
    }
];

function get(x) {
    return document.getElementById(x);
}


function renderQuestion() {
    quiz = get("quiz");
    if (position >= questions.length) {
        quiz.innerHTML = "<h2>You got " + correct + " of " + questions.length +" questions correct!</h2>";
        get("quizStatus").innerHTML = "Quiz Finished! You did it!"
        position = 0;
        correct = 0;
        return false;
    }
    //this function lets me know number question user is on
    get("quizStatus").innerHTML = "Question " + (position+1) + " of " + questions.length;
    
    question = questions[position].question;
    answer1 = questions[position].a;
    answer2 = questions[position].b;
    answer3 = questions[position].c;
    answer4 = questions[position].d;

    //this function displays the answers user can choose onto the div "quiz"
    quiz.innerHTML = "<h1>"+question+"</h1S>"

    quiz.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+ answer1 +"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+ answer2 +"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+ answer3 +"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+ answer4 +"</label><br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }

    if(choice == questions[position].answer){
      correct++;
    }
    position++;
    //this function brings the function back to the top until the last question is answered.
    renderQuestion();
}
//this function makes the quiz load through an "evenListener"
window.addEventListener("load", renderQuestion);
//so when the "window" loads, it does function(renderQuestion) which displays it on screen
