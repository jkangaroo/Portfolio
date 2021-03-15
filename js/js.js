$(document).ready(function() {
	// -------------------------- MODALS --------------------------
	$("#aboutmodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'bounceInUp',
		animatedOut: 'bounceOutDown',
		modalTarget: 'aboutmodal',
	});
	
	$("#projectsmodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'bounceInUp',
		animatedOut: 'bounceOutDown',
		modalTarget: 'projectsmodal',
	});

	$("#384modal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'bounceInUp',
		animatedOut: 'bounceOutDown',
		modalTarget: 'projectsmodal',
	});
	
	$("#contactmodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'bounceInUp',
		animatedOut: 'bounceOutDown',
		modalTarget: 'contactmodal',
	});
	
	
	// -------------------------- ABOUT --------------------------
	// typed
	var aboutTyped = new Typed('#identity-carousel', {
		strings: ['a designer', 'a builder', 'an optimist', 'an epic fantasy reader', 'an investigator', 'a game designer', 'an explorer'],
		typeSpeed: 22,
		startDelay: 1200,
		fadeOut: true,
		backDelay: 1500,
		loop: true,
		showCursor: false,
	});

	// slick carousel
	$('#about-images').slick({
		accessibility: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1700,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: false,
		draggable: false,
		swipe: false,
		touchMove: false,
		fade: true,
		infinite: true,
		pauseOnFocus: false,
		pauseOnHover: false,
	});
	
});
