jQuery(function($) {

	$('.mobile-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('active');
	});

	// $('.header__menu>ul>li>a:contains("продукция")').parent().append('<span class="menu-arrow"></span>');
	// $('.header__menu>ul>li>a:contains("продукция")').next().find('li').append('<span class="menu-arrow"></span>');

	function tplResize(){	
		$('.header__menu>ul>li').hover(function(){
			if ( $(window).width() > 768 ) {
				$(this).toggleClass('active');
				$(this).find('ul').slideToggle(100);
			}else{
				$(this).toggleClass('active');
			}
		});	
	}
	tplResize();

	//$(window).on('resize', function(){ tplResize() });

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

	$('a[href="#callback"], a[href="#product-callback"]').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		preloader: false,
	});

	$('a[href="#product-callback"]').click(function(){
		var th          = $(this),
			id          = th.attr('href'),
			str         = id.replace('#', ''),
			productName = th.closest('.product__item').find('a.product-title').text(),
			pageTitle   = $('h1').text(),
			catName     = $('h1').find('a').text(),
			subCatName  = pageTitle.split(" ").pop(),
			modal       = $('#'+str+''),
			input       = modal.find('input#title-form');

		modal.find('h2').text(subCatName);
		modal.find('.product-name').text(productName);
		input.val(pageTitle +' - '+ productName);
	});

	$('a[href="#popup"]').on('click', function(){
		$('.overlay').show();
		$('.privacy-wrap').show();
		$('html').css({
			'margin-right': '17px',
			'overflow': 'hidden'
		});
		return false;
	});
	$('.overlay, .privacy-close').on('click', function(){
		$('.overlay').hide();
		$('.privacy-wrap').hide();
		$('html').removeAttr('style');
	});

	// row, col, width, height
	var pos = [
		[1,1,2,1],
		[1,3,1,2],
		[1,4,1,2],
		[2,1,1,1],
		[2,2,1,1],
		[3,1,1,2],
		[3,2,1,2],
		[3,3,2,1],
		[4,3,2,1]
	];
	$('.pages .pages__link').each(function(i, element){
		$( this ).css('grid-row-start', pos[i][0]);
		$( this ).css('grid-column-start', pos[i][1]);
		$( this ).css('grid-row-end', pos[i][0]+pos[i][3]);
		$( this ).css('grid-column-end', pos[i][1]+pos[i][2]);
	});

});