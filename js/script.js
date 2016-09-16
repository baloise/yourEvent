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


$('#i_wann').datetimepicker(
		{
            format: 'MMMM Do YYYY'
        }		
);
