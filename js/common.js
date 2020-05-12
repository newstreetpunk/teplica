jQuery(function($) {

	$('.mobile-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('active');
	});

	$('.header__menu>ul>li>a:contains("продукция")').parent().append('<span class="menu-arrow"></span>');
	$('.header__menu>ul>li>a:contains("продукция")').next().find('li').append('<span class="menu-arrow"></span>');

	$('.header__menu>ul>li').hover(function(){
		$(this).toggleClass('active');
		$(this).find('ul').slideToggle(100);
	});

	$('.banner').slick({
		draggable: true,
		autoplay: true,
		arrows: false,
		dots: false,
		fade: true,
		speed: 900,
		infinite: true,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100
	});

});