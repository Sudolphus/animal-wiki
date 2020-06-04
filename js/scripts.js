$(document).ready(function() {
  $("div#snakeHead").click(function() {
    $("div#turtle").hide();
    $("div#spider").hide();
    $("div#snake").fadeIn();
  });

  $("div#spiderHead").click(function() {
    $("div#turtle").hide();
    $("div#snake").hide();
    $("div#spider").fadeIn();
  });

  $("div#turtleHead").click(function() {
    $("div#spider").hide();
    $("div#snake").hide();
    $("div#turtle").fadeIn();
  });
})