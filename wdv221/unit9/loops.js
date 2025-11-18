// 1. Creating a While loop to print numbers 0 to 4.

function printWhileLoop() {
    let number = 0;

    while (number < 5) {
        document.getElementById("output1").innerHTML += number + "<br />";
        number ++;
    }
}
printWhileLoop();

// 2. Creating a For loop to print numbers 4 to 0.

function printForLoop() {
    
    for (let i = 4; i >= 0; i --) {
        document.getElementById("output2").innerHTML += i + "<br />";
    }
}
printForLoop();

// 3. Creating a loop to print numbers 1 to 5 in paragraph elements.

function printParagraphs() {
    for (let i = 1; i <= 5; i++) {
        let p = document.createElement("p");
        p.textContent = i;
        document.getElementById("output3").appendChild(p);

    }
}
printParagraphs();

// 4. Creating a loop to print numbers (5,10,15,20,25...) until one is greater than 40.

function printUntil40() {
    let number = 5;

    while (number <= 40) {
        document.getElementById("output4").innerHTML += number + "<br />";
        number += 5;
    }
}
printUntil40();

// 5. Creating a loop to print 6 options in a drop-down menu.

function populateDropdown() {
    let select = document.getElementById("select");

    for (let i = 1; i <= 6; i++) {
        let option = document.createElement("option");
        option.value = "Option " + i;
        option.textContent = "Option " + i;
        select.add(option);
    }
}
populateDropdown();