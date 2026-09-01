const countdisplay = document.getElementById("count");
const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");

let count = 0;

decreasebtn.onclick = function(){
    count--;
    countdisplay.textContent = count;
}

increasebtn.onclick = function(){
    count++;
    countdisplay.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countdisplay.textContent = count;
}