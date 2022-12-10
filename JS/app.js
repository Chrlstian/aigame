


let inputOne = document.getElementById("input1");
const btnStartEl = document.getElementById("btnStart");
const errorEl = document.getElementById("error");

btnStartEl.addEventListener("click", function(){

    if(inputOne.value === ""){
        errorEl.textContent = "Please input username";
        errorEl.style.color = "red";
    }
    else if(inputOne.value.length < 4){
        errorEl.textContent = "Please input atleast 4 characters";
        errorEl.style.color = "red";
    } 
    else if(inputOne.value.length > 8){
        errorEl.textContent = "Please input maximum 8 characters";
        errorEl.style.color = "red";
    } 
    else{
        window.location.href = "./welcome.html";
        localStorage.setItem("name", inputOne.value);
    }
    // window.location.href = "./welcome.html";
    // localStorage.setItem("name", inputOne.value);
    //./AUDIO/172567__djgriffin__video-game-6-1.wav
});