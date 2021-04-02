// Selecting all the elements by ID. 

const startbuttonEl = document.getElementById("startbutton");
const questionSectionEl = document.getElementById("questionSection");
const questionEl = document.getElementById("question");
const introSectionEl = document.getElementById("introSection");
const finalSectionEl = document.getElementById("finalSection");
const nameEl = document.getElementById("name");
const submitEl = document.getElementById("submit-score");
const highscoreSectionEl = document.getElementById("highscoreSection");

const choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");


// Event listener to start the quiz 

startbuttonEl.addEventListener("click", startQuiz);

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
    
  }  
];



// Creating variables

const lastQuestion = questions.length -1;
let currentQuestion = 0; 
var score = "0";






function makeQuestion () {
  let q = questions[currentQuestion];

  question.innerHTML = "<p>"+ q.question +"</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}


// Function to check answer...to be written

function checkAnswer(answer) {
  if(answer == questions[currentQuestion].correct){ 
    console.log("GOOD JOB");
    score++;
    scoreEl.innerHTML = "<p>"+ score + "<p>";

  }
  else{console.log("YOU'RE DUMB");}

  if(currentQuestion < lastQuestion){
    currentQuestion++;
    makeQuestion();
    }
  else{
    finalSectionEl.style.display = "block";
    questionSectionEl.style.display = "none";

}
  

}



//Function used in event listener; hides intro section (incl. start button) & shows question section.

function startQuiz() {
  introSectionEl.style.display = "none";
  questionSectionEl.style.display = "block";
  console.log("Is this working");
  makeQuestion();

}




