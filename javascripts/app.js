var main = function(){
 //Dropdown menu
 $('.dropdown-toggle').click(function(){
   $(''.dropdown-menu').toggle();
 });
 
 //For the about toggle
 $('#pagetopic').click(function(){
  $('#pagetopic').fadeOut(1000);
 });
 
};

$(document).ready(main);
