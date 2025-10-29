//Problem 1 and 2: Getting and displaying values 1 & 2:

function getValue1() {
    const value1 = parseFloat(document.getElementById("value1").value);
    return value1;
}

function getValue2() {
    const value2 = parseFloat(document.getElementById("value2").value);
    return value2;
}

function displayValue1(e) {
    e.preventDefault();
    const value1 = document.getElementById("value1").value;
    document.getElementById("value1Box").value = value1;
}

function displayValue2(e) {
    e.preventDefault();
    const value2 = document.getElementById("value2").value;
    document.getElementById("value2Box").value = value2;
}

//Problem 3, 4, 5, and 6: Multiplying, Adding, Incrementing, and Random Number:
function multiplyingValues(e) {
    e.preventDefault();
    const product = getValue1() * getValue2();
    document.getElementById("multiplyResult").textContent = product;
}

function addingValues(e) {
    e.preventDefault();
    const addition = getValue1() + getValue2();
    document.getElementById("addResult").textContent = addition;
}

let count = 0;
function incrementCount(e) {
    e.preventDefault();
    count++;
    document.getElementById("incrementResult").textContent = count;
}

function randomNumber(e) {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * 10) + 1;
    document.getElementById("randomResult").textContent = randomNum;
}

//Reset Button
function resetForm() {
    count = 0;
    document.getElementById("value1Box").value = "";
    document.getElementById("value2Box").value = "";
    document.getElementById("multiplyResult").textContent = "";
    document.getElementById("addResult").textContent = "";
    document.getElementById("incrementResult").textContent = "";
    document.getElementById("randomResult").textContent = "";
}


document.getElementById("btnValue1").addEventListener("click", displayValue1);
document.getElementById("btnValue2").addEventListener("click", displayValue2);
document.getElementById("multiplyBtn").addEventListener("click", multiplyingValues);
document.getElementById("addBtn").addEventListener("click", addingValues);
document.getElementById("incrementBtn").addEventListener("click", incrementCount);
document.getElementById("randomBtn").addEventListener("click", randomNumber);
document.getElementById("resetBtn").addEventListener("click", resetForm);