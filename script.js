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
const hiddenDiv = document.querySelector(".hidden-div-one"); 


const sectionOne = document.querySelector(".section-one");
const hiddenSectionOne = document.querySelector(".section-one.hidden");
const dialogWrapper = document.querySelector(".dialog-wrapper.hidden")
  


/* Functions */ 
function revealButton() {
    if ( firstHiddenButton.classList.contains("reveal")) {
        hiddenDiv.classList.remove("reveal"); 
    }
    else {
        hiddenDiv.classList.add("reveal");
         button_one.classList.add("hidden");
    }
} 

function revealDialog () {
    if (dialogWrapper.contains("hidden")) {
        dialogWrapper.remove("hidden"); 
    }
    else {
        dialogWrapper.remove("hidden");
    }

}

/* End of functions */ 




firstHiddenButton.addEventListener('click', function (event) {

    clickCounter++ 

    if (clickCounter === 4 ) {
        sectionOne.classList.add("hidden");

        revealDialog(); 
    }

}) 



/* Verkar inte fungera med reveal av dialog */ 
    

/* 
const dialog = document.createElement("p"); 
dialog.innerHTML = "NoOoo! Turn the lights back on!" ; 
document.dialogWrapper.appendChild(dialog); 
console.log (dialog); */ 


// Funktion gömma knapp, reveal en annan knapp.
// "släcka ljuset", reveal hide section-one black background? 
// Scroll funktion
// Gömma knappen bland massa cirklar. 
// Scrolla uoo igen när man trycker på knappen. 
// "Seriously, don't press this button. "
// Jump-scare