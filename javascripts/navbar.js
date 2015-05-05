
var main = function(){
 $('.nav-tabs').click(function(){
  $('.nav-tabs').removeClass('.active');
  $(this).addClass('active');	
 });
}

$(document).ready(main);

