$(document).ready(function(){
    $("#button").click(function(){
      $("#panel").slideToggle("slow");
      $("#down").toggleClass("fa-rotate-180"); 
    });
    
  });