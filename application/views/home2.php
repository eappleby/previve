
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Template &middot; Bootstrap</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="<?php echo site_url("assets/css/bootstrap.css"); ?>" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 20px;
        padding-bottom: 40px;

		/* IE10 Consumer Preview */ 
		background-image: -ms-linear-gradient(bottom, #EDFFFF 0%, #FFFFFF 50%);

		/* Mozilla Firefox */ 
		background-image: -moz-linear-gradient(bottom, #EDFFFF 0%, #FFFFFF 50%);

		/* Opera */ 
		background-image: -o-linear-gradient(bottom, #EDFFFF 0%, #FFFFFF 50%);

		/* Webkit (Safari/Chrome 10) */ 
		background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #EDFFFF), color-stop(.5, #FFFFFF));

		/* Webkit (Chrome 11+) */ 
		background-image: -webkit-linear-gradient(bottom, #EDFFFF 0%, #FFFFFF 50%);

		/* W3C Markup, IE10 Release Preview */ 
		background-image: linear-gradient(to top, #EDFFFF 0%, #FFFFFF 50%);      
	  }

.featurette {
padding-top: 120px;
overflow: hidden;
}

.featurette-image.pull-left {
margin-right: 40px;
}

.featurette-image {
margin-top: -120px;
}

.featurette-heading {
font-size: 50px;
font-weight: 300;
line-height: 1;
letter-spacing: -1px;
}

	  .wrapper {
	  	background:#ffffff;
	  }

      /* Custom container */
      .container-narrow {
        margin: 0 auto;
        max-width: 700px;
      }
      .container-narrow > hr {
        margin: 30px 0;
      }

      .masthead {
      	text-align:center;
      }

      /* Supporting marketing content */
      .marketing {
        margin: 60px 0;
      }
      .marketing p + h4 {
        margin-top: 28px;
      }
    </style>
    <link href="<?php echo site_url("assets/css/bootstrap-responsive.css"); ?>" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="<?php echo site_url("assets/js/html5shiv.js"); ?>"></script>
    <![endif]-->

  </head>

  <body>

    <div class="container-narrow">
      <div class="masthead">
        <h3 class="logo">Previve</h3>
        <h4 class="tagline">prevents hangover symptoms, scientifically.</h4>
      </div>

	  <div class="featurette">
		<img class="featurette-image pull-left" src="<?php echo site_url("assets/img/previve-packaging-1-box.jpg"); ?>">
		<p><strong>ENERGIZES</strong> your night</p>
		<p><strong>PREVENTS</strong> hangover symptons</p>
		<p><strong>PROMOTES</strong> long-term wellness</p>
	  </div>

  </div>

  <div class="wrapper">

    <div class="container-narrow">

      <div class="footer">
        <p>&copy; Company 2013</p>
      </div>

    </div> <!-- /container -->

  </div>

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="<?php echo site_url("assets/js/jquery.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-transition.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-alert.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-modal.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-dropdown.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-scrollspy.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-tab.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-tooltip.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-popover.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-button.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-collapse.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-carousel.js"); ?>"></script>
    <script src="<?php echo site_url("assets/js/bootstrap-typeahead.js"); ?>"></script>

  </body>
</html>
