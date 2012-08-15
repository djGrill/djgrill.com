function getcss(cssfile) {
  loadcss = document.createElement("link");
  loadcss.setAttribute("rel", "stylesheet");
  loadcss.setAttribute("type", "text/css");
  loadcss.setAttribute("href", cssfile);
  document.getElementsByTagName("head")[0].appendChild(loadcss);
}

if (screen.width <= "800")
  getcss("../css/800x600.css");
else if (screen.width > "800" && screen.width <= "1024")
  getcss("../ccs/1024x768.css");
else
  getcss("../ccs/1280x1024.css");
