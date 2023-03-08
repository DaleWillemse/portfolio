// Blink typing
const texts = ["Hi! Welcome to my portfolio.", "Take a look :)"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typingText").textContent = letter;

  if (letter.length === currentText.length) {
    index = 0;
    count++;
  }

  setTimeout(type, 150);
})();

// Blink typing end

// Hamburger menu
const navToggle = document.querySelector(".navToggle");
(function openNav() {
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
})();
// Hamburger menu end
