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

chain("#i_wer", "#g_wasGrob");
chain("#i_wasGrob", "#g_wasGenau");
chain("#i_wasGenau", "#g_wann");

$("#i_dauer").change(function() {
	var val = $("#i_dauer option:selected").text();
	if (val != 'bis zum') {
		$("#g_bis").fadeOut( fadeDuration );
	} else {
		$("#g_bis").fadeIn( fadeDuration );
	}
});

var i_wann = $('#i_wann').datetimepicker(
		{
            format: 'MMMM Do YYYY'
        }		
);

$("#i_wann").on("dp.change", function(e) {
	$("#g_dauer").fadeIn( fadeDuration );
});

var i_bis = $('#i_bis').datetimepicker(
		{
            format: 'MMMM Do YYYY'
        }		
);

$('#eventForm').validator(
{
	custom: {
		  future: function($el) {
		    var matchValue = $el.data("future")
	
		    var tomorrow = moment().add('days', matchValue);
		    var ok = i_wann.data("DateTimePicker").date().isAfter(tomorrow)
		    
		    if (!ok) {
		      return "Datum muss mindestend "+matchValue+" Tage in der Zukunft liegen." 
		    }
		  }
		}
	}		

);
