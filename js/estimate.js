$(document).ready(function(){
	$('.close, .modal__back').click(function() {
		$('.checkbox').prop("checked", false);
	  	$('#email').val("");
	  	$('#firstName').val("");
	  	$('#lastName').val("");
	  	$('#phone').val("");
	  	$('#descrEstimate').val("");
	  	$('.secondary__radio').prop("checked", false);
	});
	$('#project').click(function() {
		agree = $('.agree__project').text();
	});
	$('#communications').click(function() {
		agree = $('.agree__communications').text();
	});
	$('.device'). click(function(){
		device = [];
		$("input[name='device']:checked").each(function () {
			device.push($(this).val());
		});
	});
	$('.scope'). click(function(){
		scope = [];
		$("input[name='scope']:checked").each(function () {
			scope.push($(this).val());
		});
	});

	// send form estimate
	$('#formBtnEstimate').click(function() {
		var modal = $('#regModal');
		var email = $('#email').val();
		var firstname = $('#firstName').val();
		var lastname = $('#lastName').val();
		var phone = $('#phone').val();
		var descr = $('#descrEstimate').val();
		var deviceStr = device.toString();
		var scopeStr = scope.toString();

		var xhr = new XMLHttpRequest();
    	var url = 'https://api.hsforms.com/submissions/v3/integration/submit/6761453/b7778c87-9f09-4c9a-9864-0ed0a3d38edd'
    	// Example request JSON:
	    var data = {
	      "fields": [
	      	{
	          "name": "device",
	          "value": deviceStr
	        },
	        {
	          "name": "scope",
	          "value": scopeStr
	        },
	      	{
	          "name": "email",
	          "value": email
	        },
	        {
	          "name": "firstname",
	          "value": firstname
	        },
	        {
	          "name": "lastname",
	          "value": lastname
	        },
	        {
	          "name": "phone",
	          "value": phone
	        },
	        {
	          "name": "desc",
	          "value": descr
	        },
	        {
	          "name": "agree",
	          "value": agree
	        }
	      ]
	    }
	    var final_data = JSON.stringify(data)
	    xhr.open('POST', url);
	    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
	    xhr.setRequestHeader('Content-Type', 'application/json');
	    xhr.onreadystatechange = function() {
	        if(xhr.readyState == 4 && xhr.status == 200) {
	        	$(modal).show();
	            $('.form__block').addClass('disable');
	       		$('.send__message').addClass('active');
	        } else if (xhr.readyState == 4 && xhr.status == 400){
	        	$(modal).show();
	        	$('.form__block').addClass('disable');
	        	$('.notsend__message').addClass('active');
	        	console.log(xhr.responseText);
	        } else if (xhr.readyState == 4 && xhr.status == 403){
	        	$(modal).show(); 
	            $('.form__block').addClass('disable');
	        	$('.notsend__message').addClass('active');
	        	console.log(xhr.responseText);        
	        } else if (xhr.readyState == 4 && xhr.status == 404){
	        	$(modal).show();
	            $('.form__block').addClass('disable');
	        	$('.notsend__message').addClass('active');
	        	console.log(xhr.responseText);
	        }
	       } 
	    // Sends the request	    
	    xhr.send(final_data)
	});	
});