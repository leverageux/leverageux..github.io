$(document).ready(function(){
	$(window).scroll(function(){	
		var wt = $(window).scrollTop();
		var wh = $(window).height();
		var footerBtnTop = $('#btn_fr').offset().top;
		var footerBtnHeight = $('#btn_fr').outerHeight();
		var footerLogo = $('.footer__logo').offset().top + $('.footer__logo').height();

		// fixed/no fixed heder
		if($('#btn_mn').length) {
			var headerBtnTop = $('#btn_mn').offset().top;
			var headerBtnHeight = $('#btn_mn').outerHeight();
			if (wt >= headerBtnTop + headerBtnHeight) {
				$('.header').addClass('scrolled');
				if (wt + wh >= footerBtnTop) {
					$('.header').removeClass('scrolled');
				} else {
					$('.header').addClass('scrolled');
				}
			} else {
				$('.header').removeClass('scrolled');
			}
		} else { 
			if (wt >= 15.5) {
				$('.header').addClass('scrolled');
				if (wt + wh >= footerBtnTop) {
					$('.header').removeClass('scrolled');
				} else {
					$('.header').addClass('scrolled');
				}
			} else {
				$('.header').removeClass('scrolled');
			}	
		}

		// animated heder when scrolled top
		if(!wt){
	        $('.header').addClass('animated');
		}else{
			$('.header').removeClass('animated');
	    }
		// $('.header__logo').addClass('animated');
		// $('.header__logo').removeClass('animated');

		// animated footer
	    if(wt + wh >= footerLogo){
	        $('.footer__block_logo').addClass('animated');
		}else{
			$('.footer__block_logo').removeClass('animated');
	    }
	});

	// scroll up
	$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
		} 
		else {
		$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	// modal form
	var modal = $('#regModal');
	var btn = $('#popOp');
	var close = $('.close');
	$(modal).hide();
	$(btn).click(function() {
	  	$(modal).show();
	});
	$(close).click(function() {
	  	$(modal).hide();
	});
	$('.modal__back').click(function() {
	  	$(modal).hide();
	});

	// mobile menu
	$('#btn_om').click(function() {
		$('.header__block_menu').addClass('active');
		$('.menu__back').addClass('active');
		$('.btn__back').addClass('active');
		$('.header__block_menu').removeClass('closed');
	});
	$('.menu__btn_back, .header__block_menu, .menu__back').click(function() {
		if ($(window).width() < 1220) {
			$('.header__block_menu').removeClass('active');
			$('.menu__back').removeClass('active');
			$('.btn__back').removeClass('active');
			$('.header__block_menu').addClass('closed');
		}
	});
});