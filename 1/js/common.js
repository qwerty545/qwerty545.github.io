$(document).ready(function() {

	$(".toggle").click(function() {
		$(this).toggleClass("on");
		$(".headmenu").slideToggle();
		return false;
	});
	});