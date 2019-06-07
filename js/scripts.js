$(document).ready(function() {
  $("#survey").submit(function(event) {
    var userAge = parseInt($("#age").val());
    var userExperience = parseInt($("#experience").val());
    var userEnjoy = $("#enjoy").val();
    var userColor = $("#color").val();
    var userSemicolons = $("#semicolons").val();
    event.preventDefault();
  })
});
