/*go top 設定*/
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 100) $('#drop').addClass('active');
  else if (scroll < 80) $('#drop').removeClass('active');
});

$(function () {
  $('a[href*=#]').on('click', function (e) {
    e.preventDefault();
  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
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

