$(document).ready(function() {
  $("button#invert").click(function() {
    $("body").removeClass();
    $("body").addClass("inverted-background");
  });
  $("button#inverts").click(function() {
    $("body").removeClass();
    $("body").addClass("inverted-again");
  });
  $(".click-hidden").click(function() {
    $("#box-hidden").toggle();
    $("#box-show").toggle();
  });
});
