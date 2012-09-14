$(document).ready(function() {
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
      showAbout();
    break;
    case 66:
    case 98:
      window.open("http://blog.djgrill.com/");
    break;
    case 67:
    case 99:
      showContact();
    break;
    case 68:
    case 100:
      showDeveloper();
    break;
    case 69:
    case 101:
      showExperience();
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

function restoreFooter() {
  // id is used because the footer is also a .navbar
  $(".footer .row-fluid").show();
}

function showAbout() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#about").show();
  $(".navbar .nav > li.about").addClass("active");
  restoreFooter();
  document.title = "About - David Grilli";
}

function showContact() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#contact").show();
  $(".navbar .nav > li.contact").addClass("active");
  restoreFooter();
  document.title = "Contact - David Grilli";
}

function showDeveloper() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#developer").show();
  $(".navbar .nav > li.developer").addClass("active");
  restoreFooter();
  document.title = "Developer - David Grilli";
}

function showExperience() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#experience").show();
  $(".navbar .nav > li.experience").addClass("active");
  restoreFooter();
  document.title = "Experience - David Grilli";
}
