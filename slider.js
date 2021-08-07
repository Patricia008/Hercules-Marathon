function startup(){
	slider('.slider');
}

document.addEventListener("DOMContentLoaded", startup);

function slider(element){

	if (element){

		add_classes_to_children(element);
		touching_func(element);

		//keydown event for prev and next
		document.addEventListener("keydown", event => {

		  if (event.isComposing || event.keyCode === 37) {
		    prev_slide();
		  }

		  if (event.isComposing || event.keyCode === 39) {
		    next_slide();
		  }

		});

		document.querySelectorAll('.sliderContainer')[0].addEventListener('click', function(e){

			let x = e.target;

			if ( (x.parentElement.classList.contains("next-slide")) || (x.closest(".next-button")) ){
				next_slide();
			}

			else if (x.parentElement.classList.contains("prev-slide") || (x.closest(".prev-button")) ){
				prev_slide();
			}

		}, {passive: true} );

	}

}

function add_classes_to_children(parentElement){

	let parent = document.querySelectorAll(parentElement)[0];

	for (let i = 0; i < parent.children.length; i++){

		let childElement;

		if ( i < 1 ){
			childElement = parent.children[i].className += 'first-slide ';		
		}


		if ( i == parent.children.length ){
			childElement = parent.children[i].className += 'last-slide ';		
		}

		if (i == 1){
			let activeElement = parent.children[i].className += 'active-slide ';
			style_active_previous_and_next_slides();
		}

		childElement = parent.children[i].className += 'slide-' + i + ' ';
		childElement = parent.children[i].className += 'slide ';

	}

}

function style_active_previous_and_next_slides(){

	let active = document.querySelectorAll('.active-slide')[0];
	
	let prev = active.previousElementSibling;
	let next = active.nextElementSibling;

	prev.className += 'prev-slide ';
	next.className += 'next-slide ';

}

function next_slide(){

	let active = document.querySelectorAll('.active-slide')[0];

	if (active.nextElementSibling){

		let next = active.nextElementSibling;
		let nextnext = next.nextElementSibling;
		let prev = active.previousElementSibling;

		if (prev){
			active.previousElementSibling.classList.remove('prev-slide');
		}

		active.nextElementSibling.classList.remove('next-slide');
		active.classList.remove('active-slide');

		next.className += ' active-slide ';
		active.className += ' prev-slide ';

		if (nextnext){
			next.nextElementSibling.className += ' next-slide ';
		}

	}

}

function prev_slide(){

	let active = document.querySelectorAll('.active-slide')[0];

	if (active.previousElementSibling){

		let prev = active.previousElementSibling;
		let prevprev = prev.previousElementSibling;
		let next = active.nextElementSibling;
		

		if (next){
			active.nextElementSibling.classList.remove('next-slide');
		}

		active.previousElementSibling.classList.remove('prev-slide');
		active.classList.remove('active-slide');

		prev.className += ' active-slide ';
		active.className += ' next-slide ';

		if (prevprev){
			prev.previousElementSibling.className += ' prev-slide ';
		}

	}

}

/* 
 * Touch handler - For mobile devices
 * source: https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
 */

function touching_func(element){

	let parentElement = document.querySelectorAll(element)[0];

	parentElement.addEventListener('touchstart', handleTouchStart, {passive: true});        
	parentElement.addEventListener('touchmove', handleTouchMove, {passive: true});

	var xDown = null;                                                        
	var yDown = null;

	function getTouches(evt) {
	  return evt.touches ||             // browser API
	         evt.originalEvent.touches; // jQuery
	}                                                     

	function handleTouchStart(evt) {
	    const firstTouch = getTouches(evt)[0];                                      
	    xDown = firstTouch.clientX;                                      
	    yDown = firstTouch.clientY;                                      
	};                                                

	function handleTouchMove(evt) {
	    if ( ! xDown || ! yDown ) {
	        return;
	    }

	    var xUp = evt.touches[0].clientX;                                    
	    var yUp = evt.touches[0].clientY;

	    var xDiff = xDown - xUp;
	    var yDiff = yDown - yUp;

	    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
	        if ( xDiff > 0 ) {
	        	/* left swipe */
	           next_slide();
	        } else {
	        	/* right swipe */
	            prev_slide();
	        }                       
	    } else {
	        if ( yDiff > 0 ) {
	            /* up swipe */ 
	        } else { 
	            /* down swipe */
	            location.reload();
	        }                                                                 
	    }
	    /* reset values */
	    xDown = null;
	    yDown = null;                                             
	};

}
