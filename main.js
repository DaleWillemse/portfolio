
//blink typing 
const texts = ['Hi! My name is Dale Willemse.', 'Welcome to my portfolio.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typingText').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type,250);
}());
//blink typing end

//Hamburger menu
const navToggle = document.querySelector('.navToggle');
(function openNav(){
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });
}());
//Hamburger menu end
