document.eventForm.reset()
var fadeDuration = 200;
function chain(from, to){
	$(from).change(function() {
		var val = $(from+" option:selected").text();
		if (val == '...') {
			$(to).fadeOut( fadeDuration );
		} else {
			$(to).fadeIn( fadeDuration );
		}
	});
}

chain("#i_wer", "#g_wasGenau");
chain("#i_wasGenau", "#g_wasGrob");
chain("#i_wasGrob", "#g_wann");

$("#i_wann").change(function() {
	var val = $("#i_wann option:selected").text();
	if (val == 'am') {
		$("#g_von").fadeIn( fadeDuration );
		$("#g_bis").fadeOut( fadeDuration );
		$("#proTag").text("Personen.")
	} else if(val == 'vom'){
		$("#g_von").fadeIn( fadeDuration );
		$("#g_bis").fadeIn( fadeDuration );
		$("#proTag").text("Personen pro Tag.")
	} else {
		$("#g_von").fadeOut( fadeDuration );
		$("#g_bis").fadeOut( fadeDuration );
	}
});


$("#i_dauer").change(function() {
	var val = $("#i_dauer option:selected").text();
	if (val != 'bis zum') {
		$("#g_bis").fadeOut( fadeDuration );
	} else {
		$("#g_bis").fadeIn( fadeDuration );
	}
});

var i_von = $('#i_von').datetimepicker(
		{
            format: 'MMMM Do YYYY'
        }		
);


var i_bis = $('#i_bis').datetimepicker(
		{
            format: 'MMMM Do YYYY'
        }		
);

$("#i_von").on("dp.change", function(e) {
	if($("#i_wann option:selected").text() == "am") {
		$("#g_teilnehmer").fadeIn( fadeDuration );
	}
});

$("#i_bis").on("dp.change", function(e) {
		$("#g_teilnehmer").fadeIn( fadeDuration );
});

$("#i_teilnehmer").change(function() {
	var val = $("#i_teilnehmer option:selected").text();
	if (val == '...') {
		$("#p_haftpflicht").fadeOut( fadeDuration );
		$("#p_inventar").fadeOut( fadeDuration );
	} else {
		$("#p_haftpflicht").fadeIn( fadeDuration );
		$("#p_inventar").fadeIn( fadeDuration );
	}
});


//HAFTPLICHT

$("#i_haftpflicht").change(function() {
	if($("#i_haftpflicht").is(":checked")){
		$("#pb_haftpflicht").fadeIn( fadeDuration );
	} else {
		$("#pb_haftpflicht").fadeOut( fadeDuration );
	}
});


//INVENTAR

$("#i_inventar").change(function() {
	if($("#i_inventar").is(":checked")){
		$("#pb_inventar").fadeIn( fadeDuration );
	} else {
		$("#pb_inventar").fadeOut( fadeDuration );
	}
});

// LIB und INIT
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

$('#eventForm').validator(
{
	custom: {
		  future: function($el) {
		    var matchValue = $el.data("future")
	
		    var tomorrow = moment().add('days', matchValue);
		    var ok = i_von.data("DateTimePicker").date().isAfter(tomorrow)
		    
		    if (!ok) {
		      return "Datum muss mindestend "+matchValue+" Tage in der Zukunft liegen." 
		    }
		  },
		  duration: function($el) {
			  	var days = $el.data("duration")
			  	var von = i_von.data("DateTimePicker").date();
			  	var bis = i_bis.data("DateTimePicker").date();
			    if (bis.isAfter(von.add('days', days))) {
			      return "Event darf höchstens "+days+" Tage dauern." 
			    }
			    /*
			     TODO
			  	if(bis.isBefore(von)){
			  		return "Enddatum muss nach dem Beginn sein."
			  	}
			  	*/
			  }
		}
	}		

);
