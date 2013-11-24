$(function() {
  $(".brand").hover(
    function() {
      $(".brand span.id").removeClass("cool-red");
      $(".brand span.d").addClass("cool-red");
      $(".brand span.g").addClass("cool-red");
    },
    function() {
      $(".brand span.id").addClass("cool-red");
      $(".brand span.d").removeClass("cool-red");
      $(".brand span.g").removeClass("cool-red");
    }
  );
});

$(document).keypress(function(e) {
  switch (e.which) {
    case 65:
    case 97:
      window.location = "/";
    break;
    case 66:
    case 98:
      window.open("http://blog.djgrill.com/");
    break;
    case 67:
    case 99:
      window.location = "/contact";
    break;
    case 68:
    case 100:
      window.location = "/developer";
    break;
    case 69:
    case 101:
      window.location = "/experience";
    break;
    case 70:
    case 102:
      window.open("http://facebook.com/djGrill/");
    break;
    case 71:
    case 103:
      window.open("https://github.com/djGrill/");
    break;
  }
});
