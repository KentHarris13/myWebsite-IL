// @ts-check

document.getElementById('nav-toggle').addEventListener('click', function () {
  let navMenu = document.getElementById('nav-menu-container');
  navMenu.style.display = navMenu.offsetParent === null ? 'block' : 'none';
});

// Code for the slider in homepage
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}
