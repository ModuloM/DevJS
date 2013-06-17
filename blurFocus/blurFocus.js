(function($) {

	var fond0 = $('.fondEtat0'),
		fond1 = $('.fondEtat1');

	$('.focus').on("mouseover", function(event) {
		fond0.fadeOut(350);
		fond1.fadeIn(350);
	}).on("mouseleave", function() {
		console.log('out');
		fond1.fadeOut(350);
		fond0.fadeIn(350);
	});


}(jQuery));