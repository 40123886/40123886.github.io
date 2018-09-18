$(document).ready(function(){
    $('.modal').modal();
	$(".button-collapse").sideNav({
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
    });
});
$(".homeButton").click(function() {
	event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
	
$(".aboutButton").click(function() {
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 60
    }, 1000);
});

$(".workButton").click(function() {
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#work").offset().top - 60
    }, 1000);
});

$(".uniButton").click(function() {
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#university").offset().top - 60
    }, 1000);
});

$(".otherButton").click(function() {
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#other").offset().top - 60
    }, 1000);
});
$(".contactButton").click(function() {
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 60
    }, 1000);
});