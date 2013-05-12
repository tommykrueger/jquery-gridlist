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
		
		var elem = $(this);
		
		//make local copy of the settings
		var $options = jQuery.extend(true, {}, options);
		
		var gridList = new GridList($options, elem);
		return gridList._init();
	};
	
	// process plugin settings and set defaults
	$.fn.gridList.defaultOptions = {
			
		// how should the grid be (3x3)
		rows: 3,
		columns: 3,
      
		direction: 'top',
		animation: 'circular',
    	
    	moveRows: false,
    	moveColumns: true,            	
    	
    	// should the list be shuffled on startup
    	shuffled: false,
    	
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
		this.teasing = false;
		
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
			}else{
				var $this = this;
				
				// shuffle the list if the option is set
				if(this.$options.shuffled)
					this._shuffleList();
				
				// set the classes
				this._setItemCSS();
				
				this.$children.click(this._click);
				
				var $elemWidthHalf = this.$elem.width() / 2;
				
				var $elemItemWidthHalf = this.$children.width() / 2;
				
				var offsetX = $elemWidthHalf - $elemItemWidthHalf;
				
				// start the slider
				this._start();
				
				return $this;
			}
			
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
		 */
		_start: function(){
			console.log('perform start');
			var $this = this;
			var options = $this.$options;
			
			if(options.autoSlide){
				
				$this._interval = setInterval(function(){
					//console.log('interval step');
					//console.log($this);
					
					// check if columns or rows must be ignored (teaser)
					
					if(options.rows == -1){
						//$this._renderSingle();
						
						$this.teasing = true;
						console.log('teaser rendering');
						console.log($this.$children.length);
						//options.rows = $this.$children.length;
					}
					
					// check if grid list reached the end and reset the animation / append the list again
					else if(options.rows == 0 && $this._itemCount == $this.$children.length-1){
						console.log('resetting 1');
						$this._currentColumn = 0;
						$this._currentRow = 0;
						$this._itemCount = 0;
						$this._resetGridList();
					}
					
					else if(!$this.teasing && (options.columns * options.rows) + $this._itemCount == $this.$children.length){
						console.log('resetting 2', $this.teasing);
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
						console.log('options transitionSpeed', $this.$options.transitionSpeed);
						// todo -> check which direction the list should go
						$.each($this.$children, function(index, el){
							
							// end of column is reached
							console.log($this.teasing);
							if(!$this.teasing && $this._currentColumn == options.columns){
								$this._currentColumn = 0;
								$this._currentRow++;
								console.log('end of columns');
							}else if($this.teasing && $this._currentColumn == $this.$children.length){
								console.log('teasing end reached');
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
		
		_renderSingle: function(){
			$this = this;
			
			$.each($this.$children, function(index, el){
				
			});
			
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
		 * shuffle the list items.
		 * Should be called before animation _start() function.
		 */
		_shuffleList: function(){
			$this = this;
			
			var counter = $this.$children.length;
			var temp, index;
			
			while(counter){
		        // Pick a random index
		        index = Math.floor(Math.random() * counter--);

		        // And swap the last element with it
		        temp = $this.$children[counter];
		        $this.$children[counter] = $this.$children[index];
		        $this.$children[index] = temp;
		    }
			
			$this.$elem.append($this.$children);
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
			//$this._start();
		}
	};
})(jQuery);