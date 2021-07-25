// ----------- Hero Area ----------------

             // -------- mouseenter show--------
$(document).ready(function (){
  $("#heroContainer").mouseenter(function (){
  $("#arrowHero").show(300); 
  $('html, body').animate({
  scrollTop: $("#heroContainer").offset().top},600);      
  });
});

             // -------- mouseleave hide--------
$(document).ready(function (){
   $("#heroContainer").mouseleave(function (){
   $("#arrowHero").hide(300);      
   })
});
 


$(document).ready(function (){
  $("#arrowHero").click(function (){
      $('html, body').animate({
          scrollTop: $("#topIntro").offset().top
      }, 800); 
  });
});

// --------------------- Introduction section ----------------------------

// -------- mouseenter show--------
$(document).ready(function (){
  $("#topIntro").mouseenter(function (){
  $("#arrowIntroDown").show(200);
  $("#arrowIntroUp").show(200);
  $("#home2").show(200);
  });     
});

  // -------- mouseleave hide--------
$(document).ready(function (){
  $("#topIntro").mouseleave(function (){
  $("#arrowIntroDown").hide(300);
  $("#arrowIntroUp").hide(300);
  $("#home2").hide(300);   
  })
});

                  // arrow down click
$(document).ready(function (){
  $("#arrowIntroDown").click(function (){
      $('html, body').animate({
          scrollTop: $("#topTinyTails").offset().top
      }, 800);
  });
});

              // arrow up click
$(document).ready(function (){
  $("#arrowIntroUp").click(function (){
      $('html, body').animate({
          scrollTop: $("#topNav").offset().top        
      }, 800);
  });
});

              //  back home click
$(document).ready(function (){
  $("#home2").click(function (){
      $('html, body').animate({
          scrollTop: $("#topNav").offset().top        
      }, 800);
   
  });
});

// --------------------- Tiny tails section ----------------------------

              // -------- mouseenter show--------
$(document).ready(function (){
  $("#topTinyTails").mouseenter(function (){
  $("#arrowTinyTailsDown").show(300);
  $("#arrowTinyTailsUp").show(300);
  $("#home3").show(300);
           
  });
});

// -------- mouseleave hide--------
$(document).ready(function (){
  $("#topTinyTails").mouseleave(function (){
  $("#arrowTinyTailsDown").hide(300);
  $("#arrowTinyTailsUp").hide(300);
  $("#home3").hide(300);
           
  });
});


                 // arrow down click
$(document).ready(function (){
  $("#arrowTinyTailsDown").click(function (){
      $('html, body').animate({
          scrollTop: $("#topElectoral").offset().top
      }, 800); 
  });
});

               // arrow up click
$(document).ready(function (){
  $("#arrowTinyTailsUp").click(function (){
      $('html, body').animate({
          scrollTop: $("#topIntro").offset().top        
      }, 800); 
               
  });
});

 //  back home click
$(document).ready(function (){
  $("#home3").click(function (){
      $('html, body').animate({
          scrollTop: $("#topNav").offset().top        
      }, 800);
      $("#arrowHero").show(1200);  
 
  });
});


// --------------------- Electoral section ----------------------------

 // -------- mouseenter show--------
 $(document).ready(function (){
  $("#topElectoral").mouseenter(function (){
  $("#arrowElectoralDown").show(300); 
  $("#arrowElectoralUp").show(300);
  $("#home4").show(300);
        
  });
});

             // -------- mouseleave hide--------
$(document).ready(function (){
   $("#topElectoral").mouseleave(function (){
    $("#arrowElectoralDown").hide(300); 
    $("#arrowElectoralUp").hide(300);
    $("#home4").hide(300);   
   })
});

                  // arrow down click
$(document).ready(function (){
  $("#arrowElectoralDown").click(function (){
      $('html, body').animate({
          scrollTop: $("#topSparky").offset().top
      }, 800);
  });
});

                 // arrow up click
 $(document).ready(function (){
  $("#arrowElectoralUp").click(function (){
      $('html, body').animate({
          scrollTop: $("#topTinyTails").offset().top        
      }, 800);                
  });
});
       
 //  back home click
 $(document).ready(function (){
  $("#home4").click(function (){
      $('html, body').animate({
          scrollTop: $("#topNav").offset().top        
      }, 800);    
  });
});

// --------------------- Sparky section ----------------------------

 // -------- mouseenter show--------
 $(document).ready(function (){
  $("#topSparky").mouseenter(function (){
  $("#arrowSparkyDown").show(300); 
  $("#arrowSparkyUp").show(300);
  $("#home5").show(300);
        
  });
});

             // -------- mouseleave hide--------
$(document).ready(function (){
   $("#topSparky").mouseleave(function (){
    $("#arrowSparkyDown").hide(300); 
    $("#arrowSparkyUp").hide(300);
    $("#home5").hide(300);   
   })
});

                 // arrow up click
 $(document).ready(function (){
  $("#arrowSparkyUp").click(function (){
      $('html, body').animate({
          scrollTop: $("#topElectoral").offset().top        
      }, 800);                
  });
});
       
 //  back home click
 $(document).ready(function (){
  $("#home5").click(function (){
      $('html, body').animate({
          scrollTop: $("#topNav").offset().top        
      }, 1000);    
  });
});


// ---------------------------------------------------

$(document).ready(function (){
  $("#home").click(function (){
      $('html, body').animate({
          scrollTop: $("#topNav").offset().top
      }, 3500);
      $("#arrowIntro").show(4000);
      $("#arrowHero").show(3500);
      $("#arrowSparky").show(3000);
      $("#arrowElectoral").show(2500);
      
  });
});











