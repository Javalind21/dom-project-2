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

newInput = parseInt(input, 10);

const button = document.getElementById("button");

 function changeMsg (input){
    let reponse = document.getElementById("reponse");
    reponse.textContent = input;
{

}
}



button.addEventListener('click', function () {
 
  if(typeof(newInput) !== "number")
  {
    changeMsg("Please enter a valid number");
    console.log(typeof(newInput));
    
  }
  else if(newInput === randomNum)
  {
    changeMsg("Correct Answer");
    const properties = document.getElementById('property');
    properties.style.backgroundColor = "green";
    let newElement = document.createElement("p");
    newElement.textContent = randomNum;
    document.body.appendChild(newElement);
    if(score > highscore){
    highscore = score
    newScore.textContent = highscore;
    }
  }
  else if (newInput !== randomNum){
    if(score == 0){
    changeMsg("You have lost");
    button.disable = true;
   }
   else if(newInput > randomNum){
      changeMsg("Too High");
   }
   else{
    changeMsg("Too Low");
   }
    score--;
    newScore.textContent = score;
  }

});   




console.log(randomNum);




