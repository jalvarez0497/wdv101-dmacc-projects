// My states array
let states = [
    "Iowa",
    "Illinois",
    "Missouri",
    "Wisconsin"
]
// My sales tax array
let stateSalesTax = [
    "6%",
    "11%",
    "7%",
    "8%"
]
// Populating the dropdown menu with states on page load
document.addEventListener("DOMContentLoaded", function (){
    let select = document.getElementById("selectState");

    for (let i = 0; i < states.length; i++) {
        let option = document.createElement("option");
        option.text = states[i];
        option.value = states[i];
        select.add(option);
    }

    select.onchange = salesTaxLookup;
});
// Function to look up and display the sales tax rate based on selected state
function salesTaxLookup() {
    let selectedState = document.getElementById("selectState").value;
    let taxRate = document.getElementById("displayTaxRate");

    if (selectedState === "Please select a state") {
        taxRate.textContent = "";
        return;
    }
    
    for (let i = 0; i < states.length; i++) {
        if (states[i] === selectedState) {
            taxRate.textContent = stateSalesTax[i];
            break;
        }
    }
}
// Reset button functionality to clear the output
document.getElementById("button2").onclick = function () {
    document.getElementById("displayTaxRate").textContent = "";
};

