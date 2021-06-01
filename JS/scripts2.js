$(document).ready(function() {
  $(".clickable").click(function() {
    $("#sandcastles-showing").slideToggle();
    $("#sandcastles-hidden").slideToggle();
  });
  $(".clickable2").click(function() {
    $("#beaches-hidden").slideToggle();
    $("#beaches-showing").slideToggle();
  });

});
