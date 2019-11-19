$(document).ready(function(){

	// modal form buy
	var modalBuy = $('#buyModal');
	var btnBuy = $('.btn__buy');
	var closeBuy = $('.close');
	var formBuyTitle = $('#formBuyTitle');
	var inputPlan = $('#plan');

	$(modalBuy).hide();
	$(btnBuy).click(function() {
	  	$(modalBuy).show();
	});
	$(closeBuy).click(function() {
	  	$(modalBuy).hide();
	});
	$('.modal__back').click(function() {
	  	$(modalBuy).hide();
	});

	$('.btn__starter').click(function() {
		$(formBuyTitle).text('Starter');
	  	$(inputPlan).val('Starter');
	});
	$('.btn__basic').click(function() {
		$(formBuyTitle).text('Basic');
	  	$(inputPlan).val('Basic');
	});
	$('.btn__startup').click(function() {
		$(formBuyTitle).text('Startup');
	  	$(inputPlan).val('Startup');
	});
	$('.btn__business').click(function() {
		$(formBuyTitle).text('Business');
	  	$(inputPlan).val('Business');
	});	
});