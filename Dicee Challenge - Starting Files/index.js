randomNumber1 = Math.floor(Math.random()*6) ;
randomNumber2 = Math.floor(Math.random()*6) ;

var images = ["images/dice1.png" , "images/dice2.png" , "images/dice3.png" , "images/dice4.png" , "images/dice5.png" , "images/dice6.png"] ;

document.querySelectorAll("img")[0].setAttribute("src" ,images[randomNumber1] );

document.querySelectorAll("img")[1].setAttribute("src" ,images[randomNumber2] );
// changing the title based on the winner ..!!!
if( randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML = " PLAYER 2 WINS..🚩" ;
}
else if(randomNumber2 === randomNumber1)
{

    document.querySelector("h1").innerHTML = "MATCH DRAW";
}
else
{
    document.querySelector("h1").innerHTML = "🚩..PLAYER 1 WINS" ;
}