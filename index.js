$(document).ready(function() {

	var l = window.location.href;
	if (l.search('#') != -1) {
		l = l.substring(l.lastIndexOf('#') + 1, l.length);
	} else {
		l = null;
	}
	console.log(l);
	
	$('.content').hide();

	$('.navButton').click(function() {
		$('.navButton').removeClass('active');
		$('.content').hide();
		$(this).addClass('active');
		$($(this).attr('contentId')).show();
	});
	
	if (l) {
		$('#trigger-' + l).trigger('click');
	} else {
		$('.defaultView').trigger('click');
	}
});