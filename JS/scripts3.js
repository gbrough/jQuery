$(document).ready(function() {
  $(".clickable").click(function() {
    $("#castles-showing").slideToggle();
    $("#castles-hidden").slideToggle();
  });
});