const countdisplay = document.getElementById("count");
const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");

let count = 0;

decreasebtn.onclick = function(){
    count--;
    countdisplay.textContent = count;
     updatecolor()
}

increasebtn.onclick = function(){
    count++;
    countdisplay.textContent = count;
     updatecolor()
}

resetbtn.onclick = function(){
    count = 0;
    countdisplay.textContent = count;
     updatecolor()
}

function updatecolor(){
    if(count < 0){
        countdisplay.style.color = "red"
    }
    else if(count > 0){
        countdisplay.style.color = "green"
    }
    else{
        countdisplay.style.color = "black"
    }
}