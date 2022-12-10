
const welcomeBox = document.getElementById("welcomeBox");
const btnContinue = document.getElementById("btnContinue");
const btnback = document.getElementById("btnBack");

let nameEl = localStorage.getItem("name");
btnback.addEventListener("click", () =>{
    window.location.href = "./index.html";
})
btnContinue.style.visibility = 'hidden';
btnback.style.visibility = 'hidden';

setTimeout(() =>{
    welcomeBox.innerHTML = `Welcome <b>${nameEl}</b> my name is Alex and I will be the GM of the game!!`;
},1000)

setTimeout(() =>{
    welcomeBox.textContent = `This game will test your knowledge about the tech. Make sure to study before you play the game to make sure your victory against computer AI.`;
},5000)

setTimeout(() =>{
    welcomeBox.textContent = `I hope you enjoy the game...Break a leg!!`;
},13000)

setTimeout(() =>{
    btnContinue.style.visibility = 'visible';
},15000)

setTimeout(() =>{
    btnback.style.visibility = 'visible';
},15000)

btnContinue.addEventListener("click", () =>{
    window.location.href = "./dashbord.html";
})


