//code containing our script to run our game.html functions

//create a function to run our game
function playGame() {
    // we are going to narrate what is going on in this function in the console
    console.log("playGame function was called");

    //roll a die by calling the rollDie function
    var die1 = rollDie();
    console.log("the first die roll is: " + die1);

    //roll a die by calling the rollDie function
    var die2 = rollDie();
    console.log("the second die roll is: " + die2);

    //add both results
    var sum = die1 + die2;
    console.log("the sum is: " + sum);

    //output the dice rolls to the page
    document.getElementById("die1Result").textContent = "Die 1 is: " + die1;
    document.getElementById("die2Result").textContent = "Die 2 is: " + die2;
    document.getElementById("sumResult").textContent = "sum is: " + sum;

    // game logic for win or lose
    if (sum == 7 || sum == 11) {
        document.getElementById("gameResult").textContent = "You Lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        //if the numbers are the same and there is no remainder, you win
        document.getElementById("gameResult").textContent = "you win";
    }
    else {
        document.getElementById("gameResult").textContent = "you pushed";
    }
}
//create separate function to generate dice rolls - random number generator between 1-6
function rollDie() {
    //generate a random number between 1 and 6
    var die = Math.random() * 6;
    //return the random number to the code that called this fuction
    return Math.ceil(die); //return whole number to function
}

//function to validate user input
function validateString() {
    let firstNameElement = document.getElementById("firstName");
    let lastNameElement = document.getElementById("lastName");

    console.log(firstNameElement.value);
    console.log(lastNameElement.value);

    let firstNameString = firstNameElement.value;
    let lastNameString = lastNameElement.value;

    let nameCombo = firstNameString + " " + lastNameString;
    console.log(nameCombo)

    if (nameCombo.length > 20) {
        alert("Your full name is greater than 20 characters");
        return;
    }
    console.log("input validated!")
}

//functions to run both buttons that will start and stop moving our Image on index.html
let animationId = -1;
let stopanimationId = -1;
function startImage() 
{

    let startButton = document.getElementById("startButton");
    startButton.setAttribute("disabled", true);
    console.log("startImage was Called");

    let stopButton = document.getElementById("stopButton");
    stopButton.removeAttribute("disabled");

  animationId = requestAnimationFrame(moveImage);
}

function stopImage() 
{
    let startButton = document.getElementById("startButton");

    startButton.removeAttribute("disabled");

    let stopButton = document.getElementById("stopButton");

    stopButton.setAttribute("disabled", true);

    console.log("stopImage was called");

    requestAnimationFrame(stopmoveImage);
}
let leftPos = 0;
function moveImage()
{
let image = document.getElementById("memeImage");

leftPos += 5;

image.style.left = leftPos + "px"

animationId = requestAnimationFrame(moveImage);

window.cancelAnimationFrame(stopanimationId);
}

function stopmoveImage()
{
    leftPos = 0;

    let image = document.getElementById("memeImage");

    image.style.left = 0; + "px"

    window.cancelAnimationFrame(animationId);

   stopanimationId = requestAnimationFrame(stopmoveImage);
}

/* Assignment 9.1 Palindrome Checker*/
function checkPalin(){
    console.log("checkPalin() started");
    
   // record the text input as a string
    var entStr;
    entStr= document.getElementById("palinInput").value;
     console.log("entStr is: " + entStr);
    //take away spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is: " + entStrNoSpace);
    //create a new revArray var and reverse string
    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length - 1;
    console.log("string length is "+ length);
    // input into Array and reverse it
    for(var i = length; i >= 0; i--){
        revArray.push(entStrNoSpace[i]);
    }
    // convert to a string from Array
    revStr = revArray.join("");
    console.log("reversed is "+ revStr);
    
    //compare rev to string and write to status
    var equal = 0;
    equal = (entStrNoSpace == revStr);
    console.log("the entry and reversed being equal is "+ equal);
    //write to palindrome status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome"
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome"
    }
    
 }

 //Assignment 11.1, play sound effect
function partySound() {
    console.log("partySound() started");
    mySound = new Sound("party_horn-Mike_Koenig.mp3");
    mySound.play();
}
function Sound(srcFile) {
    console.log("sound() started with " + " sound file.");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none")
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

//Assignment 12.2 Bringing it all together
function validatephoneNumber() {
   let countryCodeElement = document.getElementById("countryNumber");
   let areaCodeElement = document.getElementById("areaNumber");
   let teleCodeElement = document.getElementById("teleNumber");
   let lineCodeElement = document.getElementById("lineNumber");

    console.log(countryCodeElement.value) 
    console.log(areaCodeElement.value) 
    console.log(teleCodeElement.value) 
    console.log(lineCodeElement.value)   

    var countryCode = 1;
    var areaCode = 3;
    var teleCode = 3;
    var lineCode = 4;

    let countryCodeString = countryCodeElement.value;
    let areaCodeString = areaCodeElement.value;
    let teleCodeString = teleCodeElement.value;
    let lineCodeString = lineCodeElement.value;

    let fullPhoneNumber = countryCodeString + areaCodeString + teleCodeString + lineCodeString

    if(fullPhoneNumber.length != countryCode + areaCode + teleCode + lineCode){
        document.getElementById("phoneStatus").innerHTML = fullPhoneNumber + " is not a real phone number"
    } else {
        document.getElementById("phoneStatus").innerHTML = fullPhoneNumber + " is a real phone number"
    }

}