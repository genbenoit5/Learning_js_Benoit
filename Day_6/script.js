const shape = document.getElementById("shape");
const circleinputs = document.getElementById("circleinputs");
const rectangleinputs = document.getElementById("rectangleinputs");
const triangleinputs = document.getElementById("triangleinputs");
const calculatebtn = document.getElementById("calculatebtn");
const result = document.getElementById("result");

shape.addEventListener("change", function()){

    circleinputs.classList.add("hidden")
    rectangleinputs.classList.add("hidden")
    triangleinputs.classList.add("hidden")
}