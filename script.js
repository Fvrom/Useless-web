/* Variables */ 

const button_one = document.querySelector(".button-one"); 

let clickCounter = 0; 

const firstHiddenButton = document.querySelector(".reveal-first-hidden-button");
const hiddenDiv = document.querySelector(".hidden-div-one"); 


const sectionOne = document.querySelector(".section-one");
const hiddenSectionOne = document.querySelector(".section-one.hidden");
const DialogWrapperOne = document.querySelector(".dialog-wrapper-one");
  

const hiddenDivTwo = document.querySelector(".hidden-div-two");


let flexibleColumnOne = document.querySelector(".flexible-column-one");
let flexibleColumnTwo = document.querySelector(".flexible-column-two");
let mainSection = document.querySelector(".main"); 


const arrow = document.querySelector(".arrow");

let sectionTwo = document.querySelector(".section-two");


const dialogWrapperTwo = document.querySelector(".dialog-wrapper-two")




/* Arrays */ 
const quotes = [
     'Great job..you turned the lights off. Now what?', 
     'Ha! try to find it now',
     'Okey..but seriously. Do NOT click now.' 
 ]; 



/* End of arrays */ 



/* Functions */ 


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


})

/* Function for hiding first button and revealing a second one */ 


function revealFirstHiddenButton() {

        hiddenDiv.classList.add("reveal");
         button_one.classList.add("hidden");
     
} 

function hideFirstHiddenButton()  {
    hiddenDiv.classList.remove("reveal");
}

function revealFirstDialog()  {
  
        DialogWrapperOne.classList.add("reveal");

       
}

function revealSecondDialog() {
    dialogWrapperTwo.classList.add("reveal");
    
}


function hideDialog() {
    DialogWrapperOne.classList.remove("reveal");
}


function createText(quote) {
    return `<p class="reveal-dialog"> ${quote} </p> `
}

function generateText() {

    for(i=0; i < quotes.length; i++ ) {


    };
    
    const textDialog = createText(quotes[0]); 
    DialogWrapperOne.appendChild(stringToHTML(textDialog));
        
    
    const textDialogTwo = createText(quotes[1]);
    dialogWrapperTwo.appendChild(stringToHTML(textDialogTwo)); 

    function updateDialog() {
        textDialog = createText(quotes[2]);
        DialogWrapperOne.innerHTML.appendChild(stringToHTML(textDialog));
    }
};



 

 const createButton = (button) => {
     return `<button class="buttons_item .${i}"> ${i} </button> `
 };


 

/* End of functions */ 




firstHiddenButton.addEventListener('click', function (event) {

    clickCounter++ 

    if (clickCounter === 4 ) {
        // sectionOne.classList.add("hidden");

        flexibleColumnOne.style.background = "black"; 
        flexibleColumnTwo.style.background = "black"; 
        mainSection.style.background = "black"; 

        hideFirstHiddenButton();

        revealFirstDialog();

        arrow.classList.add("reveal");


        sectionTwo.classList.add("reveal"); 
       // hiddenDivTwo.classList.add("reveal");
        console.log(clickCounter); 
    }
}); 

const buttonContainer = document.querySelector(".button-container")
let goForbuttons = false; 

window.addEventListener('scroll', function() {

    arrow.classList.remove("reveal");
    console.log('scroll');

    let goForButtons = true; 
})


if (goForButtons = true) {
    
   
    for ( i = 0; i < 16; i++) {
        const theButtons = createButton();
        buttonContainer.appendChild(stringToHTML(theButtons));
    };

    revealSecondDialog();
    generateText();
    

}

const buttons = document.querySelectorAll(".buttons_item"); 

let redButton = buttons[9]; 


redButton.addEventListener("mouseover", function (event) {
    event.target.style.background = "red";

    setTimeout(function() {
        event.target.style.background = "";
    }, 600); 
}, false ); 

/* const createTopLink = () => {
    return `<a href='#top'> </a>`
}; 

const topLink = createTopLink();
redButton.appendChild(stringToHTML(topLink));  Behövs inte länk */ 

 redButton.addEventListener("click", function (event) {

    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;

    sectionTwo.classList.remove("reveal"); 

    updateDialog()

})






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
// Ändra färger till variabler */ 