//this variable is for where the user is at 
var position = 0;
//this variable holds how many correct 
var correct = 0;
//these variables hold the div, header, question, user answer, and "a, b, c, d"
var quiz, quizStatus, question, choice, choices, answer1, answer2, answer3, answer4;
// this var is our "array" of questions, with choices and correct answer
var questions = [
    {
        question: "Question 1 will go here!",
        a: "answer1",
        b: "answer2",
        c: "answer3",
        d: "answer4",
        answer: "A"

    },
    {
        question: "Question 2 will go here!",
        a: "answer1",
        b: "answer2",
        c: "answer3",   
        d: "answer4",
        answer: "B"
    },
    {
        question: "question 3 will go here!",
        a: "answer1",
        b: "answer2",
        c: "answer3",
        d: "answer4",
        answer: "C"
    },
    {
        question: "question 4 will go here!",
        a: "answer1",
        b: "answer2",
        c: "answer3",
        d: "answer4",
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
    //this function lets me know position of question user is on
    get("quizStatus").innerHTML = "Question " + (position+1) + " of " + questions.length;
    
    question = questions[position].question;
    answer1 = questions[position].a;
    answer2 = questions[position].b;
    answer3 = questions[position].c;
    answer4 = questions[position].d;

    //this function displays the answer onto the div "quiz"
    quiz.innerHTML = "<h2>"+question+"</h2>"

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

    if(choice == questions[pos].answer){
      correct++;
    }
    pos++;
    //this function brings the function back to the top until the last question is answered.
    renderQuestion();
}
//this function makes the quiz load through an "evenListener"
window.addEventListener("load", renderQuestion);
