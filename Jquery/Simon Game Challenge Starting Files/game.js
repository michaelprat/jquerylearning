
let buttonSequence=["green","red","yellow","blue"];
let nextlevel=0;
let stage=0;
let gamePattern=[];
let userClickPattern=[];
var ingame=false;

function gamestart()
{
    nextlevel=randomnumber();
    animatepress(buttonSequence[nextlevel]);
    gamePattern.push(buttonSequence[nextlevel]);
    ++stage;
    $("#level-title").text("Level "+stage);
    
}





function randomnumber()
{
   var number=Math.trunc(Math.random()*4);
   return number;

}
function clearPattern()
{
    userClickPattern=[];
    stage=0;
    gamePattern=[];
    console.log();
}

$(".btn").on("click",function(event)
{   console.log(event.target.id);
    color=event.target.id;
    
    animatepress(color);
    if(ingame)
    {
    userClickPattern.push(color);
    checkanswer();
    }
    console.log(userClickPattern);
});

$(document).on("keypress",function(event)
{
    if(!ingame){
    gamestart();
    ingame=true;
    }


})


function checkanswer()
{
    var gameover=false;
    for(let i=0;i<userClickPattern.length;i++)
    {
        if(userClickPattern[i]!=gamePattern[i])
        {
             gameover=true;
        }
    }
    if(gameover==true)
    {
      clearPattern();
      var wrongsound=new Audio("./sounds/wrong.mp3");
      wrongsound.play();
      $("body").css("background-color","red");
      setTimeout(function()
      {
        
      $("body").css("background-color","#011F3F");  
      },500);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      ingame=false;

    }
    else
    {

        if(userClickPattern.length==stage)
        { 

            userClickPattern=[];
           setTimeout(function()
           {
            gamestart();
           },500);
        }
    }

}





function animatepress(color)
{

    switch(color)
    {
    case "red":
        var  soundred=new Audio("./sounds/red.mp3");
    soundred.play();
    
    $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //make flash animation
    break;
    case "blue":
    var  soundblue=new Audio("./sounds/blue.mp3");
    
    soundblue.play();
    $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    break;
    case "green":
    var  soundgreen=new Audio("./sounds/green.mp3");
    soundgreen.play();
    
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    break;
    case "yellow":
        var  soundyellow=new Audio("./sounds/yellow.mp3");
        soundyellow.play();
            
    $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    break;
    default:break;
    }

}