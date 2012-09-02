$(document).ready(function() {
  $(".nav-collapse .nav > li > a").click(function(e) {
    // id is used because the footer is also a .navbar
    $(".footer .row-fluid").show();
  });
});

function showAbout() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#about").show();
  $(".navbar .nav > li.about").addClass("active");
  document.title = "About - David Grilli";
}

function showContact() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#contact").show();
  $(".navbar .nav > li.contact").addClass("active");
  document.title = "Contact - David Grilli";
}

function showDeveloper() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#developer").show();
  $(".navbar .nav > li.developer").addClass("active");
  document.title = "Developer - David Grilli";
}

function showExperience() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#experience").show();
  $(".navbar .nav > li.experience").addClass("active");
  document.title = "Experience - David Grilli";
}
