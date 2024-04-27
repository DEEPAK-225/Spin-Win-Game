document.addEventListener("DOMContentLoaded", ()=>{
const spinBtn = document.getElementById("spinBtn");
const element = document.getElementById("Spinner");

// Define the animation properties
let stopPosition = 5400+45*Math.floor(Math.random() * 8);
const keyframes = [
  { transform: 'rotate(0deg)' },
  { transform: `rotate(${stopPosition}deg)` }
];

const options = {
  duration: 5000, // 5 seconds
  iterations: 1,
  fill: 'forwards',
  easing: 'ease-in-out' // Apply ease-in-out timing function
};

// Create the animation
const animation = element.animate(keyframes, options);

 

setTimeout(() => {
   spinBtn.style.display = "block";  
}, 5100);
spinBtn.addEventListener("click", ()=>{
   location.reload();
   // styleSheet.insertRule(keyframes, 0);
});



});