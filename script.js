const button_one = document.querySelector(".button-one"); 

let clickCounter = 0; 




button_one.addEventListener('click', function (event) {

    clickCounter++ 

    if (clickCounter === 1 ) {
        button_one.innerHTML = "I said don't press!";   
    }

    
    else if (clickCounter === 2 ) {
    button_one.innerHTML = "Why are you ignoring me!";   

    } 


    else {
        revealButton(); 

} 

console.log(clickCounter); 

})

/* Function for hiding first button and revealing a second one */ 

const firstHiddenButton = document.querySelector(".reveal-first-hidden-button");
const hiddenDiv = document.querySelector(".hidden-div"); 
    
function revealButton() {
    if ( firstHiddenButton.classList.contains("reveal")) {
        hiddenDiv.classList.remove("reveal"); 
    }
    else {
        hiddenDiv.classList.add("reveal");
         button_one.classList.add("hidden");
    }
} 

const sectionOne = document.querySelector(".section-one");
const hiddenSectionOne = document.querySelector(".section-one.hidden");

firstHiddenButton.addEventListener('click', function (event) {

    clickCounter++ 

    if (clickCounter === 4 ) {
        sectionOne.classList.add("hidden");
    }

}) 

// Funktion gömma knapp, reveal en annan knapp.
// "släcka ljuset", reveal hide section-one black background? 
// Scroll funktion
// Gömma knappen bland massa cirklar. 
// Scrolla uoo igen när man trycker på knappen. 
// "Seriously, don't press this button. "
// Jump-scare