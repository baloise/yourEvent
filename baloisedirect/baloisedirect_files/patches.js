!(function($){
    if (document.domain.indexOf("baloisedirect.ch") > -1) {

        function setIframeHeight(iframe) {
            if (iframe) {
                var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
                if (iframeWin.document.body) {
                    iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
                }
            }

        }
        document.domain = "baloisedirect.ch";

        var iframes = $('iframe[src*="'+ document.domain +'/"]');

        iframes.each(function(){
            setIframeHeight($(this)[0]);
        });

        $(window).on("resize",function(){
            iframes.each(function(){
                setIframeHeight($(this)[0]);
            });
        });
        
    }
})(jQuery);


$(function() {
	/**
	 * Prefill form values with parameters.
	 * Fields must allow prefilling. Set checkbox in dialog.
	 */
    var hashParams = window.location.search.substr(1).split('&'); // substr(1) to remove the `?`
    for(var i = 0; i < hashParams.length; i++){
    	var p = hashParams[i].split('=');
    	//Inputs
    	var input = $('input#'+p[0]+'.prefill-allowed');
    	if(input.length > 0) {
    		input.eq(0).val(decodeURIComponent(p[1]));
    	}
    	//Selects
    	var select = $('select#'+p[0]+'.prefill-allowed');
    	if(select.length > 0) {
    		var value = $('select#'+p[0]+'.prefill-allowed option[value="'+decodeURIComponent(p[1])+'"]');
    		if(value.length > 0) {
    			value.attr('selected', 'selected');
    		}
    	}
    }
});



/**
 * Hypothek Coutdown-clock
 */

!function(t){
    $(document).ready(function(){
	    	
		if ($('.mortgage-info').length > 0) {
	    	if ($('#blocktitle .soba-logo').length == 0) {
	    		var sobaLogo = $('.soba-logo').first();
	    		$('#blocktitle h1').append(sobaLogo);
	    		sobaLogo.show();
	    	}
		}
	        
		function getTimeRemaining(endtime) {
		  var t = Date.parse(endtime) - Date.parse(new Date());
		  var seconds = Math.floor((t / 1000) % 60);
		  var minutes = Math.floor((t / 1000 / 60) % 60);
		  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		  var days = Math.floor(t / (1000 * 60 * 60 * 24));
		  return {
		    'total': t,
		    'days': days,
		    'hours': hours,
		    'minutes': minutes,
		    'seconds': seconds
		  };
		}
		
		function initializeClock(idCountdown,idClock, endtime, idRateWrapper, idRateInner, rate) {
		  var countdown = document.getElementById(idCountdown);
		  var clock = document.getElementById(idClock);
		  var rateEl = document.getElementById(idRateWrapper);
		  var rateValEl = document.getElementById(idRateInner);
		  
		  if(clock){
			  var daysSpan = clock.querySelector('.days');
			  var daysDots = clock.querySelector('.days-dots');
			  var hoursSpan = clock.querySelector('.hours');
			  var minutesSpan = clock.querySelector('.minutes');
			  var secondsSpan = clock.querySelector('.seconds');
			
			  function updateClock() {
			    var t = getTimeRemaining(endtime);
			
			    if (t.total >= 0) {
			      if(t.days > 0){
				      daysSpan.innerHTML = t.days;
				      daysSpan.style.display= "inline";
				      daysDots.style.display= "inline";
			      }
			      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
	
			      if(countdown.style.visibility == "hidden"){
			    	  countdown.style.visibility = "visible";
					  if(rateValEl && rate){
						  rateValEl.innerHTML = rate;
						  rateEl.style.visibility = "visible";
					  }
			      }
			    }
			    else {
			      clearInterval(timeinterval);
			      countdown.style.visibility = "hidden";
				  rateEl.style.visibility = "hidden";
			    }
			  }
			
			  updateClock();
			  
			  var timeinterval = setInterval(updateClock, 1000);
		  }
		}
	
		if(window.mortgageRequestURL){
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function() {
			    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			    	var myObj = JSON.parse(xmlhttp.responseText);
			        var deadline1 = new Date(myObj.validUntil);
			        var currentDate = new Date();
			        var deadline = new Date(Date.parse(deadline1));
			        var currentRate = myObj.rate;
			        initializeClock('mortgage-countdown','mortgage-clock', deadline,'mortgage-rate','rate-value', currentRate);
			    }
			};
			
			xmlhttp.open("GET", window.mortgageRequestURL, true);
			xmlhttp.send();
		}

	});

}(jQuery);
