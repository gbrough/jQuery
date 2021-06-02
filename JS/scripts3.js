$(document).ready(function() {
  $(".clickable").click(function() {
    $("#cast-showing").toggle();
    $("#cast-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#beach-showing").toggle();
    $("#beach-hidden").toggle();
  });
});