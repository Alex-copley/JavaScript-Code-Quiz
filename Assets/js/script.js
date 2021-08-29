var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".btn"));
var scoreText = document.querySelector("#score");
var startBtn = document.querySelector('#start-btn');
var startPage = document.querySelector("#section-1");
var questionPage = document.querySelector("#section-2");
var finishedPage = document.querySelector("#section-3");
var correct = document.querySelector('#correct');
var wrong = document.querySelector('#wrong');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: 'What is 2+2',
        choice1: '2',
        choice2: '4',
        choice3: '8',
        choice4: '10',
        answer: 2,
    },
    {
        question: 'What is 2+4',
        choice1: '2',
        choice2: '4',
        choice3: '8',
        choice4: '10',
        answer: 2,
    },
    {
        question: 'What is 2+6',
        choice1: '2',
        choice2: '4',
        choice3: '8',
        choice4: '10',
        answer: 2,
    },
    {
        question: 'What is 2+8',
        choice1: '2',
        choice2: '4',
        choice3: '8',
        choice4: '10',
        answer: 2,
    },
    {
        question: 'What is 2+10',
        choice1: '10',
        choice2: '4',
        choice3: '8',
        choice4: '12',
        answer: 2,
    },
]

const SCORE_POINTS = 11;
const MAX_QUESTIONS = 5;

function startQuiz() {
    // timerCount = 60;

    startPage.classList.add('hidden');
    questionPage.classList.remove('hidden');

    // startTimer();
};

startGame = function() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion()
}

getNewQuestion = function() {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
    }

    questionCounter++;
    
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);
    
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        
        acceptingAnswers = falce;
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'wrong'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 5000)
    })
})

startBtn.addEventListener('click', startQuiz);