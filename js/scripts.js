$(document).ready(function() {
  $("button#invert").click(function() {
    $("body").removeClass();
    $("body").addClass("inverted-background");
  });
  $("button#inverts").click(function() {
    $("body").removeClass();
    $("body").addClass("inverted-again");
  });
  $("button#box").click(function() {
    $("body").removeClass();
    $("body").addClass("box-it-up");
  });
});
