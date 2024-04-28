document.addEventListener("DOMContentLoaded", ()=>{
const spinBtn = document.getElementById("spinBtn");
const spinner = document.getElementById("Spinner");
const elements = document.querySelector(".elements-container");
const notifyPopUp = document.getElementById("notifyPopUp");
const playAgainBtn = document.getElementById("playAgainBtn"); 

let spinnerOutput;
let gameResult;
elements.addEventListener("click", (e)=>{
notifyPopUp.style.zIndex = "-1";
let playerchoice = e.target.getAttribute("data");
let random = Math.floor(Math.random() * 8);
spinnerOutput = random;
gameResult = spinnerOutput==playerchoice;

});


spinBtn.addEventListener("click", ()=>{
   spinBtn.style.display = "none";
   document.getElementById("arrow").style.display = "block";
   document.documentElement.style.setProperty('--offset', "30vh");
   // Define the animation properties
   let stopPosition = 5400+45*spinnerOutput;
const keyframes = [
  { transform: 'rotate(0deg)' },
  { transform: ` rotate(${stopPosition}deg)` }
];
const options = {
   duration: 5000, // 5 seconds
   iterations: 1,
   fill: 'forwards',
   easing: 'ease-in-out' // Apply ease-in-out timing function
 };
 // Create the animation
spinner.animate(keyframes, options);

setTimeout(() => {
   notifyPopUp.style.zIndex = "10";
   showGameResult(gameResult);
   playAgainBtn.style.display = "block";
}, 5000);

});

playAgainBtn.addEventListener("click", ()=>{
   playAgainBtn.style.display = "none";
   notifyPopUp.style.zIndex = "10";
   notifyPopUp.textContent = "Choose A Number";
   notifyPopUp.style.backgroundColor = "#f35500";
   document.documentElement.style.setProperty('--offset', "23vh");
   document.getElementById("arrow").style.display = "none";
   spinBtn.style.display = "block";
});

function showGameResult(condition){
   if(condition){
      notifyPopUp.textContent = "You Won!";
      notifyPopUp.style.backgroundColor = "green";
   }
   else{
      notifyPopUp.textContent = "You Lose!";
      notifyPopUp.style.backgroundColor = "red";
   }
}

});

