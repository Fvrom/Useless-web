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
    button_one.innerHTML = "Are you insane?!";   
} 

console.log(clickCounter); 

})



