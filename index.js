
function click_burger() {
	const mobile_nav=document.querySelector('#mobile-nav ul')
	mobile_nav.style.transform='translatex(0vw)'
	let burger=document.querySelector('.mobile-nav__burger')
	burger.style.transform="rotate(360deg)"
	burger.style.display='none'
}

function click_x() {
	let burger=document.querySelector('.mobile-nav__burger')
	const mobile_nav=document.querySelector('#mobile-nav ul')
	burger.style.display = 'block';
	mobile_nav.style.transform = 'translatex(110vw)'
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

let participanti = []
let failedToLoadParticipants = false
const PAGE_SIZE = 16
let pageCount = 1

fetch('https://racetime.ro/api/participants/83')
	.then(response => response.json())
	.then(data => {
		participanti = data
	})

function read_one_page() {
	const data = participanti.slice((pageCount-1) * PAGE_SIZE, (pageCount-1) * PAGE_SIZE + PAGE_SIZE)

	if (participanti.length < pageCount * PAGE_SIZE) {
		const incarca_inca_o_pagina_button = document.getElementsByClassName('Participanti__incarca-button')[0]
		incarca_inca_o_pagina_button.style.display = 'none'
	}
	pageCount++
	const table = document.getElementsByClassName("Participanti__table")[0]
	data.forEach(participant => {
		const row = table.insertRow();
		const cell0 = row.insertCell(0);
		const cell1 = row.insertCell(1);
		const cell2 = row.insertCell(2);
		const cell3 = row.insertCell(3);
		const cell4 = row.insertCell(4);
		const cell5 = row.insertCell(5);
		cell0.innerHTML = participant.RaceName
		cell1.innerHTML = participant.LastName
		cell2.innerHTML = participant.FirstName
		cell3.innerHTML = participant.City
		cell4.innerHTML = participant.Team
		cell5.innerHTML = participant.Status
	})
}

function click_vezi_participanti() {
	const participanti_table = document.getElementsByClassName('Participanti__table')[0]
	const vezi_participanti_button = document.getElementById('Participanti__button')
	const incarca_inca_o_pagina_button = document.getElementsByClassName('Participanti__incarca-button')[0]
	if (vezi_participanti_button.textContent.trim() === "Vezi Participanți") {
		participanti_table.style.opacity = 1
		participanti_table.style.marginTop = '6rem'
		incarca_inca_o_pagina_button.style.display = 'flex'
		participanti_table.style.height = 'auto'
		participanti_table.style.transition = 'height 0ms 0ms, opacity 600ms 0ms'
		vezi_participanti_button.textContent = "Ascunde Participanți"
		read_one_page()
	} else {
		pageCount = 1
		participanti_table.style.opacity = 0
		participanti_table.style.marginTop = '-3rem'
		incarca_inca_o_pagina_button.style.display = 'none'
		participanti_table.style.height = 0
		vezi_participanti_button.textContent = "Vezi Participanți"
		document.querySelectorAll("table tbody td").forEach(function(e){e.remove()})

	}
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
				let lazyImage = entry.target;
				lazyImage.src = lazyImage.dataset.src;
				lazyImage.classList.remove("lazy");
				lazyImageObserver.unobserve(lazyImage);
			});
		});
  
		// Loop through and observe each image
		lazyImages.forEach(function(lazyImage) {
		  lazyImageObserver.observe(lazyImage);
		});
	  }
}
