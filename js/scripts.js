$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    //form variables
    var userName = $("#name").val();
    var userAge = parseInt($("#age").val());
    var userExperience = parseInt($("#experience").val());
    var userEnjoy = $("#enjoy").val();
    var userColor = $("#color").val();
    var userSemicolons = $("#semicolons").val();

    //score variables
    var javaScriptScore = 0;
    var rubyScore = 0;
    var pythonScore = 0;

    // structured logic
    if(userAge <= 21) {
      rubyScore += 10;
    } else if(userAge <= 34) {
      javaScriptScore += 10;
    } else {
      pythonScore += 10;
    }

    if(userExperience <= 3) {
      javaScriptScore += 15;
    } else if(experience <= 12) {
      pythonScore += 15;
    } else {
      rubyScore += 15;
    }

    if(userEnjoy === "Web Design") {
      javaScriptScore += 20;
      rubyScore += 20;
    } else {
      pythonScore += 20;
    }

    if(userColor === "Yellow") {
      javaScriptScore += 10;
    } else if(userColor === "Red") {
      rubyScore += 10;
    } else {
      pythonScore += 10;
    }

    if(userSemicolons === "Yes") {
      javaScriptScore += 15;
    } else if (userSemicolons === "No") {
      pythonScore += 15;
    } else {
      rubyScore += 15;
    }

    if(javaScriptScore > rubyScore && javaScriptScore > pythonScore) {
      $(".default, .ruby, .python").hide();
      $(".panel").removeClass("panel-info panel-danger");
      $(".panel").addClass("panel-warning");
      $(".javaScript").slideDown();
    } else if(rubyScore > javaScriptScore && rubyScore > pythonScore) {
      $(".default, .javaScript, .python").hide();
      $(".panel").removeClass("panel-info panel-warning");
      $(".panel").addClass("panel-danger");
      $(".ruby").slideDown();
    } else {
      $(".default, .javaScript, .ruby").hide();
      $(".panel").removeClass("panel-warning panel-danger");
      $(".panel").addClass("panel-info");
      $(".python").slideDown();
    }

    $(".nameOutput").text(userName);

    console.log("JavaScript = " + javaScriptScore, "Ruby = " + rubyScore, "Python = " + pythonScore);
  });
});
