
var main = function(){
 $('.dropdown-toggle').click(function() {
     $('.dropdown-menu').toggle();  
 });
    
 $('.nav-tabs').click(function(){
  $('.nav').removeClass('.active');
  $('.nav tabs').addClass('active');	
 });
}

$(document).ready(main);

