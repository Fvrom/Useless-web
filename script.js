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
        button_one.innerHTML = "You are making a mistake!";   

} 

console.log(clickCounter); 

})

/* denna kod funakr ej ännu */ 
if (clickCounter === 4) {
    
function hideButtonOne() {
    if (button_one.style.display === "block") {
        button_one.style.display === "none"; 
    }
} 

}


