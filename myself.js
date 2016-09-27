$(document).ready(function() {
	$("#myselfinfo").hide();
	$("#myselfvideo").hide();
	$("#music").hide();
	$("#myselfbutton").click (function() {
		$("#myselfinfo").slideToggle(300);
		$("#myselfvideo").slideToggle(300);
	});
	$("#musicbutton").click (function() {
		$("#music").slideToggle(300);
	});
	$(".mousechange").mouseenter (function() {
		$(this).css("font-size", "2.5em");
		$(this).css("color", "#0000FF");
	});
	$(".mousechange").mouseleave (function() {
		$(this).css("font-size", "2em");
		$(this).css("color", "#000000");
	});
	
	
	
	
});
