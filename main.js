$(document).ready(function(){
    $("#button").click(function(){
      $("#panel").slideToggle("slow");
      $("#down").toggleClass("fa-rotate-180"); 
    });

    $('#view-work').on('click', function (){
      const images = $('#images').position().top;
      $('html, body').animate({
        scrollTop: images
      }, 900);
    });
    
  });