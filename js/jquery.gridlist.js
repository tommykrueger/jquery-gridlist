/**
 * http://tommykrueger.com/projects/gridlist
 * 
 * Grid List Animation Plugin for jQuery 1.7.2
 * Written by Tommy Krueger June 2012
 * 
 * @author Tommy Krüger
 * @version 0.1
 * 
 */

(function($){

	$.fn.gridList = function(options) {
		
		var options = $.extend({}, $.fn.gridList.defaultOptions, options || {});
		var $return;
		
		this.each(function() {
			
			var elem = $(this);
			
			//make local copy of the settings
			var $options = jQuery.extend(true, {}, options);
			
			var gridList = new GridList($options, elem);
			$return = gridList._init();
	    });
		
		return $return; 
	};
	
	// process plugin settings and set defaults
	$.fn.gridList.defaultOptions = {
		// how should the grid be (3x3)
		rows: 3,
		columns: 3,
        	
		direction: 'top',
		
		animation: 'circular',
		stepTime: 5,
    	
    	moveRows: false,
    	moveColumns: true,            	
    	
    	// should the list be shuffled on startup
    	shuffle: false,
    	
    	// set to true if you want to have a loader bar
    	showLoaderbar: false,
		
		current: 1,
		autoSlide: true,
		speed: 3000,
		transitionSpeed: 500,		
		
		prevItem: '#prev',
		nextItem: '#next',
		
		beforeInit: function(){},
		beforeMove: function(){},
		afterMove: function(){},
		afterReset: function(){},
		beforereset: function(){}
	};
	
	/**
	 * Grid list class definition
	 */
	function GridList(options, elem)
	{ 
		this.$options = options;
		this.$elem = elem;
		this.$children = this.$elem.children();
		this.currentIdx = this.$options.current;
		
		this._interval = null;
		this._currentColumn = 0;
		this._currentRow = 0;
		this._itemCount = 0;
		
		//this.pause = function(){
			//console.log('pause');
		//};
		
		//return this;
	}
	
	/**
	 * Prototype Class of the grid list
	 */
	GridList.prototype =
	{
		_init: function() {
	
			if(this.$elem.children().length <= 1){
				console.log('starting grid list animation');
				return false;
			}
			
			var $this = this;
			
			// set the classes
			this._setItemCSS();
			
			this.$children.click(this._click);
			
			var $elemWidthHalf = this.$elem.width() / 2;
			
			var $elemItemWidthHalf = this.$children.width() / 2;
			
			var offsetX = $elemWidthHalf - $elemItemWidthHalf;
			
			// start the slider
			this._start();
			
			return $this;
			
		},
		
		_setItemCSS: function(){
			var $this = this;
			
			// add css clear to the columns and hide the elements that are outside of the grid (3x3 => 9)
			$.each(this.$children, function(index, el){
				
				// columns
				if(index != 0 && index % $this.$options.columns == 0)
					$(el).css('clear', 'left');
				else
					$(el).css('float', 'left');
				
				// rows
				//if(index >= ($this.$options.rows * $this.$options.columns))
					//$(el).css('opacity', 0.0);
				
			});
		},
		
		/**
		 * Start the grid list animation
		 * @returns
		 */
		_start: function(){
			var $this = this;
			var options = $this.$options;
			
			if(options.autoSlide){
				
				$this._interval = setInterval(function(){
					console.log('interval step');
					console.log($this);
					
					// check if grid list reached the end and reset the animation / append the list again
					if(options.rows == 0 && $this._itemCount == $this.$children.length-1){
						$this._currentColumn = 0;
						$this._currentRow = 0;
						$this._itemCount = 0;
						$this._resetGridList();
					}
					
					else if((options.columns * options.rows) + $this._itemCount == $this.$children.length){
						console.log('resetting');
						//if(options.animation != 'circular'){
							$this._currentColumn = 0;
							$this._currentRow = 0;
							$this._itemCount = 0;
						//}
						$this._resetGridList();
					}
					else{
						
						// append the latest list item if there is a circular (endless) animation
						if(options.animation == 'circular'){
							
							var elem = null;
							/*
							$.each($this.$children, function(index, el){
								if(index == $this._itemCount){
									elem = el;
									
									//$(el).css({'top': - $(el).height() * ($this._currentRow + 1)});
									if($this._currentColumn == 0)
										$(el).css('clear', 'left');
										
									$(el).css({'top': -$(el).height()});
									
									$this.$elem.append($(el).clone());
									console.log($this.$children);
								}
							});
							*/
							
						}
						
						$this.$children = $this.$elem.children();
						
						// todo -> check which direction the list should go
						$.each($this.$children, function(index, el){
							
							// end of column is reached
							if($this._currentColumn == options.columns){
								$this._currentColumn = 0;
								$this._currentRow++;
								console.log('end of columns');
							}
							
							
							// end of rows is reached e.g. the end of the grid
							if($this._itemCount == options.columns * options.rows){
								$this._currentColumn = 0;
								$this._currentRow = 0;
								$this._itemCount = 0;
								console.log('end of rows');
								
								// if the grid has a circular animation the first listitems are append to the end of the grid
								if(options.animation == 'circular'){
									
								}
							}
							
							if(options.moveColumns){
								//console.log('moving columns');
								if(index % options.columns == $this._currentColumn){
									//console.log('moving elements');
									$(el).addClass('moving');
									
									var distanceTop = $(el).height() * ($this._currentRow + 1) + (10 * ($this._currentRow+1));
									
									if(options.direction == 'top'){
										distanceTop = -distanceTop;
									}
									
									// the elements on top must be set to hidden
									if(index == $this._itemCount){
										$(el).animate({
											'top': distanceTop
											/*'opacity': 0.0*/
										}, $this.$options.transitionSpeed);
									}
									
									// the elements on the bottom must be set to visible
									if(index == (options.columns * options.rows) + $this._itemCount){
										$(el).addClass('show');
										$(el).css({'display': 'initial'});
										$(el).animate({
											'top': distanceTop
											/*'opacity': 1.0*/
										}, $this.$options.transitionSpeed);
									}
									
									else{
										$(el).animate({
											'top': distanceTop
										}, $this.$options.transitionSpeed);
									}
									
								}
								else
									$(el).removeClass('moving');
							}
							
							
						});
						
						$this._currentColumn++;	
						$this._itemCount++;
					}
					
				}, options.speed);
				
			}
		},		
		
		/**
		 * move the grid list back to its original position
		 */
		_resetGridList: function(){
			$this = this;
			
			$.each($this.$children, function(index, el){
				
				$(el).animate({'top': 0}, $this.$options.transitionSpeed);
				
			});
		},
		
		/**
		 * append the same gridlist once again to the list DOM
		 */
		_appendGridList: function(){
			$this = this;
			
			//$this.$children.append($this.$children.clone());
		},
		
		/**
		 * 
		 * @param eventObject e - the event handler object
		 * @param object $thisEl - the this context of the clicked element
		 * @param object $this - the this context of the sldier object
		 * @returns
		 */
		_clickItem: function(e, $thisEl, $this){
			
			
			//check if the clicked item is left or right from the current element
			var clickedIdx = $('li').index($thisEl);
			
			if(clickedIdx == $this.currentIdx)
				return false;
			else if(clickedIdx < $this.currentIdx){
				e.preventDefault();
				// move the list elements to the right
				$this._moveItems('left', clickedIdx);
			}
			else {
				// move the list elements to the left
				e.preventDefault();
				$this._moveItems('right', clickedIdx);
			}
			
			$this.currentIdx = clickedIdx;
			$this._setItemClasses();
			$this._setCurrentTitle();
		},

		_moveItems: function(direction, clickedIdx){
			var $this = this;
			
			// calculate the pixels to shift left
			var offsetX = (this.currentIdx - clickedIdx);
			
			offsetX = offsetX * 150;
			
			//console.log(offsetX);
			
			this.$children.each(function(){
				$(this).stop().animate({'left': '+=' + offsetX}, $this.$options.transitionSpeed);
			});
		},
		
		nextItem: function(){
			/** @todo **/
		},
		
		prevItem: function(){
			/** @todo **/
		},
		
		
		/***
		 * PUBLIC METHODS to use from outside of the plugin
		 */
		
		// pause the grid list progress
		pause: function(){
			$this = this;
			
			clearInterval($this._interval);
		},
		
		// resume the gridlist progress after is had beend paused
		resume: function(){
			$this = this;
			
			clearInterval($this._interval);
			$this._start();
		}
	};
})(jQuery);


