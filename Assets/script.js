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

//Intial global variables //
var score;
var secondsLeft = 60;
var questionIndex = 0;
var timeInt;

//Start the timer//
function startTimer() {

    console.log("line 23 ~ startTimer", startTimer)
    timeInt = setInterval (
        function() {
            secondsLeft --;
            // grabbing the element in the DOM and using JQuery to access the global var//
            timerEl.textContent = `Timer: ${secondsLeft}`; 
            if (secondsLeft === 0) {
                score = 0;
                clearInterval(timeInt);
                timerEl.textContent = " ";
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
		answer: "forEach()",
	},
    {
        question: "Which of the following function of String object returns the calling string value converted to lower case?",
        q1: "toLocaleLowerCase()",
        q2: "toLowerCase()",
        q3: "toString()",
        q4: "substring()",
        answer: "toLowerCase()",
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        q1: 'alert("Hello World");',
        q2: 'msgBox("Hello World");',
        q3: 'alertBox("Hello World");',
        q4: 'msg("Hello World");',
        answer: 'alert("Hello World");',
    },
    {
        question: 'How to append a value to an array of Java Script?',
        q1: 'arr[arr.length-1] = value',
        q2: 'arr[arr.length+1] = new Arrays()',
        q3: 'arr[arr.length] = value',
        q4: 'arr[arr.length*1] = value',
        answer: 'arr[arr.length] = value',
    },
    {
        question: 'Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?',
        q1: 'concat()',
        q2: 'pop()',
        q3: 'push()',
        q4: 'some()',
        answer: 'concat()',
    },
];

//Start quiz
startEl.addEventListener("click", startQuiz);
// activates timer and loads questions upon button click
function startQuiz() { 
    score = 0;
    startTimer();
    openingEl.setAttribute("style", "display: none");
    quizEl.setAttribute("style", "display: block");
    loadQuestions();
};

//load questions based on index
function loadQuestions() {
    questionEl.textContent = questions[questionIndex].question;
    b1El.textContent = `${questions[questionIndex].q1}`;
    b2El.textContent = `${questions[questionIndex].q2}`;
    b3El.textContent = `${questions[questionIndex].q3}`;
    b4El.textContent = `${questions[questionIndex].q4}`;

};

