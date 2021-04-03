// Selecting all the elements by ID. 

const startbuttonEl = document.getElementById("startbutton");
const questionSectionEl = document.getElementById("questionSection");
const questionEl = document.getElementById("question");
const introSectionEl = document.getElementById("introSection");
const finalSectionEl = document.getElementById("finalSection");
const nameEl = document.getElementById("name");
const submitEl = document.getElementById("submit-score");


const choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");


// Event listener to start the quiz 

startbuttonEl.addEventListener("click", startQuiz);
submitEl.addEventListener("click", scorelist);

// Creating question array

let questions = [
  {
    question: "What is the initial value of a variable?",
    choiceA: "undefined",
    choiceB: "1",
    choiceC: "0", 
    choiceD: "null",
    correct: "A" 
},


  {
    question: "What does the pop() method do?",
    choiceA:  "Removes the last element of an array.",
    choiceB:  "Removes the first element of an array, and returns that element.",
    choiceC:  "Removes the last element of an array, and returns that element.",
    choiceD:  "Removes the last element of an array.",
    correct: "C"

  },

  {
    question: "What removes the 1st element of an array?",
    choiceA:  "pop() method",
    choiceB:  "bind() method",
    choiceC:  "apply() method",
    choiceD:  "shift() method",
    correct: "D"
    
  },
  
  { // I was having trouble with getting the timer to stop at the right time, this last element is a shitty workaround. 
    question: "You've finished the quiz!",
    choiceA:  "Click anywhere to be taken to the highscore page!",
    choiceB:  "I'm sure you did great!",
    choiceC:  "After all...",
    choiceD:  "It's not a very difficult quiz &#128512;",
    correct: ""
    
  } 
];



// Creating variables

const lastQuestion = questions.length -1;
let currentQuestion = 0; 
var score = "0";


// TImer 

function timer() {
  var time = "100";
  const timerInterval = setInterval(function(){
    time--; 
    timerEl.innerHTML = "<p>"+ time + "<p>";
 
   if(!(currentQuestion < lastQuestion)){
     clearInterval(timerInterval);
     
   }
 
 
  }, 1000);
  }
 




function makeQuestion () {
  let q = questions[currentQuestion];

  question.innerHTML = "<p>"+ q.question +"</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}


// Function to check answer

function checkAnswer(answer) {
  if(answer == questions[currentQuestion].correct){ 
    score++;
    scoreEl.innerHTML = "<p>"+ score + "<p>";

  }
  else{
    // wrong(); See note on function below.
  }

  if(currentQuestion < lastQuestion){
    currentQuestion++;
    makeQuestion();
    }
  else{
    finalSectionEl.style.display = "block";
    questionSectionEl.style.display = "none";

}
  }

  function wrong() { //I'm doing something wrong but I've given up
    var time = time - 5; 
    timerEl.innerHTML = "<p>"+ time + "<p>";
  }





//Function used in event listener; hides intro section (incl. start button) & shows question section.

function startQuiz() {
  introSectionEl.style.display = "none";
  questionSectionEl.style.display = "block";
  makeQuestion();
  timer();

}


function scorelist() { //Very shitty scorelist.
  document.getElementById("list").innerHTML = document.getElementById("name").value + ": " + score
}













