const deck = document.querySelector('.deck');                   // this would select the deck class from the html.
const reset = document.querySelector('.restart');               // this would select the restart class from the html.  
const moveIt = document.querySelector('.score-panel .moves');   // this would select both the score panel with moves class from the html.
const allCards = deck.querySelectorAll('.card')                 // this would select the card class in which we have all our cards. 
let matchClass = document.getElementsByClassName('match')       // this would select the class called match that is formed when two cards matches.
let cards = [];                                                 // this the empty array which name is assigned to cards.

deck.addEventListener('click' , function(e){// on deck a event listner is applied that would listen for a click with a target element. 
    if(e.target.classList == ('card')){     // this ensure that in our target only cards class is selected.no other item is selected in that array.
        if(cards.length < 2){               // condition if cards which are in our array are less then two.
            e.target.classList.add("open" , "show");            //add the classes open and show to the target element.
            cards.push(e.target);          // and after adding the classes, add them to the last position of that array.
    
            if(cards.length == 2) {    // condition if cards length = 2.
                setTimeout(function(){ // it is used to slow down the flipping process so that user can see it. and they donot close suddenly.
                    if( cards[0].innerHTML === cards[1].innerHTML){//if the cards have same inner html they should match.both for 1 and 2 position.
                        cards[1].classList.add('match'); //add class match to the second element of the the array which are having match class.
                        cards[0].classList.add('match'); //add class match to the first element of the the array which are having match class. 
                    } else {                             //if first condition is not implimented then execute this codition.
                        cards[0].classList.remove('show' , 'open') // remove the classes show and open form the first(position) from the array.
                        cards[1].classList.remove('show' , 'open') //remove the classes show and open form the second(position) from the array.
                    }                                              // esle bracket closed. 
                    cards = []; // after 2 elements are in array called cards we have to empty that one because user will be able to select 2                  // cards again. 
                    if(matchClass.length===allCards.length ){ //if all match class cards will have the length equal to cards.  
                        alert("YOU WON");                     //then it will show the massage called YOU WON.
                    }                                         // ending of if statement bracket.
                },1000)//assignment of the time of 1 sec for which program was stopped so the user can see the flipping process if 2 cards !same. 
                moveIt.textContent++; // this will add 1 each time when 2 cards are selected at one time.
                reset.addEventListener('click' ,function(){ // an event listener click is added to the class called restart to run restart button.
                    for ( x = 0 ; x < allCards.length ; x++ ){ // all the cards having class card are looped till they have legth of 16 elements
                        allCards[x].classList.remove('match' , 'open' , 'show');//if length reaches 16 elements remove classes match , open , show.
                    }                      //ending bracket of for loop 
                    moveIt.innerHTML = "0" //when restart button is clicked it turn moves to 0.
                }); //ending bracket of event listener.
            }       //ending bracket of if statement of condition length == 2.
        }           //ending bracket of if statement of condition length < 2.
    }               //ending bracket of first if statement of line 9. 
});                 //ending bracket of event listner of deck at line 8.
    
