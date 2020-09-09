$(function(){
    //this code runs after page is fully loaded
    $("#go").on("click", function(event){
        event.preventDefault();
        $("#bananas").text($("#lname").val() + " " + $("#fname").val());
        $("#bananas").removeClass("d-none");
        return false;
    })

    });