const shape = document.getElementById("shape");
const circleinputs = document.getElementById("circleinputs");
const rectangleinputs = document.getElementById("rectangleinputs");
const triangleinputs = document.getElementById("triangleinputs");
const calculatebtn = document.getElementById("calculatebtn");
const result = document.getElementById("result");

shape.addEventListener("change", function() {

    circleinputs.classList.add("hidden")
    rectangleinputs.classList.add("hidden")
    triangleinputs.classList.add("hidden")

    if (shape.value === "circle"){
        circleinputs.classList.remove("hidden")
    }
    else if (shape.value === "rectangle"){
        rectangleinputs.classList.remove("hidden")
    }
    else if (shape.value === "triangle"){
        triangleinputs.classList.remove("hidden")
    }
});

calculatebtn.addEventListener ("click", function () {

    if (shape.value === "circle"){
        const raduis = Number(document.getElementById("radius") .value);
        const area = Math.PI * raduis * raduis;
        result.textContent = `Area of circle = ${area.toFixed(2)} square units`;

    } else if (shape.value === "rectangle"){
        const length = Number(document.getElementById("length").value);
        const width = Number(document.getElementById("width").value);
        const area = length * width;
        result.textContent = `Area of a rectangle = ${area.toFixed(2)} square units`;

    }

});