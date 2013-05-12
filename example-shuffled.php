<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title>Jquery Grid list - Shuffled list Example</title>

<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" charset="utf-8" />
<link rel="stylesheet" href="css/jquery.gridlist-0.1.css" type="text/css" media="screen" charset="utf-8" />
<link rel="shortcut icon" href="images/favicon.png" />

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.gridlist.js"></script>

<style>

.box {
	min-height: 900px;
	}

#grid-container {}
#grid-container h1 { 
	width: 690px;
	margin: 24px auto 48px auto;
	text-transform: uppercase; 
	}

/* custom gridlist styles */
ul#gridlist {
	width: 690px;
	height: 734px;
	margin: 0 auto;
	} 
ul#gridlist li { 
	width: 200px;
	height: 240px;
	margin: 0 30px 10px 0;
	}
ul#gridlist li:hover img { 
	border: 1px solid #333;
	-moz-box-shadow: 0px 0px 12px #ccc;
	-webkit-box-shadow: 0px 0px 12px #ccc;
	box-shadow: 0px 0px 12px #ccc;
	}
ul#gridlist li img { 
	width: 200px;
	height: 200px;
	}
ul#gridlist li a { 
	padding: 4px 0;
	display: block;
	color: #888;
	font-size: 1.2em;
	text-transform: uppercase;
	text-decoration: none;
	}
ul#gridlist li a:hover { 
	color: #999;
	text-decoration: none;
	}

</style>


<script type="text/javascript">

jQuery.noConflict();
jQuery(document).ready(function($){

	// save the gridlist as a javascript object in order to call public methods later
	var gridList = $('#gridlist').gridList({
		columns: 3,
		rows: 3,
		shuffled: true
	});

	// public access
	$('a#pause').click(function(e){
		e.preventDefault();
		//gridList.pause();
	});
	$('a#resume').click(function(e){
		e.preventDefault();
		//gridList.resume();
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
		
		<h1>Latest News</h1>
	
		<ul id="gridlist">
			<li>
				<img src="img/thumbs/01.jpg" alt="Image 01" />
				<a href="#">Headline Entry 01</a>
			</li>
			<li>
				<img src="img/thumbs/02.jpg" alt="Image 02" />
				<a href="#">Headline Entry 02</a>
			</li>
			<li>
				<img src="img/thumbs/03.jpg" alt="Image 03" />
				<a href="#">Headline Entry 03</a>
			</li>
			<li>
				<img src="img/thumbs/04.jpg" alt="Image 04" />
				<a href="#">Headline Entry 04</a>
			</li>
			<li>
				<img src="img/thumbs/05.jpg" alt="Image 05" />
				<a href="#">Headline Entry 05</a>
			</li>
			<li>
				<img src="img/thumbs/06.jpg" alt="Image 06" />
				<a href="#">Headline Entry 06</a>
			</li>
			<li>
				<img src="img/thumbs/07.jpg" alt="Image 07" />
				<a href="#">Headline Entry 07</a>
			</li>
			<li>
				<img src="img/thumbs/08.jpg" alt="Image 08" />
				<a href="#">Headline Entry 08</a>
			</li>
			<li>
				<img src="img/thumbs/09.jpg" alt="Image 09" />
				<a href="#">Headline Entry 09</a>
			</li>
			<li>
				<img src="img/thumbs/10.jpg" alt="Image 10" />
				<a href="#">Headline Entry 10</a>
			</li>
			<li>
				<img src="img/thumbs/11.jpg" alt="Image 11" />
				<a href="#">Headline Entry 11</a>
			</li>
			<li>
				<img src="img/thumbs/12.jpg" alt="Image 12" />
				<a href="#">Headline Entry 12</a>
			</li>
			<li>
				<img src="img/thumbs/13.jpg" alt="Image 13" />
				<a href="#">Headline Entry 13</a>
			</li>
			<li>
				<img src="img/thumbs/14.jpg" alt="Image 14" />
				<a href="#">Headline Entry 14</a>
			</li>
			<li>
				<img src="img/thumbs/15.jpg" alt="Image 15" />
				<a href="#">Headline Entry 15</a>
			</li>
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

