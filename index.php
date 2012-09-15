<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" itemscope itemtype="http://schema.org/Person">

<head>
  <title>About - David Grilli</title>
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
  <meta name="name" content="David Grilli" />
  <meta name="description" content="Web Developer from Ciudad Guayana, Venezuela; currently living in Enschede, Netherlands." />
  <meta name="keywords" content="david,grilli,geek,fun,web,software,developer,venezuela,guayana,ucab,enschede,netherlands,computer,engineering,google,gtug,gdg,gamer,videogame,djgrill,freelance,freelancer,php" />
  <meta name="robots" content="NOODP,NOYDIR" />
  <meta itemprop="image" content="http://djgrill.com/img/favicon100x100.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/misc.css" />
  <link rel="stylesheet" href="css/bootstrap-responsive.min.css" />
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Maven+Pro:regular,bold&amp;v2" />
  <link rel="icon" type="image/png" href="img/favicon.png" />
  <link rel="shortcut icon" type="image/png" href="img/favicon.png" />
  <script type="text/javascript" src="js/jquery-1.8.0.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-34524020-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
    })();
  </script>
</head>

<body>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="container">
        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>

        <a class="brand" onclick="showAbout()"><span class="d">d</span>av<span class="cool-red id">id</span><span class="g">g</span>rilli</a>

        <div id="navmenu" class="nav-collapse">
          <ul class="nav">
            <li class="active about"><a onclick="showAbout()" data-toggle="collapse" data-target=".nav-collapse"><span id="nav1"></span></a></li>
            <li><a class="external" href="http://blog.djgrill.com/" target="_blank" data-toggle="collapse" data-target=".nav-collapse"><span id="nav2"></span><span class="icon visible-desktop"></span><span class="icon hidden-desktop"></span></a></li>
            <li class="contact"><a onclick="showContact()" data-toggle="collapse" data-target=".nav-collapse"><span id="nav3"></span></a></li>
            <li class="developer"><a onclick="showDeveloper()" data-toggle="collapse" data-target=".nav-collapse"><span id="nav4"></span></a></li>
            <li class="experience"><a onclick="showExperience()" data-toggle="collapse" data-target=".nav-collapse"><span id="nav5"></span></a></li>
            <li><a class="external" href="http://facebook.com/djGrill/" target="_blank" data-toggle="collapse" data-target=".nav-collapse"><span id="nav6"></span><span class="icon visible-desktop"></span><span class="icon hidden-desktop"></span></a></li>
            <li><a class="external" href="https://github.com/djGrill/" target="_blank" data-toggle="collapse" data-target=".nav-collapse"><span id="nav7"></span><span class="icon visible-desktop"></span><span class="icon hidden-desktop"></span></a></li>
          </ul>

          <div id="lan" class="pull-right">
            <span id="lan-en" class="active">en</span>/<span id="lan-es">es</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="about" class="row-fluid">
    <div class="span1" style="min-height: 0px; height: 0px;">&nbsp;</div>
    <div id="text1" class="span6"></div>

    <div class="social-buttons span5">
      <a href="https://twitter.com/djGrill" class="twitter-follow-button" data-show-count="false" data-lang="en"></a>
      <script type="text/javascript">!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
      <span></span>
      <iframe src="https://www.facebook.com/plugins/like.php?href=http://djgrill.com&send=false&layout=button_count" scrolling="no" frameborder="0" style="border:none; width:73px; height:21px"></iframe>
      <span></span>
      <g:plusone size="medium"></g:plusone>
    </div>
  </div>

  <div id="contact" class="row-fluid">
    <div class="span1" style="min-height: 0px; height: 0px;">&nbsp;</div>
    <div id="text2" class="span6"></div>
    <div id="text3" class="span5"></div>
  </div>

  <div id="developer" class="row-fluid">
    <div class="span1" style="min-height: 0px; height: 0px;">&nbsp;</div>
    <div id="text4" class="span6"></div>
    <div id="text5" class="span5"></div>
  </div>

  <div id="experience" class="row-fluid">
    <div class="span1" style="min-height: 0px; height: 0px;">&nbsp;</div>
    <div id="text6" class="span6"></div>
    <div id="text7" class="span5"></div>
  </div>

  <div class="navbar navbar-fixed-bottom footer">
    <div class="lnsep"></div>

    <div class="row-fluid">
      <div id="text8" class="span12"></div>
    </div>

    <div class="row-fluid">
      <div class="span12 social">
        <a href="http://twitter.com/djGrill/" target="_blank"><span class="twitter"></span></a>
        <a href="https://github.com/djGrill/" target="_blank"><span class="github"></span></a>
        <a href="http://linkedin.com/in/djGrill/" target="_blank"><span class="linkedin"></span></a>
      </div>
    </div>
  </div>

  <script type="text/javascript">
    (function() {
      var po = document.createElement("script"); po.type = "text/javascript"; po.async = true;
      po.src = "https://apis.google.com/js/plusone.js";
      var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);
    })();
  </script>
</body>
</html>
