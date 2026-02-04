
$(document).ready(function() {
    $("#addBtn").on("click", function(event) {
        event.preventDefault();

        let value1 = parseFloat($("#inValue1").val());
        let value2 = parseFloat($("#inValue2").val());

        if (isNaN(value1) || isNaN(value2)) {
            alert("Please provide a valid number in both input fields.");
            return;
        }

        let result = value1 + value2;

        $("#resultsDisplay").text(result);
    });

    $("#button").on("click", function() {
        $("#resultsDisplay").text("");

    });
});
