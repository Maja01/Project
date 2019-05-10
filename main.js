window.addEventListener('scroll', function(){
    let drop  = document.getElementById("drop-drop");
    let main = document.getElementById("main");

    if(window.pageYOffset > 0) {
        drop.classList.add("color1");
        main.classList.add("color");
      
        
    } else {
        drop.classList.remove("color1");
        main.classList.remove("color");
    }
})



$(document).ready(function() {
  
    var productItem = $('.product'),
      productCurrentItem = productItem.filter('.active');
  
    $('#next').on('click', function(e) {
      e.preventDefault();
  
      var nextItem = productCurrentItem.next();
  
      productCurrentItem.removeClass('active');
  
      if (nextItem.length) {
  
        productCurrentItem = nextItem.addClass('active');
      } else {
        productCurrentItem = productItem.first().addClass('active');
      }
  
    
    });
    
  
    $('#prev').on('click', function(e) {
      e.preventDefault();
  
      var prevItem = productCurrentItem.prev();
  
      productCurrentItem.removeClass('active');
  
      if (prevItem.length) {
        productCurrentItem = prevItem.addClass('active');
      } else {
        productCurrentItem = productItem.last().addClass('active');
      }
  
     
    });
  
    
  });