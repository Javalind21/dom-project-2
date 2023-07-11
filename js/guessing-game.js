/* 
Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm run test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.
*/

let score = 5;
let highscore = 0;
let randomNum = Math.floor(Math.random() * 101);

const input = document.querySelector('#myInput');

 function changeMsg (input){
    let reponse = document.getElementById("reponse");
    response.textContent = input;
{

}
}

const button = document.getElementById("button");

button.addEventListener('click', function () {
  if(input != num)
  {
    changeMsg("Please enter a valid number");
  }
  else if(input == randomNum){
    changeMsg("Correct Answer");
    properties.style.backgroundColor = "green";
    let newElement = document.createElement("p");
    newElement.textContent = randomNum;
    document.body.appendChild(newElement);
    highscore++;
    let newHighScore = document.getElementById("high-score");
    newScore.textContent(newHighScore);
  }
  else{
    let newScore = document.getElementById("score");
    score--;
    newScore.textContent(score);
  }
});




