// 1.Display to console
function displayMessage() {
    console.log("Skill Test - Output Functions");
}

displayMessage();

// 2.Display City Name
function outputCityName(inCityName) {
    console.log("You live in " + inCityName);
}

outputCityName("Ames");
outputCityName("Altoona");

// 3.Return a Value
function formatOrder(productName, productQuantity) {
    let order = "You have ordered " + productQuantity + " copies of " + productName + ".";
    return order;
}

console.log(formatOrder("Red Stapler", 7));

// 4. Run functions with a button click
document.getElementById("wdmBtn").onclick = function() {
    outputCityName('West Des Moines');
}
document.getElementById("bondurantBtn").onclick = function() {
    outputCityName('Bondurant');
}