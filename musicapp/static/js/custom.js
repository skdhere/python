jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
	
});

$(document).ready(function() {
$('#menu li i').click(function(e){
if($(this).hasClass('arrow')){
$(this).removeClass('arrow').next('ul').slideUp(500);
}
else if($(this).parents().siblings('i').hasClass('arrow')){
$('.arrow').slideDown();
$(this).addClass('arrow').next('ul').slideDown(500);
}
else{
$('#menu li i').removeClass('arrow').next('ul').slideUp(500);
$(this).addClass('arrow').next('ul').slideDown(500);
}
})
	
});
$('#menu li ').click(function() {
	//console.log("Clicked");
    $('#menu li.active').removeClass('active');
    $(this).addClass('active');
});



/*--partner slider---*/
$('#partner-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	 autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
});


/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*//*(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);*/

jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 100,
                time: 1000
            });
        });



/*--------banner down scroll------*/
// scroll to bottom div
$(document).ready(function () {
  $('.js-btn').click(function() {
  $('html, body').animate({
    scrollTop: $(".js-section").offset().top - 90
  }, 1000)
})
});

