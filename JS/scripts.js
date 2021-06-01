$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".clickable2").click(function() {
    $("#dog-hidden").slideToggle();
    $("#dog-showing").slideToggle();
  });

});
