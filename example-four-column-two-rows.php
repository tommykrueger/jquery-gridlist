<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title>jQuery Grid list - 2 Column 3 Rows Example</title>

<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" charset="utf-8" />
<link rel="stylesheet" href="css/jquery.gridlist-0.1.css" type="text/css" media="screen" charset="utf-8" />
<link rel="shortcut icon" href="images/favicon.png" />

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.gridlist.js"></script>

<style>

.box {
	height: 300px;
	min-height: 360px;
	}

/* custom gridlist styles */
ul#gridlist {
	width: 360px;
	height: 262px;
	margin: 0 auto;
	} 
</style>

<script type="text/javascript">

jQuery.noConflict();
jQuery(document).ready(function($){

	// save the gridlist as a javascript object in order to call public methods later
	var gridList = $('#gridlist').gridList({
		columns: 4,
		rows: 2
	});
});

</script>

</head>
<body>

<div id="page">
	
	<div id="header">
		<div id="header-content">
			<a href="index.php">&laquo; Back to Main Page</a>
		</div>
	</div>

	<div id="grid-container" class="box">
	
		<ul id="gridlist">
			<li><img src="img/thumbs/01.jpg" alt="Image 01" /></li>
			<li><img src="img/thumbs/02.jpg" alt="Image 02" /></li>
			<li><img src="img/thumbs/03.jpg" alt="Image 03" /></li>
			<li><img src="img/thumbs/04.jpg" alt="Image 04" /></li>
			<li><img src="img/thumbs/05.jpg" alt="Image 05" /></li>
			<li><img src="img/thumbs/06.jpg" alt="Image 06" /></li>
			<li><img src="img/thumbs/07.jpg" alt="Image 07" /></li>
			<li><img src="img/thumbs/08.jpg" alt="Image 08" /></li>
			<li><img src="img/thumbs/09.jpg" alt="Image 09" /></li>
			<li><img src="img/thumbs/10.jpg" alt="Image 10" /></li>
			<li><img src="img/thumbs/11.jpg" alt="Image 11" /></li>
			<li><img src="img/thumbs/12.jpg" alt="Image 12" /></li>
		</ul>	
	</div>
	
	<div id="footer">
		<div id="footer-content">
			&copy; 2013 by tommy krueger &rarr; visit <a href="http://tommykrueger.com">tommykrueger.com</a>
		</div>
	</div>
	
</div>
	
</body>
</html>

