$(function() {
	var carouselList = $("#carousel ul");
	function changeSlide() {
		carouselList.animate({'marginLeft':-700}, 700, moveFirstSlide);
	}
	setInterval(changeSlide, 3000);
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
});