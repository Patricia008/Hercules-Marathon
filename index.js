
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

