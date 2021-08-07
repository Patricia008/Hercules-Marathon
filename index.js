
function click_bars() {
	const mobile_nav=document.querySelector('#mobile-nav ul')
	mobile_nav.style.transform='translatex(0vw)'
	let bars=document.querySelector('.fa-bars')
	bars.style.transform="rotate(360deg)"
	bars.style.display='none'
}

function click_times() {
	let bars=document.querySelector('.fa-bars')
	const mobile_nav=document.querySelector('#mobile-nav ul')
	bars.style.display = 'block';
	mobile_nav.style.transform = 'translatex(-100vw)'
}

function change_visible_state(hidden_text, see_more_button) {
	if (see_more_button.textContent.trim() === "Vezi Detalii") {
		hidden_text.style.opacity = 1
		hidden_text.style.height = 'auto'
		hidden_text.style.transition = 'height 0ms 0ms, opacity 600ms 0ms'
		see_more_button.textContent = "Ascunde Detalii"
	} else {
		hidden_text.style.opacity = 0
		hidden_text.style.height = 0
		hidden_text.style.transition = 'height 0ms 400ms, opacity 600ms 0ms'
		see_more_button.textContent = "Vezi Detalii"
	}
}

function click_see_more_semimaraton() {
	const hidden_text = document.getElementsByClassName('Trasee__semimaraton__hidden')[0]
	const see_more_button = document.getElementsByClassName('Trasee__semimaraton__button')[0]

	change_visible_state(hidden_text, see_more_button)
}

function click_see_more_maraton() {
	const hidden_text = document.getElementsByClassName('Trasee__maraton__hidden')[0]
	const see_more_button = document.getElementsByClassName('Trasee__maraton__button')[0]

	change_visible_state(hidden_text, see_more_button)
}

// Multiple event listener
function addListenerMulti(element, eventNames, listener) {

	var events = eventNames.split(' ');
	for (var i=0, iLen=events.length; i<iLen; i++) {
	  element.addEventListener(events[i], listener, false);
	}
  
  }
  
  addListenerMulti(window, 'click keydown touchstart touchmove', lazyLoad);
  
  // Run after the HTML document has finished loading
  function lazyLoad(){
	// Get our lazy-loaded images
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
	// Do this only if IntersectionObserver is supported
	if ("IntersectionObserver" in window) {
  
	// Create new observer object
		let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
			// Loop through IntersectionObserverEntry objects
			entries.forEach(function(entry) {
  
			  // Do these if the target intersects with the root
			  if (entry.isIntersecting) {
  
				let lazyImage = entry.target;
				lazyImage.src = lazyImage.dataset.src;
				lazyImage.classList.remove("lazy");
				lazyImageObserver.unobserve(lazyImage);
			  }
  
			  else{
				  
				   let lazyImage = entry.target;
				lazyImage.src = lazyImage.dataset.src;
				lazyImage.classList.remove("lazy");
				lazyImageObserver.unobserve(lazyImage);
			  }
			});
		});
  
		// Loop through and observe each image
		lazyImages.forEach(function(lazyImage) {
		  lazyImageObserver.observe(lazyImage);
		});
	  }
  }
