// elements linked by ID //
var startButton = document.querySelector("#startBtn");
var timer = document.querySelector('#timer');

var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');
var b3 = document.querySelector('#b3');
var b4 = document.querySelector('#b4');

var question = document.querySelector('#question');

var opening = document.querySelector("#opening");
var quiz = document.querySelector("#quiz");
//Initial variables

var score;
var secondsLeft = 60;
var questionIndex = 0;
var timeInt;

//Start the timer
function startTimer() {
    timeInt = setInterval (
        function() {
            secondsLeft --;
            timer.textContent = `Timer: ${secondsLeft}`;
            if (secondsLeft === 0) {
                score = 0;
                clearInterval(timeInt);
                timer.textContent = " ";
                alert ("Time's Up!");
                score = 0;
                highScore();

            }
        }, 1000);
    
};

var questions = [
	{
		question: "What bulit-in method calls a function for each element in the array?",
		q1: "while()",
		q2: "loop()",
		q3: "forEach()",
		q4: "None of the above",
		answer: "forEach()"
	},
    {
        question: "Which of the following function of String object returns the calling string value converted to lower case?",
        q1: "toLocaleLowerCase()",
        q2: "toLowerCase()",
        q3: "toString()",
        q4: "substring()",
        answer: "toLowerCase()",
    }];

    //Start the game 
startButton.addEventListener("click", startQuiz);
function startQuiz() {
	score = 0;
	startTimer();
	opening.setAttribute("style", "display: none");
	quiz.setAttribute("style", "display: block");
	loadQuestions();
};