/**
(function($){
    $.fn.extend({
        gridList: function(options) {

            var defaults = {
            	viewportX: 3,
            	viewportY: 3,
            	
            	animation: 'circle',
            	stepTime: 5,
            	
            	moveRows: false,
            	moveColumns: true,            	
            	
            	random: false
            };

            var options = $.extend(defaults, options);

            $.fn.moveItems = function(itemsToMove){
            	for(i=0; i<itemsToMove.length; i++)
            	{
            		console.log(itemsToMove[i]);
            	}
            };
            
            
            //Additional variables for plugin wide usage
            var currentRow = 0;
            var currentColumn = 0;
            
            return this.each(function() {

            	//Get a reference to the list object
                var obj = $(this);
                
                console.log(obj);

                //Create references to the options
                var viewportX = options.viewportX;
                var viewportY = options.viewportY;

                var stepTime = options.stepTime;
                
                //Calculate number of rows and hide them
                var listItems = obj.children();
                var numViewportItems = viewportX * viewportY;
                listItems.slice(numViewportItems).css('opacity', '0.0');
                
                setInterval(function(){ 
                	
                	var firstChild = true;
                	obj.children().each(function(){
                		//Get the children to animate
                		//console.log($(this).index());
                		
                		//Get any margin if set
                		var marginTop = $(this).css('margin-top').replace("px", "");
                		var marginbottom = $(this).css('margin-bottom').replace("px", "");
                		
                		var index = $(this).index();
                		
                		if((index % viewportX) == currentColumn)
                		{
                			$(this).css('position', 'relative');
                			
                			console.log($(this).position().top);
                			
                			var movePixels = parseInt($(this).height()) + parseInt(marginTop) + parseInt(marginTop);
                			
                			//movePixels = $(this).position().top + movePixels;
                			
                			if(firstChild)
                			{
                				$(this).animate({top: - movePixels, opacity: '0.0'}, 1000);
                				firstChild = false;
                			}
                			//Get the last item that comes into the viewport and show it
                			else if((listItems.length - index) == (currentColumn - viewportX)*(-1))
                			{
                				$(this).animate({top: - movePixels, opacity: '1.0'}, 1000);
                			}
                			else
                				$(this).animate({top: - movePixels}, 1000);
                		}
                		
                		
                	});
                	
                	
                	
                	
                	
          
                	var firstItem, lastItem;
                	var firstChild = true;
                	obj.children().each(function(){
                		//add first item after the last item in this column
                		var index = $(this).index();
                		
                		if((index % viewportX) == currentColumn)
                		{
                			//First item
                			if(firstChild)
                			{
                				firstItem = $(this);
                				firstChild = false;
                			}
                			//Last item
                			else if((listItems.length - index) == (currentColumn - viewportX)*(-1))
                				lastItem = index;
                		}
                	});
                	
                	console.log(firstItem);
                	//console.log(lastItem);
                	
                	$('#grid-list li:eq(' + lastItem + viewportX + ')').before(firstItem);
                	//lastItem.insertAfter(firstItem);
                	//firstItem.remove();
                	
                	console.log(obj);
                	
                	if(currentColumn == viewportX)
                		currentColumn = 0;
                	else
                		currentColumn++;
                	
                }, 5000);
                
                
                //If "numbers" is set to true append with number of items hidden
                if(options.numbers) {
                   // moreText += ' (' + quantity + ')';
                }

                //Only add the link if quantity of child elements exceeds the options.limit
                //if(quantity > 0) {
                    //var control = '<span class="'+ moreClass +'">'+ moreText +'<\/span>';
                //}

                //Check if "append" is set to true, otherwise prepend the "control"
                /*if(options.append) {
                    obj.append(control);
                }
                else {
                    obj.prepend(control);
                }
                //Create a reference to the control

                /*
                var itemControl = $('.' + moreClass, obj);

                itemControl.click(function() {
                	$.fn.moveUp('hello');
                	
                    var link = $(this);
                    //var linkif = link.hasClass(moreClass);

                    // If rows are hidden, show them, and change our link.

                    if (linkif) {
                        //link.removeClass(moreClass);
                        link.addClass(lessClass);
                        link.html(lessText);
                        rows.slice(options.limit).show();
                    }
                    else {
                        link.removeClass(lessClass);
                        //link.addClass(moreClass);
                        link.html(moreText);
                        rows.slice(options.limit).hide();
                    }	
                });
     
            });
        }
    });
})(jQuery);
*/
/*
 * After the animation is done we need to set the new positions of the list items
 * We do it after the animation process, because of display lacks on slow machines
 */
