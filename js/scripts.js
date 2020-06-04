$(document).ready(function() {
  $("div#snakeHead").click(function() {
    if (marker("div#snake")) {
      $("div#snake").fadeOut();
      $("div#snake").removeClass("shown")
    } else {
      $("div#turtle").hide();
      $("div#spider").hide();
      $("div#snake").fadeIn();
      $("div#snake").addClass("shown")
    };
  });

  $("div#spiderHead").click(function() {
    if (marker("div#spider")) {
      $("div#spider").fadeOut();
      $("div#spider").removeClass("shown");
    } else {
      $("div#turtle").hide();
      $("div#snake").hide();
      $("div#spider").fadeIn();
      $("div#spider").addClass("shown");
    };
  });

  $("div#turtleHead").click(function() {
    if (marker("div#turtle")) {
      $("div#turtle").fadeOut();
      $("div#turtle").removeClass("shown");
    } else {
      $("div#spider").hide();
      $("div#snake").hide();
      $("div#turtle").fadeIn();
      $("div#turtle").addClass("shown");
    };
  });
})

function marker(clsName) {
  if ($(clsName).attr('class').slice(-5) === 'shown') {
    return true;
  } else {
    return false;
  };
}