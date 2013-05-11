<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title>Jquery Grid list</title>

<link rel="shortcut icon" href="images/favicon.png" />
<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" charset="utf-8" />
<link rel="stylesheet" href="css/jquery.gridlist-0.1.css" type="text/css" media="screen" charset="utf-8" />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="js/modernizr.custom.93286.js"></script>
<script type="text/javascript" src="js/jquery.gridlist.js"></script>
<script type="text/javascript" src="js/script.js"></script>

</head>
<body>

<div id="page">
	
	<div id="content">
		<div id="main">
			<h1>Jquery Grid list Plugin</h1>
			
			<div id="sliding-menu">
				<a class="button green" id="example" href="example-simple.php">
					<span>View Example</span>
					<span class="small">See minimal example for testing</span>
				</a>
				<a class="button green" id="github" href="https://github.com/tommykrueger/jquery-gridlist" target="_blank">
					<span>View On Github</span>
					<span class="small">Checkout grid list github repo</span>
				</a>
				<a class="button brown" id="download-package" href="https://github.com/tommykrueger/jquery-gridlist/archive/master.zip">
					<span>Download Package</span>
					<span class="small">Download package with examples</span>
				</a>
				<!-- 
				<a class="button brown" id="download-min" href="example-simple.php">
					<span>Download Min Version</span>
					<span class="small">Version 0.1 -> 32kb</span>
				</a>
				<a class="button brown" id="download-dev" href="example-simple.php">
					<span>Download Dev Version</span>
					<span class="small">Version 0.1 -> 132kb</span>
				</a>
				 -->
			</div>
			
			
			<ul id="mainmenu" class="menu">
				<li class="menu-item"><a href="#how-it-works">How it works</a></li>
				<li class="menu-item"><a href="#features">Features</a></li>
				<li class="menu-item"><a href="#examples">Examples</a></li>
				<li class="menu-item"><a href="#plugin-settings">Plugin Settings</a></li>
				<li class="menu-item"><a href="#api">API</a></li>
				<li class="menu-item"><a href="#tips-and-more">Tips and more</a></li>
			</ul>
		
			<div class="content-block">
				<a name="how-it-works"></a>
				<h2>How it works</h2>
				
				<p>
				
				The grid list plugin 
				
				</p>
				
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
					<li><img src="img/thumbs/13.jpg" alt="Image 13" /></li>
					<li><img src="img/thumbs/14.jpg" alt="Image 14" /></li>
					<li><img src="img/thumbs/15.jpg" alt="Image 15" /></li>
				</ul>
				
				<a id="pause" href="#">Pause</a>
				<a id="resume" href="#">Resume</a>
				
				
<div class="code-block">
<pre><code><span class="library">$</span>(<span class="string">'#gridlist'</span>).gridList({
	columns: <span class="integer">3</span>,
	rows: <span class="integer">3</span>
});</code></pre>
</div>


				<ul id="gridlist2x2">
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
					<li><img src="img/thumbs/13.jpg" alt="Image 13" /></li>
					<li><img src="img/thumbs/14.jpg" alt="Image 14" /></li>
					<li><img src="img/thumbs/15.jpg" alt="Image 15" /></li>
				</ul>
				
				<a id="pause" href="#">Pause</a>
				<a id="resume" href="#">Resume</a>
				
				
<div class="code-block">
<pre><code><span class="library">$</span>(<span class="string">'#gridlist'</span>).gridList({
	columns: <span class="integer">3</span>,
	rows: <span class="integer">3</span>
});</code></pre>
</div>
				
			</div>
			<div class="content-block">
				<a name="features"></a>
				<h2>Features</h2>
				
				<ul>
					<li>Define Columns and rows</li>
					<li>Usefull to display featured articles or latest posts on your website</li>
					<li>Customizable with CSS and Javascript callbacks</li>
					<li>Use any content you want to display</li>
				</ul>
			</div>
			<div class="content-block">
				<a name="examples"></a>
				<h2>Examples</h2>
				
				<ul>
					<li><a href="example-simple.php">Basic Example</a></li>
					<li><a href="example-feature.php">3x3 Feature List</a></li>
					<li><a href="example-teaser.php">One column teaser</a></li>
					<li><a href="example-different-direction.php">Example with different directions</a></li>
				</ul>
			</div>
			<div class="content-block">
				<a name="plugin-settings"></a>
				<h2>Plugin Settings</h2>
				
				<table>
					<tr>
						<th>Option</th>
						<th>Default Value</th>
						<th>Description</th>
					</tr>
					<tr>
						<td>columns</td>
						<td>3</td>
						<td>define how many columns the grid shoud have. The grid animation sequence will be calculated depending on this value</td>
					</tr>
					<tr>
						<td>rows</td>
						<td>3</td>
						<td>define how many rows the grid shoud have. The grid animation sequence will be calculated depending on this value</td>
					</tr>
					<tr>
						<td>direction</td>
						<td>'top'</td>
						<td>set the direction to which the gridlist will be shifted on everry step. It can be 'top' or 'bottom'.</td>
					</tr>
				</table>
			</div>
			<div class="content-block">
				<a name="api"></a>
				<h2>API</h2>
				
				<table>
					<tr>
						<th>Method</th>
						<th>Function</th>
						<th>Example</th>
					</tr>
					<tr>
						<td>pause()</td>
						<td>Pause the grid list</td>
						<td>gridList.pause()</td>
					</tr>
					<tr>
						<td>resume()</td>
						<td>Resumes a grid list if it has been paused before</td>
						<td>gridList.resume()</td>
					</tr>
				</table>
				
				
			</div>
			<div class="content-block">
				<a name="tips-and-more"></a>
				<h2>Tips and more</h2>
				<p>The Grid list Plugin can be integrated with your blog. Please contact me if you want to know more</p>
			</div>
		</div>
	</div>
	<!-- 
	<div id="grid-container" class="box">
		
		<h1>Latest News</h1>
	
		<ul id="gridlist">
			<li><img src="img/01.jpg" alt="Image 01" /></li>
			<li><img src="img/02.jpg" alt="Image 02" /></li>
			<li><img src="img/03.jpg" alt="Image 03" /></li>
			<li><img src="img/04.jpg" alt="Image 04" /></li>
			<li><img src="img/05.jpg" alt="Image 05" /></li>
			<li><img src="img/06.jpg" alt="Image 06" /></li>
			<li><img src="img/07.jpg" alt="Image 07" /></li>
			<li><img src="img/08.jpg" alt="Image 08" /></li>
			<li><img src="img/09.jpg" alt="Image 09" /></li>
			<li><img src="img/10.jpg" alt="Image 10" /></li>
			<li><img src="img/11.jpg" alt="Image 11" /></li>
			<li><img src="img/12.jpg" alt="Image 12" /></li>
		</ul>	
	</div>
	 -->
	 
	<div id="footer">
		<div id="footer-content">
			&copy; 2013 by tommy krueger &rarr; visit <a href="http://tommykrueger.com">tommykrueger.com</a>
		</div>
	</div>
</div>


	
</body>
</html>


