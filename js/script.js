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
	berechnen()
	if($("#i_wann option:selected").text() == "am") {
		$("#g_teilnehmer").fadeIn( fadeDuration );
	}
});

$("#i_bis").on("dp.change", function(e) {
	berechnen()	
	$("#g_teilnehmer").fadeIn( fadeDuration );
});

$("#i_teilnehmer").change(function() {
	var val = $("#i_teilnehmer option:selected").text();
	if (val == '...') {
		$("#p_haftpflicht").fadeOut( fadeDuration );
		$("#p_inventar").fadeOut( fadeDuration );
		$("#p_ausfall").fadeOut( fadeDuration );
	} else {
		$("#p_haftpflicht").fadeIn( fadeDuration );
		$("#p_inventar").fadeIn( fadeDuration );
		$("#p_ausfall").fadeIn( fadeDuration );
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


// ABSCHLUSS

$( "#buy" ).click(function() {
	  $("#footerText").html("Cool. Unser Vertrag kommt per Email!")
});

// LIB und INIT
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

function berechnen(){
	var p = 0;
	if($("#i_inventar").is(":checked")) {
		console.log("inventar")
		var i = 0;
		i = 80;
		if($("#i_technischeDefekte").is(":checked")) {
			i = i+ 5;
		}
		i = i * dauer();
		if($("#i_transport").is(":checked")) {
			i = i + 20;
		}
		p = p +i;
	}
	if($("#i_haftpflicht").is(":checked")) {
		var h = 100;
		if(essen()) {
			h = h+ 5;
		}
		if(tribuene()) {
			h = h + 5;
		}
		if(imFreien() && zelt()) {
			h= h+5;
		}	
		h = h * dauer();
		p = p+ h;
	}
	if($("#i_ausfall").is(":checked")) {
		p = p + 200;
	}
	
	p = Math.round(Math.log(1+$("#i_teilnehmer")[0].selectedIndex) *p);

	if(p > 0) {	
		$("#praemie").html(p);
		$("#footer").fadeIn( fadeDuration );
	} else {
		$("#footer").fadeOut( fadeDuration );
	}
}



$(".berechnen").change(berechnen);

function imFreien(){
	return  $("#i_wasGrob option:selected").text() != "in einem Gebäude";
}
function essen(){
	return  $("#i_essen").is(":checked");
}
function tribuene(){
	return  $("#i_tribuene").is(":checked");
}
function zelt(){
	return  $("#i_zelt").is(":checked");
}
function dauer(){
  	var bis = i_bis.data("DateTimePicker").date();
  	if(bis == null) return 1;
  	var von = i_von.data("DateTimePicker").date();
  	return bis.diff(von,'days');
}

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
