// elements linked by ID //
var startEl = document.querySelector("#startBtn");
var timerEl = document.querySelector('#timer');

var b1El = document.querySelector('#b1');
var b2El = document.querySelector('#b2');
var b3El = document.querySelector('#b3');
var b4El = document.querySelector('#b4');

var questionEl = document.querySelector('#question');

var openingEl = document.querySelector("#opening");
var quizEl = document.querySelector("#quiz");

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
        }, 
        
        1000);
    
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
