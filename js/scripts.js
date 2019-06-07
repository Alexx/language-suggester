var hideTheme = function() {
  $(".default, .javaScript, .ruby, .python").hide();
  $(".panel").removeClass("panel-info panel-warning panel-danger");
  $(".jumbotron").removeClass("jumbotron-javaScript jumbotron-ruby jumbotron-python");
};

var javaScriptTheme = function() {
  $(".panel").addClass("panel-warning");
  $(".jumbotron").addClass("jumbotron-javaScript");
  $(".javaScript").slideDown();
};

var rubyTheme = function() {
  $(".panel").addClass("panel-danger");
  $(".jumbotron").addClass("jumbotron-ruby");
  $(".ruby").slideDown();
};

var pythonTheme = function() {
  $(".panel").addClass("panel-info");
  $(".jumbotron").addClass("jumbotron-python");
  $(".python").slideDown();
};

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

    //structured logic
    if(userAge <= 21) {
      rubyScore += 10;
    } else if(userAge <= 34) {
      javaScriptScore += 10;
    } else {
      pythonScore += 10;
    }

    if(userExperience <= 3) {
      javaScriptScore += 15;
    } else if(userExperience <= 12) {
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

    //pick theme based on theme score
    if(javaScriptScore > rubyScore && javaScriptScore > pythonScore) {
      hideTheme();
      javaScriptTheme();
    } else if(rubyScore > javaScriptScore && rubyScore > pythonScore) {
      hideTheme();
      rubyTheme();
    } else {
      hideTheme();
      pythonTheme();
    }

    //output user's name to page
    $(".nameOutput").text(userName);
  });
});
