
var main = function(){
 $('.glyphicon glyphicon-chevron-right').click(function(){
 var currentSlide =$('.active-slide');
 var nextSlide = currentSlide.next();
 
 currentSlide.fadeOut(600).removeClass('active-slide');
 nextSlide.fadeIn(600).addClass('active-slide');
 });
 
 $('.glyphicon glyphicon-chevron-left').click(function(){
  var currentSlide =$('.active-slide');
 var nextSlide = currentSlide.prev();
 
 currentSlide.fadeOut(600).removeClass('active-slide');
 nextSlide.fadeIn(600).addClass('active-slide');	
 });
}


$(document).ready(main);
