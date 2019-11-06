$(document).ready(function(){
	// heder scrolled
	$(window).scroll(function(){
	  var header = $('.header'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 67) header.addClass('scrolled');
	  else header.removeClass('scrolled');
	});

	// mobile menu
	$('#btn_om').click(function() {
	  $('.header__block_menu').addClass('active');
	  $('.menu__back').addClass('active');
	});
	$('.menu__btn_back, .header__block_menu, .menu__back').click(function() {
	  $('.header__block_menu').removeClass('active');
	  $('.menu__back').removeClass('active');
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
	var btn = $('.btn');
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

});