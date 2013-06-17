(function($) {

	$('.focus').on("mouseover", function(event) {
		console.log('on');
		$('span.etat4').fadeOut(350);
		$('span.etat3').fadeIn(350);
	}).on("mouseleave", function() {
		console.log('out');
		$('span.etat4').fadeIn(350);
		$('span.etat3').fadeOut(350);
	});


}(jQuery));