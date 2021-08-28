var timerElement = document.querySelector(".timer-count")
var startPage = document.querySelector("#section-1");
var questionPage = document.querySelector("#section-2");
var finishedPage = document.querySelector("#section-3");

var startButton = document.querySelector("#start-btn");
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


startButton.addEventListener("click", startQuiz);




