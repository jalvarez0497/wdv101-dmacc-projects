const outputParagraphTag = document.getElementById("output");
outputParagraphTag.innerHTML = "This was dynamically inserted at runtime";

const makeGreeting = (name, programmingLanguage) => {
    return `<p>Hello, ${name}! I like to write ${programmingLanguage} code.</p>`;
}

const toggleGreeting = () => {
    const outputParagraphTag = document.getElementById("output");
    if(outputParagraphTag.innerHTML !== "") {
        outputParagraphTag.innerHTML = "";
        return;
    }
    const nameInput = document.getElementById("name");
    const programmingLanguageInput = document.getElementById("programmingLanguage");
    const nameInputValue = nameInput.value;
    const programmingLanguageInputValue = programmingLanguageInput.value;
    const greeting = makeGreeting(nameInputValue, programmingLanguageInputValue);
    const currentContent = outputParagraphTag.innerHTML;
    outputParagraphTag.innerHTML = `${currentContent}  ${greeting}`;

}