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

viewHighscores.addEventListener("click", viewHighscoresPage);

function viewHighscoresPage() {
    instructionPage.classList.add("hidden");
    quizEndPage.classList.add("hidden");
    answerCheck.classList.add("hidden");
    questionContainer.classList.add("hidden");
    viewHighscores.classList.add("hidden");
    timerDiv.classList.add("hidden");

    highscorePage.classList.remove("hidden");

    resetTimer();
    showHighscores();
}

goBackBtn.addEventListener("click", goBack);

function goBack() {
    highscorePage.classList.add("hidden");
    questionContainer.classList.add("hidden");
    quizEndPage.classList.add("hidden");
    instructionPage.classList.remove("hidden");
    timerDiv.classList.remove("hidden");
    viewHighscores.classList.remove("hidden");

    resetTimer();
}

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

    }, 10000);

}

function resetTimer() {
    clearInterval(timerInterval);
    secondsLeft = 60;
    timer.textContent = secondsLeft;
}

function questionLoop() {
    if (currentIndex === questions.length) {
        quizCompleted();
    } else {
        answerCheck.textContent = '';
        currentQ = questions[currentIndex];
        questionEl.textContent = questions[currentIndex].question;
        answerOne.textContent = questions[currentIndex].choices[0];
        answerTwo.textContent = questions[currentIndex].choices[1];
        answerThree.textContent = questions[currentIndex].choices[2];
        answerFour.textContent = questions[currentIndex].choices[3];
    }
    answerCheck.classList.add("hidden");
    answerOne.disabled = false;
    answerTwo.disabled = false;
    answerThree.disabled = false;
    answerFour.disabled = false;
}

answerOne.addEventListener("click", checkAnswer)
answerTwo.addEventListener("click", checkAnswer)
answerThree.addEventListener("click", checkAnswer)
answerFour.addEventListener("click", checkAnswer)

function checkAnswer(e) {
    answerOne.disabled = true;
    answerTwo.disabled = true;
    answerThree.disabled = true;
    answerFour.disabled = true;

    e.stopPropagation();
    console.log(currentIndex);
    answerCheck.classList.remove("hidden");
    if (currentQ.correctAnswer === e.target.innerText) {
        answerCheck.textContent = "Correct!";
        secondsLeft += 5;
        setTimeout(function () {
            currentIndex++;
            questionLoop();
        }, 1000)

    } else {
        answerCheck.textContent = "Wrong!";
        if (secondsLeft > 10) {
            secondsLeft -= 10;
            setTimeout(function () {
                currentIndex++;
                questionLoop();
            }, 1000)
        } else {
            // loseGameDisplay();
            quizCompleted();
        }
    }
}

function quizCompleted() {
    nameInput.value = "";
    answerCheck.classList.add("hidden");
    questionContainer.classList.add('hidden');
    highscorePage.classList.add("hidden");
    quizEndPage.classList.remove('hidden');
    clearInterval(timerInterval);
    endGameScore.textContent = secondsLeft;
    timer.textContent = secondsLeft;

}

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    viewHighscores.classList.add("hidden");
    timerDiv.classList.add("hidden");


    var highscoreArray = JSON.parse(localStorage.getItem("highscoreArray")) || [];
    highscoreArray.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    localStorage.setItem('score', endGameScore.value);

    if (nameInput.value == '') {
        alert("You must enter your name to proceed.");
        return;

    };


    var highscoreObject = {
        name: nameInput.value,
        score: secondsLeft
    };

    highscoreArray.push(highscoreObject);
    localStorage.setItem('highscoreArray', JSON.stringify(highscoreArray))


    console.log(highscoreArray);

    showHighscores();


});

function showHighscores() {
    highscorePage.classList.remove("hidden");
    quizEndPage.classList.add("hidden");

    var highscoreArray = JSON.parse(localStorage.getItem("highscoreArray")) || [];
    nameList.innerHTML = '';
    highscoreArray.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    for (var i = 0; i < highscoreArray.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = highscoreArray[i].name + ' - ' + highscoreArray[i].score;
        nameList.appendChild(listItem);

    }
};

// this function is being called below and will run when the page loads.
function init() {

    // gets stored names from localstorage
    var storedNames = JSON.parse(localStorage.getItem("scoreArrahighy"));

    // if names were retrieved from localstorage, update the names array to it
    if (storedNames !== null) {
        highscoreArray = storedNames;
    }

    clearHighscores.addEventListener("click", function (event) {
        highscoreObject = {};

        window.localStorage.clear();
        showHighscores();
    })
}

init();