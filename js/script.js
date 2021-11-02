let burger = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu-header');
let body = document.querySelector('body');

burger.addEventListener('click', function (e) {
	burger.classList.toggle('menu-burger_act');
	menu.classList.toggle('menu-header-active');
	body.classList.toggle('lock');
});

//--------------------------------------------------------------

const swiper1 = new Swiper('.mainblock__swiper', {
	initialSlide: 2,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	grabCursor: true,
});

const swiper2 = new Swiper('.wheels__swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	navigation: {
		prevEl: '#js-prev1',
		nextEl: '#js-next1',
	},
	//spaceBetween: 30,
	grabCursor: true,
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		415: {
			slidesPerView: 2,
		},
		584: {
			slidesPerView: 3,
		},
		820: {
			slidesPerView: 4,
		},
		1000: {
			slidesPerView: 5,
		},
	},
});



//-------------------------------------------------------------------

let header = document.querySelector('.header');

window.addEventListener('scroll', function (event) {
	event.preventDefault();
	if ((window.scrollY + 2) > 50) {
		header.classList.add('color-header');
	} else {
		header.classList.remove('color-header');
	}
});
