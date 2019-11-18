$(document).ready(function(){
	// heder scrolled
	$(window).scroll(function(){
	  var header = $('.header'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 15.5) { 
	  	$(header).addClass('scrolled');
	  	$('.header__logo').removeClass('animated');
	  } else {
	  	$(header).removeClass('scrolled');
	  	$('.header__logo').addClass('animated');
	  }
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

    // animated Footer
	$(window).scroll(function() {
		var scrollFooter = $(window).scrollTop() + $(window).height();
		var footerLogo = $('.footer__logo').offset().top + $('.footer__logo').height();

	    if(scrollFooter > footerLogo){
	        $('.footer__block_logo').addClass('animated');
		}else{
			$('.footer__block_logo').removeClass('animated');
	    }
    });
});