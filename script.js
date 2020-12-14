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

const dialogWrapperTwo = document.querySelector(".dialog-wrapper-two");

const dialogWrapperThree = document.querySelector(".dialog-wrapper-three");

const video = document.querySelector(".video-wrapper");

const lastButton = document.querySelector(".last-button");

const buttonContainer = document.querySelector(".button-container");

/* Arrays */
const quotes = [
  "You turned the lights off. Good job.. I mean it.",
  "Ha! try to find it now",
  "NOO! Seriously. Do NOT click now.",
];

/* End of arrays */

/* Functions */

// Creates an HTML element from string
const stringToHTML = (str) => {
  const div = document.createElement("div");
  div.innerHTML = str;
  return div.firstChild;
};

button_one.addEventListener("click", function (event) {
  clickCounter++;

  if (clickCounter === 1) {
    button_one.innerHTML = "I said don't press!";
  } else if (clickCounter === 2) {
    button_one.innerHTML = "Why are you ignoring me!";
  } else {
    revealFirstHiddenButton();
  }
});

/* Function for hiding first button and revealing a second one */
function revealFirstHiddenButton() {
  hiddenDiv.classList.add("reveal");
  button_one.classList.add("hidden");
}

function hideFirstHiddenButton() {
  hiddenDiv.classList.remove("reveal");
}

/* reveal dialog */
function revealFirstDialog() {
  DialogWrapperOne.classList.add("reveal");
}

function hideFirstDialog() {
  DialogWrapperOne.classList.remove("reveal");
}

/* Second dialog */
function revealSecondDialog() {
  dialogWrapperTwo.classList.add("reveal");
}

/* Create dialog text */

function createText(quote) {
  return `<p class="reveal-dialog"> ${quote} </p> `;
}

function generateText() {
  for (i = 0; i < quotes.length; i++) {}

  const textDialog = createText(quotes[0]);
  DialogWrapperOne.appendChild(stringToHTML(textDialog));

  const textDialogTwo = createText(quotes[1]);
  dialogWrapperTwo.appendChild(stringToHTML(textDialogTwo));

  const textDialogThree = createText(quotes[2]);
  dialogWrapperThree.appendChild(stringToHTML(textDialogThree));
}

const createButton = (button) => {
  return `<button class="buttons_item .${i}"> ${i} </button> `;
};

firstHiddenButton.addEventListener("click", function (event) {
  clickCounter++;

  if (clickCounter === 4) {
    /* changes background to black as website turns dark */
    flexibleColumnOne.style.background = "black";
    flexibleColumnTwo.style.background = "black";
    mainSection.style.background = "black";

    hideFirstHiddenButton();

    revealFirstDialog();

    arrow.classList.add("reveal");

    /* reveals a second section when you scroll down */
    sectionTwo.classList.add("reveal");
  }
});

let goForbuttons = false;

window.addEventListener("scroll", function () {
  arrow.classList.remove("reveal");

  let goForButtons = true;
});

/* goForButtons will turn true when you start scrolling, when it is true 
buttons will be created in second section */
if ((goForButtons = true)) {
  for (i = 0; i < 16; i++) {
    const theButtons = createButton();
    buttonContainer.appendChild(stringToHTML(theButtons));
  }

  revealSecondDialog();
  generateText();
}

/* Make one button turn red when you hover over it */
const buttons = document.querySelectorAll(".buttons_item");

/* random red button */
let redButton = buttons[Math.floor(Math.random() * 15)];

redButton.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.background = "red";

    setTimeout(function () {
      event.target.style.background = "";
    }, 600);
  },
  false
);

/* Function for when you click the red button */

redButton.addEventListener("click", function (event) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  sectionTwo.classList.remove("reveal");

  hideFirstDialog();

  dialogWrapperThree.classList.add("reveal");

  lastButton.classList.add("reveal");
  console.log(lastButton);
});

/* The last button,when clicked reveals a video*/
lastButton.addEventListener("click", function () {
  video.classList.add("reveal");

  lastButton.classList.remove("reveal");
  dialogWrapperThree.classList.remove("reveal");
});
