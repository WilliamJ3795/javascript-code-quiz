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

var questions = [
	{
		question: "What bulit-in method calls a function for each element in the array?",
		q1: "while()",
		q2: "loop()",
		q3: "forEach()",
		q4: "None of the above",
		answer: "forEach()"
	},
