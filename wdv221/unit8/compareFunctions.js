//1. Name Comparison Functionality

// This event listener waits for the DOM to fully load before attaching event handlers
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("nameForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        compareNames();
    });
    form.addEventListener("reset", (e) => {
        const out = document.getElementById("nameComparisonResult");
        if (out) out.innerHTML = "";
    });
});
// This function compares two names and updates the result in the HTML
function compareNames() {
    var name1 = document.getElementById("name1").value.trim();
    var name2 = document.getElementById("name2").value.trim();
    var result = document.getElementById("nameComparisonResult");

    if (name1 === "" || name2 === "") {
        result.innerHTML = "Please enter both names.";
    }
    else if (name1.toLowerCase() === name2.toLowerCase()) {
        result.innerHTML = "Same";
    }
    else {
        result.innerHTML = "Different";
    }
}

//2. Number Comparison Functionality
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("numberForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        compareNumbers();
    });
    form.addEventListener("reset", (e) => {
        const out = document.getElementById("numberComparisonResult");
        if (out) out.innerHTML = "";
    });
});
// This function compares two numbers and updates the result in the HTML
function compareNumbers() {
    var num1 = document.getElementById("num1").value.trim();
    var num2 = document.getElementById("num2").value.trim();
    var result = document.getElementById("numbersComparisonResult");

    if (num1 === "" || num2 === "") {
        result.innerHTML = "Please enter both numbers.";
        return;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Please enter valid numbers.";
    }
    else if (num1 === num2) {
        result.innerHTML = "Equal";
    }
    else if (num1 > num2){
        result.innerHTML = num1;
    }
    else {
        result.innerHTML = num2;
    }
}