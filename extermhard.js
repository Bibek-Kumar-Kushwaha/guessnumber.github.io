//decelar variable
var extermhardValue,guessNumber;
var count=0;

//Random value create between 1-10000
function extermHard() {
    extermhardValue = Math.round(Math.random() *10000);
    console.log("Exterm-Hard Value:", extermhardValue);
    document.getElementById("happyphoto").style.display="none";
    document.getElementById("sadphoto").style.display="none";
    return extermhardValue;
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
    if(extermhardValue != guessNumber)
    {
     count++;
     if(extermhardValue > guessNumber)
     {
      document.getElementById("message").innerHTML="Try again!!! (You Guess Smaller Number then the BOT)";
      document.getElementById("sadphoto").style.display="block";
      document.getElementById("message").style.display="block";
      document.getElementById("message").style.color="red";
     }
     else if(extermhardValue < guessNumber)
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
  extermHard();
  document.getElementById("message").style.display="none";
  document.getElementById("countmessage").style.display="none";
}
extermHard();
/*
if click on check button check 
take from user number and random number
*/
function check()
{
  guessValue();
  checkTheNumber();
}
