$("#btnSubmit").on("click", function() {

    var result = $("input[type='checkbox']:checked");
    var divResult = $("#result");

    if (result.length > 0) {
        divResult.html(result.length + " checkboxes checked");
    }
    else {
        $("#result").html("No radio button checked <br>");

        result.each(function() {
            $(this).val() + "<br>";
        });
    }

});