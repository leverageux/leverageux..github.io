$(document).ready(function(){

	// modal form buy
	var modalBuy = $('#buyModal');
	var btnBuy = $('.btn__buy');
	var formBuyTitle = $('#formBuyTitle');
	var inputPlan = $('#plan');

	$(modalBuy).hide();
	$(btnBuy).click(function() {
	  	$(modalBuy).show();
	});
	$('.close, .modal__back').click(function() {
	  	$(modalBuy).hide();
	  	$('#nameBuy').val("");
	  	$('#emailBuy').val("");
	  	$('#descrBuy').val("");
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

	// send form design
	$('#formBtnBuy').click(function() {
		var plan = $('#plan').val();
		var firstname = $('#nameBuy').val();
		var email = $('#emailBuy').val();
		var descr = $('#descrBuy').val();
		var xhr = new XMLHttpRequest();
    	var url = 'https://api.hsforms.com/submissions/v3/integration/submit/6761453/86d2b4ac-2c32-4d12-84b2-9b3aff2696e3'
    	// Example request JSON:
	    var data = {
	      "fields": [
	      	{
	          "name": "plan",
	          "value": plan
	        },
	        {
	          "name": "firstname",
	          "value": firstname
	        },
	        {
	          "name": "email",
	          "value": email
	        },
	        {
	          "name": "descr",
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