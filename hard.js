//decelar variable
var hardValue,guessNumber;
var count=0;

//Random value create between 1-1000
function hard() {
    hardValue = Math.round(Math.random() * 1000);
    console.log("Hard Value:", hardValue);
    document.getElementById("happyphoto").style.display="none";
    document.getElementById("sadphoto").style.display="none";
    return hardValue;
}

//Take Guess number from the user
function guessValue()
{
    guessNumber=document.getElementById("userInput").value;
    console.log(guessNumber);
    return guessNumber;
}

//logic to check usernumber and random number
function checkTheNumber()
{  
    guessValue();
    if(hardValue != guessNumber)
    {
     count++;
     if(hardValue > guessNumber)
     {
      document.getElementById("message").innerHTML="Try again!!! (You Guess Smaller Number then the BOT)";
      document.getElementById("sadphoto").style.display="block";
      document.getElementById("message").style.display="block";
      document.getElementById("message").style.color="red";
     }
     else if(hardValue < guessNumber)
     {
      document.getElementById("message").innerHTML="Try again!!! (You Guess Greater Number then the BOT)";
      document.getElementById("sadphoto").style.display="block";
      document.getElementById("message").style.display="block";
      document.getElementById("message").style.color="red";
     }
    }
    else
    {    
      count++;
      document.getElementById("message").style.display="block";
      document.getElementById("message").innerHTML="Hurrah !!! You Won The Game";
      document.getElementById("countmessage").innerHTML="You Guess The Number in "+count+" times";
      document.getElementById("message").style.color="green";
      document.getElementById("countmessage").style.color="green";
      document.getElementById("countmessage").style.display="block";
      document.getElementById("happyphoto").style.display="block";
      document.getElementById("sadphoto").style.display="none";
      count =0;
    }
   
}

//if start button is click then new random value create
function start()
{
  hard();
  document.getElementById("message").style.display="none";
  document.getElementById("countmessage").style.display="none";
}
 hard();
/*
if click on check button check 
take from user number and random number
*/
function check()
{
  guessValue();
  checkTheNumber();
}
