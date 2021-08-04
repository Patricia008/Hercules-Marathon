
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
