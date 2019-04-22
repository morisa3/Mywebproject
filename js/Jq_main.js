/*go top 設定*/

$("#gotop").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    },1000);
});
$(window).scroll(function() {
    if ( $(this).scrollTop() > 300){
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});

/*上方工作列設定*/
$('#drop, nav ~ ul li').click(function() {
  $('nav, #drop span').toggleClass('open');
  $('body').toggleClass('hidden');
  $(window).scrollTop(0); 
});

/*mCustomScrollbar設定*/
(function($){
    $(window).on("load",function(){
        $(".content").mCustomScrollbar();
    });
})(jQuery);


/*TweenMax*/
var myTween = TweenMax.from(".img", 3, {
  x: 1000,
})

