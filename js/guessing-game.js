/* 
Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm run test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.
*/

let score = 5;
let highscore = 0;
let randomNum = Math.floor(Math.random() * 101);
 let newHighScore = document.getElementById("high-score");
let newScore = document.getElementById("score");

const input = document.getElementById("myInput");

newInput = Number(input);


 function changeMsg (input){
    let reponse = document.getElementById("reponse");
    reponse.textContent = input;
{

}
}

function toCheck(input){
  
}

const button = document.getElementById("button");

button.addEventListener('click', function () {
 
  if(typeof(newInput) === Number)
  {
    changeMsg("Please enter a valid number");
    
  }
  else if(newInput === randomNum)
  {
    changeMsg("Correct Answer");
    const properties = document.getElementById('property');
    properties.style.backgroundColor = "green";
    let newElement = document.createElement("p");
    newElement.textContent = randomNum;
    document.body.appendChild(newElement);
    highscore++;
   
    newScore.textContent = newHighScore;
    
  }
  else{
    console.log(typeof(newInput));
   
    score--;
    newScore.textContent = score;
  }

  if(newInput > randomNum){
   

    changeMsg("Too High");
  }
  else{
   
    changeMsg("Too Low");
  }

  if(score == 0){
    const properties = document.getElementById('property');
    properties.style.backgroundColor = "red";
    changeMsg("You are out of time");
    return 0;
  }

});   




console.log(randomNum);




