function switchActiveSlide(activePage) {
	let allSlides = document.querySelectorAll(".item-slider")
	allSlides.forEach((slide) => {
		if (!slide.classList.contains(`.page-${activePage}`)) {
			slide.classList.remove("active")
		}
	})
	let slides = document.querySelectorAll(`.page-${activePage}`)
	slides.forEach((slide) => {
		slide.classList.add("active")
	})
}
