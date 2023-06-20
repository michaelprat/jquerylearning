alert("Javascript linked");

$("body").css("background-color","white");
$("h1").css("color","red");
$("h1").css("color","blue");    


//after,before,append,prepend
$("h1").before("<h2>This text added by before</h2>");
$("h1").after("<h2>This text added by after</h2>");
$("h1").prepend("Added by prepend ");
$("h1").append(" <em>Jquery added by append</em>");

//prebuilt animation in jquery



setTimeout(function()
{
 $("h2").remove();//remove all h2 
 $("h1").text("Hello World This is Jquery");
},3000);


var ul=$("li");
var ul2=$("ul>li");   
$("li").css("list-style","none");
console.log(ul[0].innerHTML);

console.log(ul2[0].innerHTML);


$("h1").addClass("header margin50");
$("h1").removeClass("header");

$("button:eq(0)").click(function()
{ 
    
    var color=$("body").css("background-color");
    console.log(color);
    if(color=="rgb(255, 255, 255)")
    {
             
        $("body").css("background-color","purple");
        $("button:eq(0)").text("Change background color to white")
      
    }
    else{
    $("body").css("background-color","white");
    $("button:eq(0)").text("Change background color to purple")
    }

})
$("button:eq(1)").on("click",function()
{
    $("li").slideToggle();
   

});

$("button:eq(2)").on("click",function()
{
    $("h1").fadeToggle(); 
});
$(document).keypress(function(event)
{
$("h1").text("You Pressed "+event.key+" button");
});

$("h1").on("mouseover",function()
{
    var color=$("h1").css("color");
    console.log(color);
if(color=="rgb(0, 0, 255)")
{
$("h1").css("color","red");
}
else
{

    $("h1").css("color","blue");
}
});