$(document).ready(function() {
	$('.content').hide();

	$('.navButton').click(function() {
		$('.navButton').removeClass('active');
		$('.content').hide();
		$(this).addClass('active');
		$($(this).attr('contentId')).show();
	});
	
	$('#default').trigger('click');
});