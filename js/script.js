$(document).ready( function() {

	$('.flip').click(function(){
	    $(this).find('.card').addClass('flipped');
	    return false;
	}).mouseleave(function () {
	    $('.flip > .card').removeClass('flipped');
	});

	var frontHeight = $('.front').outerHeight();
	var backHeight = $('.back').outerHeight();

	if (frontHeight > backHeight) {
	    $('.flip, .back').height(frontHeight);
	}
	else if (frontHeight > backHeight) {
	    $('.flip, .front').height(backHeight);
	}
	else {
	    $('.flip').height(backHeight);
	}

});