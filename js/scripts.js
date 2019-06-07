$(document).ready(function() {
  $("#survey").submit(function(event) {
    var userAge = parseInt($("#age").val());
    var userExperience = parseInt($("#experience").val());
    var userEnjoy = $("#enjoy").val();
    var userColor = $("#color").val();
    var userSemicolons = $("#semicolons").val();
    event.preventDefault();

    var javaScriptScore = 0;
    var rubyScore = 0;
    var pythonScore = 0;

    if(userAge <= 21) {
      rubyScore += 10;
    } else if(userAge <= 34) {
      javaScriptScore += 10;
    } else {
      pythonScore += 10;
    }

    if(userExperience <= 3) {
      javaScriptScore+= 15;
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
    } else if (semicolons === "No") {
      pythonScore += 15;
    } else {
      rubyScore += 15;
    }

    if(javaScriptScore > rubyScore && javaScriptScore > pythonScore) {
      $()
      $("#javaScript").show();
    }

    console.log(javaScriptScore, rubyScore, pythonScore);
  });
});
