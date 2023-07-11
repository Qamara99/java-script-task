let st="";
let sum = 0;
let winflag = false;
let pressed = false;


function Randnum() {
    let randvalue = Math.floor( Math.random()*13 ) + 1
    if (randvalue> 10) {
        return 10;
    } 
    else if (randvalue== 1) {
        return 11;
    } else {
        return randvalue;
        
    }
}

function startGame() {
    pressed = true;
    let firstCard = Randnum();
    let secondCard = Randnum();
    st=" "+firstCard+" "+secondCard+" ";
    sum = firstCard + secondCard;
    
    showCardvalues();
}

function showCardvalues() {
 
    document.getElementById("cards-el").innerHTML = "Cards: ";
    document.getElementById("cards-el").innerHTML += st+ " ";
  
    
    document.getElementById("sum-el").innerHTML = "Sum: " + sum;
    if (sum < 21) {
         document.getElementById("message-el").innerHTML = "Do you want to draw a new card?";
    } 
    else if (sum == 21) {
         document.getElementById("message-el").innerHTML = "You've got Blackjack!";
        winflag = true;
    }
    else {
         document.getElementById("message-el").innerHTML = "You're out of the game!";
        pressed = false;
    }
    
}


function newCard() {
    if (pressed === true && winflag === false) {
        let card = Randnum();
        sum += card;
        st+=" "+card;
        showCardvalues() ;       
    }
}