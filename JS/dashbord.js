//sample
const aiShowAnswer = document.getElementById("aiShowAnswer");
const userShowAnswer = document.getElementById("userShowAnswer");
const chatBox = document.getElementById("chatbox");
const aiChatBox = document.getElementById("aiChatBox");
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

//user score & ai score
const userScore = document.getElementById("userScore");
const aiScore = document.getElementById("aiScore");

//user data stored
const playerAnswerData = [];

userName.textContent = nameEl;
// startGame.style.visibility = "hidden";

//Function of Difficulty level
easy.addEventListener("click", () =>{
    userScore.textContent = `${userScores = 0}`; 
    aiScore.textContent = `${aiScoreEasy = 0}`;
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
    aiScore.textContent = `${aiScoreEasy = 0}`;
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
    aiScore.textContent = `${aiScoreEasy = 0}`;
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
const easyQuestion = ["What is the most used Programming language in web?", "Give atleast one programming language.", "1 + 1 = ?"];
const normalQuestion = ["What of the robot who greet you when you open the QuizTech game?", "2 + 2 = ?", "The most visited site in the world?"];
const hardQuestion = ["Who created Microsoft?", "Who created TESLA?", "3 + 3 = ?"];

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
    easyAiScore();
    normalAiScore();
    hardAiScore();
    greet();
    aiGreet();
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

    if(txtQuestion.value === easyQuestion[0] && userInput.value === "javascript" || userInput.value === "Javascript" || userInput.value === "JAVASCRIPT"){
        userScores++;
        userScore.textContent = `${userScores}`;
        userShowAnswer.textContent = "Correct";
        userShowAnswer.style.color = "#234904";
        setTimeout(() =>{
            userShowAnswer.style.color = "black";
            userShowAnswer.textContent = "Checker";
        },2000)
    } else if(txtQuestion.value === easyQuestion[1] && userInput.value === "javascript" || userInput.value === "Javascript" || userInput.value === "python" || userInput.value === "Python" || userInput.value === "Java" || userInput.value === "java" || userInput.value === "C++" || userInput.value === "c++"){
        userScores++;
        userScore.textContent = `${userScores}`;  
        userShowAnswer.textContent = "Correct"; 
        userShowAnswer.style.color = "#234904";
        setTimeout(() =>{
            userShowAnswer.style.color = "black";
            userShowAnswer.textContent = "Checker";
        },2000)      
    } else if(txtQuestion.value === easyQuestion[2] && userInput.value === "2"){
        userScores++;
        userScore.textContent = `${userScores}`;   
        userShowAnswer.textContent = "Correct";  
        userShowAnswer.style.color = "#234904";  
        setTimeout(() =>{
            userShowAnswer.style.color = "black";
            userShowAnswer.textContent = "Checker";
        },2000)  
    } else if(txtQuestion.value === easyQuestion[0] && userInput.value !== "Javascript" || userInput.value !== "javascript"){
        userShowAnswer.textContent = "Wrong";
        userShowAnswer.style.color = "red";
        setTimeout(() =>{
            userShowAnswer.style.color = "black";
            userShowAnswer.textContent = "Checker";
        },2000)  
    } else if(txtQuestion.value === easyQuestion[1] && userInput.value !== "javascript" || userInput.value !== "Javascript" || userInput.value !== "Python" || userInput.value !== "python" || userInput.value !== "java" || userInput.value !== "Java" || userInput.value !== "C++" || userInput.value !== "c++"){
        userShowAnswer.textContent = "Wrong";
        userShowAnswer.style.color = "red";
        setTimeout(() =>{
            userShowAnswer.style.color = "black";
            userShowAnswer.textContent = "Checker";
        },2000)  
    } else if(txtQuestion.value === easyQuestion[2] && userInput.value !== "2"){
        userShowAnswer.textContent = "Wrong";
        userShowAnswer.style.color = "red";
        setTimeout(() =>{
            userShowAnswer.style.color = "black";
            userShowAnswer.textContent = "Checker";
        },2000)  
    }
    else if(userScore.value === 0){
        userScores = 0;
        userScore.textContent = `${userScores}`;    
    }

}

function normalResult(){
    if(txtQuestion.value === normalQuestion[0] && userInput.value === "Alex" || userInput.value === "alex"){
        userScores++;
        userScore.textContent = `${userScores}`;
        userShowAnswer.textContent = "Correct";
        userShowAnswer.style.color = "#234904";  
        setTimeout(() =>{
            userShowAnswer.textContent = "Checker";
        },2000)
    } else if(txtQuestion.value === normalQuestion[1] && userInput.value === "4"){
        userScores++;
        userScore.textContent = `${userScores}`;
        userShowAnswer.textContent = "Correct";
        userShowAnswer.style.color = "#234904";  
        setTimeout(() =>{
            userShowAnswer.textContent = "Checker";
        },2000)         
    } else if(txtQuestion.value === normalQuestion[2] && userInput.value === "Google" || userInput.value === "google"){
        userScores++;
        userScore.textContent = `${userScores}`;     
        userShowAnswer.textContent = "Correct";
        userShowAnswer.style.color = "#234904";  
        setTimeout(() =>{
            userShowAnswer.textContent = "Checker";
        },2000)    
    } else if(userScore.value === 0){
        userScores = 0;
        userScore.textContent = `${userScores}`;         
    }
}

function hardResult(){
    if(txtQuestion.value === hardQuestion[0] && userInput.value === "Bill Gates" || userInput.value === "bill gates" || userInput.value === "Bill gates"){
        userScores++;
        userScore.textContent = `${userScores}`;
        userShowAnswer.textContent = "Correct";
        userShowAnswer.style.color = "#234904";  
        setTimeout(() =>{
            userShowAnswer.textContent = "Checker";
        },2000)
    } else if(txtQuestion.value === hardQuestion[1] && userInput.value === "Elon Musk" || userInput.value === "Elon musk" || userInput.value === "elon musk"){
        userScores++;
        userScore.textContent = `${userScores}`;         
        userShowAnswer.textContent = "Correct";
        userShowAnswer.style.color = "#234904";  
        setTimeout(() =>{
            userShowAnswer.textContent = "Checker";
        },2000)
    } else if(txtQuestion.value === hardQuestion[2] && userInput.value === "6" || userInput.value === "6 "){
        userScores++;
        userScore.textContent = `${userScores}`;   
        userShowAnswer.textContent = "Correct";
        userShowAnswer.style.color = "#234904";  
        setTimeout(() =>{
            userShowAnswer.textContent = "Checker";
        },2000)      
    } else if(userScore.value === 0){
        userScores = 0;
        userScore.textContent = `${userScores}`;         
    }
}

//score of AI
let aiScoreEasy = 0;
let random = Math.floor(Math.random() * 2);
function easyAiScore(){

    if(txtQuestion.value === easyQuestion[0]){
        aiScoreEasy++;
        aiScore.textContent = `${aiScoreEasy}`;
        aiShowAnswer.textContent = "Correct";
        aiShowAnswer.style.color = "#234904";  
        setTimeout(() =>{
            aiShowAnswer.textContent = "Checker";
        },2000)
    } else if(txtQuestion.value === easyQuestion[1]){
        aiScoreEasy++;
        aiScore.textContent = `${aiScoreEasy}`;
        aiShowAnswer.textContent = "Correct";
        aiShowAnswer.style.color = "#234904";  
        setTimeout(() =>{
            aiShowAnswer.textContent = "Checker";
        },2000)
    } else if(txtQuestion.value === easyQuestion[2]){
        switch(random){
            case 0:
                aiScoreEasy++;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Correct";
                aiShowAnswer.style.color = "#234904";
                break;
            case 1:
                // aiScoreEasy = 0;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Wrong";
                aiShowAnswer.style.color = "red";
                break;
        }
    } else if(aiScore.value === 0){
        aiScoreEasy = 0;
        aiScore.textContent = `${aiScoreEasy}`;         
    }

}

function normalAiScore(){

    if(txtQuestion.value === normalQuestion[0]){
        switch(random){
            case 0:
                aiScoreEasy++;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Correct";
                aiShowAnswer.style.color = "#234904";
                break;
            case 1:
                // aiScoreEasy = 0;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Wrong";
                aiShowAnswer.style.color = "red";
                break;
        }
        // aiScoreEasy++;
        // aiScore.textContent = `${aiScoreEasy}`;
        // aiShowAnswer.textContent = "Correct";
        // aiShowAnswer.style.color = "#234904";  
        // setTimeout(() =>{
        //     aiShowAnswer.textContent = "Show Answer";
        // },2000)
    } else if(txtQuestion.value === normalQuestion[1]){
        aiScoreEasy++;
        aiScore.textContent = `${aiScoreEasy}`;
        aiShowAnswer.textContent = "Correct";
        aiShowAnswer.style.color = "#234904";  
        setTimeout(() =>{
            aiShowAnswer.textContent = "Checker";
        },2000)
    } else if(txtQuestion.value === normalQuestion[2]){
        switch(random){
            case 0:
                aiScoreEasy++;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Correct";
                aiShowAnswer.style.color = "#234904";
                break;
            case 1:
                // aiScoreEasy = 0;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Wrong";
                aiShowAnswer.style.color = "red";
                break;
        }
    } else if(aiScore.value === 0){
        aiScoreEasy = 0;
        aiScore.textContent = `${aiScoreEasy}`;         
    }

}

function hardAiScore(){

    if(txtQuestion.value === hardQuestion[0]){
        switch(random){
            case 0:
                aiScoreEasy++;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Correct";
                aiShowAnswer.style.color = "#234904";
                break;
            case 1:
                // aiScoreEasy = 0;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Wrong";
                aiShowAnswer.style.color = "red";
                break;
            case 2:
                    // aiScoreEasy = 0;
                    aiScore.textContent = `${aiScoreEasy}`;
                    aiShowAnswer.textContent = "Corect";
                    aiShowAnswer.style.color = "#234904";
                    break;
        }
        // aiScoreEasy++;
        // aiScore.textContent = `${aiScoreEasy}`;
        // aiShowAnswer.textContent = "Correct";
        // aiShowAnswer.style.color = "#234904";  
        // setTimeout(() =>{
        //     aiShowAnswer.textContent = "Show Answer";
        // },2000)
    } else if(txtQuestion.value === hardQuestion[1]){
        switch(random){
            case 0:
                aiScoreEasy++;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Correct";
                aiShowAnswer.style.color = "#234904";
                break;
            case 1:
                // aiScoreEasy = 0;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Wrong";
                aiShowAnswer.style.color = "red";
                break;
        }
        // aiScoreEasy++;
        // aiScore.textContent = `${aiScoreEasy}`;
        // aiShowAnswer.textContent = "Correct";
        // aiShowAnswer.style.color = "#234904";  
        // setTimeout(() =>{
        //     aiShowAnswer.textContent = "Show Answer";
        // },2000)
    } else if(txtQuestion.value === hardQuestion[2]){
        switch(random){
            case 0:
                aiScoreEasy++;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Correct";
                aiShowAnswer.style.color = "#234904";
                break;
            case 1:
                // aiScoreEasy = 0;
                aiScore.textContent = `${aiScoreEasy}`;
                aiShowAnswer.textContent = "Wrong";
                aiShowAnswer.style.color = "red";
                break;
        } 
    } else if(aiScore.value === 0){
        aiScoreEasy = 0;
        aiScore.textContent = `${aiScoreEasy}`;         
    }

}

//
function greet(){

    if(userScores === 3){
        chatBox.textContent = "Perfect!! you win";
        
    } else if(userScores == 2){
        chatBox.textContent = "Woah hooo!!";
        setTimeout(() =>{
            chatBox.textContent = "";
        },2000)
    } 
}

function aiGreet(){
    if(aiScoreEasy === 3){
        aiChatBox.innerHTML = `<b>Jade:</b> Easy win..`
        setTimeout(() =>{
            aiChatBox.innerHTML = "";
        },2000)
    }
}


  
