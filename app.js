let input = document.querySelector("input");
let button = document.querySelectorAll("button");
let arraybtn = Array.from(button);
let string ="";
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
let newaudio = new Audio("audio.mp3");

arraybtn.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
    if(e.target.innerHTML === "DEL"){
        string = string.substring(0,string.length-1)
        input.value = string ;
    }else if(e.target.innerHTML === "AC"){
        string ="";
        input.value = string ;
    }
    else if(e.target.innerHTML === "="){
        string = eval(string);
        input.value = string ;
        setTimeout(()=>{
        newaudio.play();
        }, 1);
    }else{
        string += e.target.innerHTML;
        input.value = string ;
    }  
    audio.play()

    })
})

