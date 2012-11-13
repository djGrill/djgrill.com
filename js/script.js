// global variable used for managing the pages' titles
json_data = "";

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

  $("#lan-es").click(function() {
    $.ajax({
      url: "lan/es.json"
    }).done(function(data) {
      $("#lan-es").addClass("active");
      $("#lan-en").removeClass("active");
      json_data = data;
      loadContent(data);
      showAbout();
    });
  });

  $("#lan-en").click(function() {
    $.ajax({
      url: "lan/en.json"
    }).done(function(data) {
      $("#lan-en").addClass("active");
      $("#lan-es").removeClass("active");
      json_data = data;
      loadContent(data);
      showAbout();
    });
  });
});

function loadContent(data) {
  $("title").html(data.title1);

  $("#nav1").html(data.nav1);
  $("#nav2").html(data.nav2);
  $("#nav3").html(data.nav3);
  $("#nav4").html(data.nav4);
  $("#nav5").html(data.nav5);
  $("#nav6").html(data.nav6);
  $("#nav7").html(data.nav7);

  $("#text1").html(data.text1);
  $("#text2").html(data.text2);
  $("#text3").html(data.text3);
  $("#text4").html(data.text4);
  $("#text5").html(data.text5);
  $("#text6").html(data.text6);
  $("#text7").html(data.text7);
  $("#text8").html(data.text8);
}

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
  $("title").html(json_data.title1);
}

function showContact() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#contact").show();
  $(".navbar .nav > li.contact").addClass("active");
  restoreFooter();
  $("title").html(json_data.title2);
}

function showDeveloper() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#developer").show();
  $(".navbar .nav > li.developer").addClass("active");
  restoreFooter();
  $("title").html(json_data.title3);
}

function showExperience() {
  $(".row-fluid").hide();
  $(".navbar .nav > li").removeClass("active");
  $("#experience").show();
  $(".navbar .nav > li.experience").addClass("active");
  restoreFooter();
  $("title").html(json_data.title4);
}
