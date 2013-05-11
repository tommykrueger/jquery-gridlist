jQuery.noConflict();
jQuery(document).ready(function($){
	
	//$('html, body').animate({scrollTop: '710px'}, 250);
	
	/*
	$(window).scroll(function(e){
		var scrollTop = $(window).scrollTop();
		
		//if(scrollTop > 130)
			$('#sliding-menu').css({'top': scrollTop + 80});
	});
	*/
	
	var gridList = $('#gridlist').gridList({
		columns: 3,
		rows: 3
	});
	
	var gridList2x2 = $('#gridlist2x2').gridList({
		columns: 2,
		rows: 3
	});
	
	$('a#pause').click(function(e){
		e.preventDefault();
		gridList.pause();
	});
	
	$('a#resume').click(function(e){
		e.preventDefault();
		gridList.resume();
	});
	
	
	
	$('#mainmenu a').click(function(e){
		e.preventDefault();
		
		var target = $(this).attr('href');
			target = target.substr(1);
		
		var offsetTop = $('a[name='+target+']').offset().top;
		
		$('html, body').animate({scrollTop: offsetTop - 25}, 250);
		
	});

});