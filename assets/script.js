// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//first item event listener
//second event function to hide landing, start timer, unhide 1st div
//pull questions using function to add question text add eventlistener for click
// reuse second fucntion to pull next question
//after questions are over function to hide question div and show results

const myQuestions = [
    {},
    {
      title: "Q1: Commonly used data types DO NOT include:",
      answers: ["strings", "booleans", "alerts", "numbers"],
      correctAnswer: "alerts",
    },
    {
      title:
        "Q2: String values must be enclosed within ____ when being assigned to variables.",
      answers: ["commas", "curly brackets", "quotes", "parenthesis"],
      correctAnswer: "quotes",
    },
    {
      title: "Q3: The first index of an array is ______.",
      answers: ["programmer's choice", "5", "1", "0"],
      correctAnswer: "0",
    },
    {
      title:
        "Q4: Which event occurs when the user clicks once on an HTML element?",
      answers: ["onclick", "onmouseover", "dblclick", "keydown"],
      correctAnswer: "onclick",
    },
    {
      title: "Q5: Which method returns the called string to lowercase",
      answers: ["toLowerCase()", "toLower()", "caseLower()", "none of the above"],
      correctAnswer: "toLowerCase()",
    },
  ];


//declare HTML elements===================================================================================================
var viewHighScoresBtnEl = document.getElementById("viewHighScores")
var returnBtn = document.getElementById("return")
var timer = document.getElementById("timer");
var timeEl = document.getElementById("time");
var intro = document.getElementById("intro");
var questionBox = document.getElementById("questionBox");
var question = document.getElementById("question");
var options = document.getElementById("options");
var answersEl = document.getElementById("answers");
var results = document.getElementById("results");
var finalScore = document.getElementById("finalScore");
var userInitials = document.getElementById("userInitials");
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitIntials");
var scoreBoxEl = document.getElementById("scoreBox");
var userHighScores = document.getElementById("scores");

//variables for questions=================================================================================================
var currentQuestion = 0;
var score = 0;
var questionNumber = 0;
var currentTime = 0;
var highScores = [];

//variables for timer
var qIndex = 0;
var time = myQuestions.length * 15;
var timerId;

//functions for timer start/stop ======================================================================================
function clock() {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
      gameOver();
    }
  }
  
  function startTimer() {
    timerId = setInterval(clock, 1000);
    timeEl.textContent = time;
  }
  
  function stopTimer() {
    clearInterval(timerId);
  }

//functions for hide landing page and display question =============================================================
function startGame() {
    intro.style.display = "none";
    questionBox.style.display = "block";
    question.style.display = "block";
    startTimer();
    getQuestion();
    hide(intro);
    hide(returnBtn);
    show(questionBox);
  }
  

