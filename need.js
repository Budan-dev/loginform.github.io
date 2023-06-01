
function delayLinks(event) {
	event.preventDefault();
	setTimeout(function() {
		window.location.href = event.target.getAttribute("href");

	}, 2000)
}	