let myTimer;
let index = 0;
let mode = "Blank";
let time = 250;
window.onload = function(){
    "use strict";
    // put all of your code here
    let start = document.getElementById("start");
    start.onclick = startButtonClicked;

    let stop = document.getElementById("stop");
    stop.onclick = stopAnimation;

    let change = document.getElementById("animation");
    change.onchange = changeAnimation;

    let size = document.getElementById("fontsize");
    size.onchange = fontChange;

    let turbo = document.getElementById("turbo");
    turbo.onchange = changeSpeed;
}

function startButtonClicked(){
    if(mode != "Blank"){
        myTimer = setInterval(playAnimation, time, ANIMATIONS[mode]);
        document.getElementById("start").disabled = "disabled";
        document.getElementById("stop").removeAttribute("disabled");
    }
}

function changeAnimation(){
    mode = document.getElementById("animation").value;
    document.getElementById("text-area").value = "";
    index = 0;
    clearInterval(myTimer);
    startButtonClicked();
}
function playAnimation(ani){
    let arr = ani.split("=====\n");
    document.getElementById("text-area").value = arr[index];
    if (index > arr.length-2) {
        index = 0;
    }
    else{
        index++;
    }
}

function stopAnimation(){
    clearInterval(myTimer);
    document.getElementById("stop").disabled = "disabled";
    document.getElementById("start").removeAttribute("disabled");
}

function fontChange(){
    document.getElementById("text-area").className = document.getElementById("fontsize").value;
}

function changeSpeed(){
    time = document.getElementById("turbo").checked ? 50 : 250;
    clearInterval(myTimer);
    startButtonClicked();
}

