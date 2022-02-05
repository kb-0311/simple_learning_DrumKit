//Detecting button presses
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}



//Detecting keyboard buttons 

document.addEventListener("keydown",function(Event)
{
    music(Event.key);
    buttonAnimation(Event.key);
});

//Handling Clicks

function handleClick(){
    var drumBUTTON=this.innerHTML;

    music(drumBUTTON);
    buttonAnimation(drumBUTTON);



    
    

}


//Making sound whenever a keyboard button is pressed ot button is clicked 

function music(key)
{
    switch (key) {
        case "w":
        var tom_1=new Audio("sounds/tom-1.mp3");
        tom_1.play();

        
        break;
        case "a":
        var tom_2=new Audio("sounds/tom-2.mp3");
        tom_2.play();

        
        break;
        case "s":
        var tom_3=new Audio("sounds/tom-3.mp3");
        tom_3.play();

        
        break;
        case "d":
        var tom_4=new Audio("sounds/tom-4.mp3");
        tom_4.play();

        
        break;
        case "j":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();

        
        break;
        case "k":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();

        
        break;
        case "l":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();

        
        break;


    default:
        break;
}

}


function buttonAnimation(drumBUTTON)
{
    var activeBUTTON=document.querySelector("."+drumBUTTON);
    
    activeBUTTON.classList.add("pressed");

    setTimeout(function(){
        activeBUTTON.classList.remove("pressed");
    }, 100);

}