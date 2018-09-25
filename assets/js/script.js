$(function() {
    var navbar = $(".ul-container");
	var headerText = $("#greetings");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            navbar.addClass("ul-scrolled");
			headerText.addClass("greetings-text");
        } else {
            navbar.removeClass("ul-scrolled");
			headerText.removeClass("greetings-text");
        }
		console.log($(document).scrollTop());
    });
});

$(function() {
  	var diamondIcon = $("#d-icon-div");
  	var diamondIconIcon = $("#d-icon-icon");
	
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 558) {
            diamondIcon.addClass("diamond-icon");
			diamondIconIcon.addClass("fa fa-diamond size");
        } else {
            diamondIcon.removeClass("diamond-icon");
			diamondIconIcon.removeClass("fa fa-diamond size");
        }
    });
});