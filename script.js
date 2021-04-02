// Selecting all the elements by ID. 

const startbuttonEl = document.getElementById("startbutton");
const questionSectionEl = document.getElementById("questionSection");
const questionEl = document.getElementById("question");
const introSectionEl = document.getElementById("introSection");
const finalSectionEl = document.getElementById("finalSection");
const nameEl = document.getElementById("name");
const submitEl = document.getElementById("submit-score");
const highscoreSectionEl = document.getElementById("highscoreSection");

const choiceEl = document.getElementById("choice");
const choiceAEl = document.getElementById("A");
const choiceBEl = document.getElementById("B");
const choiceCEl = document.getElementById("C");
const choiceDEl = document.getElementById("D");


// Event listener to start the quiz 

startbuttonEl.addEventListener("click", startQuiz);

//Function used in event listener; hides intro section (incl. start button) & shows question section.

function startQuiz() {
  introSectionEl.style.display = "none";
  questionSectionEl.style.display = "block";
  console.log("Is this working");

}

// Function to check answer...to be written

function checkAnswer() {}


















































var questions = [
      {
        question: "What is the initial value of a variable?",
        answer: "undefined",
        choiceA: "undefined",
        choiceB: "1",
        choiceC: "0", 
        choiceD: "null" 
},


      {
        question: "What does the pop() method do?",
        answer: "Removes the last element of an array, and returns that element.",
        choiceA:  "Removes the last element of an array.",
        choiceB:  "Removes the first element of an array, and returns that element.",
        choiceC:  "Removes the last element of an array, and returns that element.",
        choiceD:  "Removes the last element of an array."
  
      },

      {
        question: "What removes the 1st element of an array?",
        answer: "shift() method",
        choiceA:  "pop() method",
        choiceB:  "bind() method",
        choiceC:  "apply() method",
        choiceD:  "shift() method"
        
      }  
];


