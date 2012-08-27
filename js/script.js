function getcss(cssfile) {
  loadcss = document.createElement("link");
  loadcss.setAttribute("rel", "stylesheet");
  loadcss.setAttribute("type", "text/css");
  loadcss.setAttribute("href", cssfile);
  document.getElementsByTagName("head")[0].appendChild(loadcss);
}

if (screen.width <= "800")
  getcss("css/800x600.css");
else if (screen.width > "800" && screen.width <= "1024")
  getcss("css/1024x768.css");
else
  getcss("css/1280x1024.css");

function showAbout() {
  $(".content").hide();
  $(".item").removeClass("selected");
  $("#about").show();
  $(".item.about").addClass("selected");
  document.title = "About - David Grilli";
}

function showContact() {
  $(".content").hide();
  $(".item").removeClass("selected");
  $("#contact").show();
  $(".item.contact").addClass("selected");
  document.title = "Contact - David Grilli";
}

function showDeveloper() {
  $(".content").hide();
  $(".item").removeClass("selected");
  $("#developer").show();
  $(".item.developer").addClass("selected");
  document.title = "Developer - David Grilli";
}

function showExperience() {
  $(".content").hide();
  $(".item").removeClass("selected");
  $("#experience").show();
  $(".item.experience").addClass("selected");
  document.title = "Experience - David Grilli";
}
