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

	// modal form
	var modal = $('#regModal');
	var btn = $('#popOp');
	$(modal).hide();
	$(btn).click(function() {
	  	$(modal).show();
	});
	$('.close, .modal__back').click(function() {
	  	$(modal).hide();
	  	$('.form__block').removeClass('disable');
   		$('.send__message').removeClass('active');
   		$('.notsend__message').removeClass('active');
	  	$('#nameFooter').val("");
	  	$('#emailFooter').val("");
	  	$('#descrFooter').val("");
	});

	// send form footer
	$('#formBtnFooter').click(function() {
		var firstname = $('#nameFooter').val();
		var email = $('#emailFooter').val();
		var descr = $('#descrFooter').val();
		var xhr = new XMLHttpRequest();
    	var url = 'https://api.hsforms.com/submissions/v3/integration/submit/6484354/ba6957be-53f3-4cc6-877f-d0dc0d677081'
    	// Example request JSON:
	    var data = {
	      "fields": [
	        {
	          "name": "firstname",
	          "value": firstname
	        },
	        {
	          "name": "email",
	          "value": email
	        },
	        {
	          "name": "company",
	          "value": descr
	        }
	      ]
	    }
	    var final_data = JSON.stringify(data)
	    xhr.open('POST', url);
	    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
	    xhr.setRequestHeader('Content-Type', 'application/json');
	    xhr.onreadystatechange = function() {
	        if(xhr.readyState == 4 && xhr.status == 200) { 
	            $('.form__block').addClass('disable');
	       		$('.send__message').addClass('active');
	        } else if (xhr.readyState == 4 && xhr.status == 400){
	        	$('.form__block').addClass('disable');
	        	$('.notsend__message').addClass('active');
	        	console.log(xhr.responseText);
	        } else if (xhr.readyState == 4 && xhr.status == 403){ 
	            $('.form__block').addClass('disable');
	        	$('.notsend__message').addClass('active');
	        	console.log(xhr.responseText);        
	        } else if (xhr.readyState == 4 && xhr.status == 404){ 
	            $('.form__block').addClass('disable');
	        	$('.notsend__message').addClass('active');
	        	console.log(xhr.responseText);
	        }
	       } 
	    // Sends the request	    
	    xhr.send(final_data)
	});
});