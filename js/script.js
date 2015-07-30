$(document).ready( function() {

	$('.flip').click(function(){
	    $(this).find('.card').toggleClass('flipped');
	    return false;
	});
	heightWidthSync();
});
$(window).on('resize', function() {
	heightWidthSync();
});
function heightWidthSync() {
	var frontHeight = $('.front').outerHeight();
	var backHeight = $('.back').outerHeight();

	if (frontHeight > backHeight) {
	    $('.flip, .back').height(frontHeight);
	}
	else if (backHeight > frontHeight) {
	    $('.flip, .front').height(backHeight);
	}
	else {
	    $('.flip').height(backHeight);
	}
}