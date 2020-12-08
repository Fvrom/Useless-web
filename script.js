const button_one = document.querySelector(".button-one"); 

let clickCounter = 0; 

const firstHiddenButton = document.querySelector(".reveal-first-hidden-button");
const hiddenDiv = document.querySelector(".hidden-div-one"); 


const sectionOne = document.querySelector(".section-one");
const hiddenSectionOne = document.querySelector(".section-one.hidden");
const hiddenDialogWrapper = document.querySelector(".hidden-dialog-wrapper");
  

const hiddenDivTwo = document.querySelector(".hidden-div-two");


let flexibleColumnOne = document.querySelector(".flexible-column-one");
let flexibleColumnTwo = document.querySelector(".flexible-column-two");
let mainSection = document.querySelector(".main"); 


const arrow = document.querySelector(".arrow");

let sectionTwo = document.querySelector(".section-two");


const quotes = ['Great job..you turned the lights off. Now what?', 
                'Ha! try to find it now',
                'Okey..but seriously. Do NOT click now.' 
 ]; 

const buttons = [
    { name: 'button1', color: '#5A5A5A'},
    { name: 'button2', color: '#5A5A5A'},
    { name: 'button3', color: '#5A5A5A'},
    { name: 'button4', color: '#5A5A5A'},
    { name: 'button5', color: '#D51C1C'},
    { name: 'button6', color: '#5A5A5A'},
];

// Creates an HTML element from string
const stringToHTML = (str) => {
    const div = document.createElement('div');
    div.innerHTML = str;
    return div.firstChild;
  };




button_one.addEventListener('click', function (event) {

    clickCounter++ 

    if (clickCounter === 1 ) {
        button_one.innerHTML = "I said don't press!";   
    }

    
    else if (clickCounter === 2 ) {
    button_one.innerHTML = "Why are you ignoring me!";   

    } 


    else {
        revealFirstHiddenButton(); 

} 

console.log(clickCounter); 

})

/* Function for hiding first button and revealing a second one */ 


/* Functions */ 
function revealFirstHiddenButton() {

        hiddenDiv.classList.add("reveal");
         button_one.classList.add("hidden");
     
} 

function hideFirstHiddenButton()  {
    hiddenDiv.classList.remove("reveal");
}

function revealDialog()  {
   
        hiddenDialogWrapper.classList.add("reveal");

        generateText(); 
       
}

function hideDialog() {
    hiddenDialogWrapper.classList.remove("reveal");
}


const createText = (quote) => {
    return `<p class="reveal-dialog"> ${quote} </p> `
}

const generateText = () => {
quotes.forEach((item) => {
    const textDialog = createText(item); 
    hiddenDialogWrapper.appendChild(stringToHTML(textDialog));
});
}; 

/* Use for creating more dialog frames? 
const createDivDialog = (div) => {
    return `<div class="hidden-dialog-wrapper"> </div>  `
}
 */ 

 const buttonContainer = document.querySelector(".button-container")

 const createButton = (name, color) => {
     return `<button class="buttons" data-color=${color}> ${name} </button> `
 }

 const generateButtons = () => {
     buttons.forEach((item) => {
         const theButtons = createButton(item.name, item.color);
        buttonContainer.appendChild(stringToHTML(theButtons));
     })
 }
/* End of functions */ 




firstHiddenButton.addEventListener('click', function (event) {

    clickCounter++ 

    if (clickCounter === 4 ) {
        // sectionOne.classList.add("hidden");

        flexibleColumnOne.style.background = "black"; 
        flexibleColumnTwo.style.background = "black"; 
        mainSection.style.background = "black"; 

        hideFirstHiddenButton();

        revealDialog();

        arrow.classList.add("reveal");


        sectionTwo.classList.add("reveal"); 
       // hiddenDivTwo.classList.add("reveal");
        console.log(clickCounter); 
    }
}) 

let goForbuttons = false; 

window.addEventListener('scroll', function() {

    arrow.classList.remove("reveal");
    console.log('scroll');

    let goForButtons = true; 
})


if (goForButtons = true) {
    generateButtons();
}


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