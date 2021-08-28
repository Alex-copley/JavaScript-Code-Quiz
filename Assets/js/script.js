var timerElement = document.querySelector(".timer-count")
var startPage = document.querySelector("#section-1");
var questionPage = document.querySelector("#section-2");
var finishedPage = document.querySelector("#section-3");

var startButton = document.querySelector("#start-btn");
var currentIndex = 0;
var timerCount = 60;



function startQuiz() {
    timerCount = 60;

    startPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
    

    startTimer();
};

function startTimer() {
    //sets timer 
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount === 0) {
            clearInterval(timer);
            //add function to call the highscore input!!
        }
    }, 1000);
};

function questionsLoop() {
    
}

//array for different questions
var questions = [
    {
        question: 'Inside which HTML element do we put the Javascript?',
        answers: [
            { text: '<js>', correct: false },
            { text: '<a>', correct: false },
            { text: '<link>', correct: false },
            { text: '<script>', correct: true }
        ]
    },

    {
        question: 'How do you call a function named helloKitty?',
        answers: [
            { text: 'function helloKitty() =', correct: false },
            { text: 'helloKitty()', correct: true },
            { text: 'call.helloKitty()', correct: false },
            { text: 'helloKitty.functionCall', correct: false }
        ]
    },

    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answers: [
            { text: 'if (i > 5)', correct: false },
            { text: 'if i >= 5', correct: false },
            { text: 'if (i!=5)', correct: true },
            { text: 'if i < 6', correct: false }
        ]
    },

    {
        question: 'What will the following code return: Boolean(10>9)?',
        answers: [
            { text: 'true', correct: true },
            { text: '1', correct: false },
            { text: 'false', correct: false },
            { text: 'undefined', correct: false }
        ]
    },

    {
        question: 'What is an array?',
        answers: [
            { text: 'Another word for a declared variable.', correct: false },
            { text: 'A variable with a high-level, list-like object(s)', correct: true },
            { text: 'A variable that will never change.', correct: false },
            { text: 'The sea creature that killed Steve Irwin.', correct: false }
        ]
    },
]

//call function for start button
startButton.addEventListener("click", startQuiz);




