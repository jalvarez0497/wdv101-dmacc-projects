const form = document.getElementById("demoForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    const nameInput = document.getElementById("custName");
    console.log(nameInput.value);

    const selectedRadio = document.querySelector('input[name="experience"]:checked');
    console.log(selectedRadio.value);

    const productSelect = document.querySelector("#productSelect");
    console.log("Product selected value: ", productSelect.value);

    if (productSelect.selectedIndex > 0) {
        console.log("Product text:", productSelect.options[productSelect.selectedIndex].text);
    }
});