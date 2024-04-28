document.addEventListener("DOMContentLoaded", ()=>{
const spinBtn = document.getElementById("spinBtn");
const spinner = document.getElementById("Spinner");
const elements = document.querySelector(".elements-container");
const notifyPopUp = document.getElementById("notifyPopUp");
const playAgainBtn = document.getElementById("playAgainBtn"); 
const arrow = document.getElementById("arrow");
const userChoice = document.getElementById("playerChoice");

function showGameResult(condition){
   if(condition == true){
      notifyPopUp.textContent = "You Won!";
      notifyPopUp.style.backgroundColor = "green";
      arrow.classList.add("arrow1");
   }
   else{
      notifyPopUp.textContent = "You Lose!";
      notifyPopUp.style.backgroundColor = "red";
   }
}
let clickEnabled = true;
let spinnerOutput,playerchoice,gameResult;
elements.addEventListener("click", (e) => {
   // Check if click event should be processed
   if (!clickEnabled) {
      return; // Exit the function if click is disabled
  }
playerchoice = e.target.getAttribute("data");
if(playerchoice!=null){
   notifyPopUp.style.zIndex = "-1";
   userChoice.textContent = `You Choose ${playerchoice}`;
   clickEnabled = false;
}
console.log(playerchoice);
let random = Math.floor(Math.random() * 8);
spinnerOutput = random;
arrow.classList.remove("arrow1");
});

spinBtn.addEventListener("click", ()=>{
   console.log(spinnerOutput);
   gameResult = spinnerOutput==playerchoice;
   // userChoice.textContent = `You Choose ${playerchoice}`;
   spinBtn.style.display = "none";
   arrow.style.display = "block";
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
   // console.log(spinnerOutput);
   // console.log(playerchoice);
   showGameResult(gameResult);
   notifyPopUp.style.zIndex = "10";
   playAgainBtn.style.display = "block";
}, 5000);

});

playAgainBtn.addEventListener("click", ()=>{
   userChoice.textContent = "";
   playAgainBtn.style.display = "none";
   notifyPopUp.style.zIndex = "10";
   notifyPopUp.textContent = "Choose A Number";
   notifyPopUp.style.backgroundColor = "#f35500";
   document.documentElement.style.setProperty('--offset', "23vh");
   document.getElementById("arrow").style.display = "none";
   spinBtn.style.display = "block";
   clickEnabled = true;
});


});

