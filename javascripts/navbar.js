
var main = function(){
 $('#nav_right').removeClass('.active');
 $('.nav nav-tabs').click(function(){
 $(this).addClass('active');	
 });
}

$(document).ready(main);

