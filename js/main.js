$(function(){
var winh   = $(window).innerHeight();
var upperh = $('.upper-bar').innerHeight();
var navh   = $('.navbar').innerHeight();
console.log($(window).width());
$('.slider .carousel-inner').height(winh-(upperh+navh));

$('.features-work ol li').on('click',function(){
   $(this).addClass('active').siblings().removeClass('active');
   var path = `.features-work .row .${$(this).data('class')}`
   console.log(path);
   // $(path).parent().fadeIn(500,function(){
   //    console.log($(this));
   //    $(this).siblings().fadeOut();
   // })
   $('.features-work .row > div').hide(300,function(){
      
   });
   $(path).parent().show(400);
})

});