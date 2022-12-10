
//getting the value from local storage "name";
let nameEl = localStorage.getItem("name");

// let userName = document.getElementById("userName");
const startGame = document.getElementById("startGame");
const notif = document.getElementById("notification");
const hiddenEl = document.querySelector(".hidden-el");
const hiddenEl1 = document.querySelector(".hidden-el1");
const hiddenEl2 = document.querySelector(".hidden-el2");
let userSave = document.getElementById("userSaveAnswer-el");
//textarea variable
const txtQuestion = document.getElementById("question");

//Difficulties
const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");

//Submit button
const submitBtn = document.getElementById("submit");

//User input
const userInput = document.getElementById("userAnswer-input");

//user score
const userScore = document.getElementById("userScore");

//user data stored
const playerAnswerData = [];

userName.textContent = nameEl;
// startGame.style.visibility = "hidden";

//Function of Difficulty level
easy.addEventListener("click", () =>{
    userScore.textContent = `${userScores = 0}`; 
    txtQuestion.innerHTML = `${easyQuestion[0]}`;
    hiddenEl1.classList.remove("normal");
    hiddenEl2.classList.remove("hard");
    if(hiddenEl.classList.contains("easy")){
        hiddenEl.classList.remove("easy");
     } else{
        hiddenEl.classList.add("easy");
    }
})

normal.addEventListener("click", () =>{
    userScore.textContent = `${userScores = 0}`; 
    txtQuestion.innerHTML = `${normalQuestion[0]}`;
    hiddenEl.classList.remove("easy");
    hiddenEl2.classList.remove("hard");
    if(hiddenEl1.classList.contains("normal")){
        hiddenEl1.classList.remove("normal");
    } else{
        hiddenEl1.classList.add("normal");
    }
    
})

hard.addEventListener("click", () =>{
    userScore.textContent = `${userScores = 0}`; 
    txtQuestion.innerHTML = `${hardQuestion[0]}`;
    hiddenEl.classList.remove("easy");
    hiddenEl1.classList.remove("normal");
    if(hiddenEl2.classList.contains("hard")){
        hiddenEl2.classList.remove("hard");
    } else{
        hiddenEl2.classList.add("hard");
    }
})

//Easy, normal, hard... Question array value
const easyQuestion = ["Who is the developer of QuizTech", "Give atleast one programming language.", "Are you human?"];
const normalQuestion = ["Name of my father", "Name of my mother?", "Name of my dog?"];
const hardQuestion = ["What is my age?", "What is my nick name?", "What is my color"];

//startGame function
// startGame.addEventListener("click", () =>{
//     txtQuestion.textContent = `${easyQuestion[0]}`;
    
// })
let userScores = 0;
//hidden-el clickListener
hiddenEl.addEventListener("click", () =>{
    easyCounter();
})

hiddenEl1.addEventListener("click", () =>{
    normalCounter();
})

hiddenEl2.addEventListener("click", () =>{
    hardCounter();
})

let counter = 0;
let userSaveAnswer = [];
submitBtn.addEventListener("click", () =>{
    //easy mode
    easyResult();
    normalResult();
    hardResult();
    userSaveAnswer.push(userInput.value);
    userSave.innerHTML += `<li>${userSaveAnswer}</li>`;
    userSaveAnswer.shift();
})

//Array counter functions
function easyCounter(){
    if(counter < (easyQuestion.length-1)){
        counter++;
    }
    txtQuestion.innerHTML = easyQuestion[counter];
    userInput.value = "";
}

function normalCounter(){
    if(counter < (normalQuestion.length-1)){
          counter++;
    }
    txtQuestion.innerHTML = normalQuestion[counter] ;
    userInput.value = "";
}

function hardCounter(){
    if(counter < (hardQuestion.length-1)){
          counter++;
    }
    txtQuestion.innerHTML = hardQuestion[counter] ;
    userInput.value = "";
}

//Functions of results
function easyResult(){

    if(txtQuestion.value === easyQuestion[0] && userInput.value === "Christian" || userInput.value === "christian"){
        userScores++;
        userScore.textContent = `${userScores}`;
    } else if(txtQuestion.value === easyQuestion[1] && userInput.value === "javascript"){
        userScores++;
        userScore.textContent = `${userScores}`;         
    } else if(txtQuestion.value === easyQuestion[2] && userInput.value === "yes"){
        userScores++;
        userScore.textContent = `${userScores}`;         
    } else if(userScore.value === 0){
        userScores = 0;
        userScore.textContent = `${userScores}`;         
    }

}

function normalResult(){
    if(txtQuestion.value === normalQuestion[0] && userInput.value === "Romeo" || userInput.value === "romeo"){
        userScores++;
        userScore.textContent = `${userScores}`;
    } else if(txtQuestion.value === normalQuestion[1] && userInput.value === "Nora" || userInput.value === "nora"){
        userScores++;
        userScore.textContent = `${userScores}`;         
    } else if(txtQuestion.value === normalQuestion[2] && userInput.value === "Romca" || userInput.value === "romca"){
        userScores++;
        userScore.textContent = `${userScores}`;         
    } else if(userScore.value === 0){
        userScores = 0;
        userScore.textContent = `${userScores}`;         
    }
}

function hardResult(){
    if(txtQuestion.value === hardQuestion[0] && userInput.value === "bens"){
        userScores++;
        userScore.textContent = `${userScores}`;
    } else if(txtQuestion.value === hardQuestion[1] && userInput.value === "Benson" || userInput.value === "benson"){
        userScores++;
        userScore.textContent = `${userScores}`;         
    } else if(txtQuestion.value === hardQuestion[2] && userInput.value === "Brown" || userInput.value === "brown"){
        userScores++;
        userScore.textContent = `${userScores}`;         
    } else if(userScore.value === 0){
        userScores = 0;
        userScore.textContent = `${userScores}`;         
    }
}