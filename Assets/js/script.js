var instructionPage = document.getElementById("section-1");
var timer = document.querySelector(".timer-count");
var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("section-2");
var questionEl = document.getElementById("question");
var nameInput = document.getElementById("initials");
var timerDiv = document.getElementById("timer-div");
var nameList = document.getElementById("nameList");

var answerOne = document.getElementById("btn-1");
var answerTwo = document.getElementById("btn-2");
var answerThree = document.getElementById("btn-3");
var answerFour = document.getElementById("btn-4");

var answerCheck = document.getElementById("correct-wrong");

var quizEndPage = document.getElementById("section-3");
var submitBtn = document.getElementById("submitBtn");
var endGameScore = document.getElementById("score");
var highscorePage = document.getElementById("section-4");
var viewHighscores = document.getElementById("viewHighscores");

var goBackBtn = document.getElementById("goBack");
var clearHighscores = document.getElementById("clear");

var currentQ = '';
var currentIndex = 0;

var questions = [
    {
        question: 'In JavaScript, what is a block of statement?',
        choices: ['a. Conditional block', 'b. block that combines a number of statements into a single compound statement', 'c. both conditional block and a single statement', 'd. block that contains a single statement'],
        correctAnswer: 'b. block that combines a number of statements into a single compound statement'
    },
    {
        question: 'When interpreter encounters an empty statements, what it will do:',
        choices: ['a. Shows a warning', 'b. Prompts to complete the statement', 'c. Throws an error', 'd. Ignores the statements'],
        correctAnswer: 'd. Ignores the statements'
    },
    {
        question: 'The "function" and " var" are known as:',
        choices: ['a. Keywords', 'b. Data types', 'c. Declaration statements', 'd. Prototypes'],
        correctAnswer: 'c. Declaration statements'
    },
    {
        question: 'Which of the following variables takes precedence over the others if the names are the same?',
        choices: ['a. Global variable', 'b. The local element', 'c. The two of the above', 'd. None of the above'],
        correctAnswer: 'b. The local element'
    },
    {
        question: 'In the JavaScript, which one of the following is not considered as an error:',
        choices: ['a. Syntax error', 'b. Missing of semicolons', 'c. Division by zero', 'd. Missing of Bracket'],
        correctAnswer: 'c. Division by zero'
    },
];


startButton.addEventListener("click", startQuiz);

function startQuiz() {
    instructionPage.classList.add("hidden");
    quizEndPage.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    currentIndex = 0;
    startTimer();
    questionLoop();
}

var secondsLeft = 60;
var timerInterval = 0;

function startTimer() {
    secondsLeft = 60;
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            endGameScore.textContent = secondsLeft;
            // question page hides, score screen appears
            quizCompleted();
        } 

    }, 1000);

}

function resetTimer() {
    clearInterval(timerInterval);
    secondsLeft = 60;
    timer.textContent = secondsLeft;
}
