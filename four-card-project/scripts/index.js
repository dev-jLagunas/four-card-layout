//Get DOM Elements
const moonBtn = document.querySelector(".moon-btn");
const sunBtn = document.querySelector(".sun-btn");
const body = document.body;

//Add Event Listeners
moonBtn.addEventListener("click", () => {
  body.classList.add("dark-mode");
  sunBtn.style.display = "block";
  moonBtn.style.display = "none";
});

sunBtn.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  sunBtn.style.display = "none";
  moonBtn.style.display = "block";
});
