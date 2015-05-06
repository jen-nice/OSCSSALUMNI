var main= function(){
    $('.trialme').click(function() {
    $('.trialme').animate({
      left:"285px"
    }, 200);
  });
  
   $('.thumbnails').hover(function() {
    $('.thumbnail').animate({
      left:"285px"
    }, 200);
  });
  
  
  };
  
  $(document).ready(main);
