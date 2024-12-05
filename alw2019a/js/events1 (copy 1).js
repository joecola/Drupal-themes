(function($) {
  $(document).ready(function() {

//    $('select[name="field_event_day_target_id"]').append($('<option>', {
//      value: 1,
//      text: 'My option'
//    }));
  })



  $(document).ready(function(){
      $(window).scroll(function(){
          if ($(this).scrollTop() > 100) {
              $('#scroll').fadeIn();
          } else {
              $('#scroll').fadeOut();
          }
      });
      $('#scroll').click(function(){
          $("html, body").animate({ scrollTop: 400 }, 200);
          return false;
      });
  });


  //$('iframe').attr('alt', 'feed');
  //$('#_71n7_modal_frame iframe').attr('title', 'feed');

  console.log('tintup1');
  $(window).on("load", function() {
    console.log('tintup2');
    $('.tintup iframe').removeAttr('frameborder');
    $('.tintup iframe').removeAttr('scrolling');
    $('.tintup iframe').removeAttr('allowtransparency');
    $('#_71n7_modal_frame').attr('title', 'hypemarks');
});

 

  
}(jQuery));



(function($) {
 	

    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        text = text.replace(/(\r\n|\n|\r)/gm, "");
        $(this).text(text);
    });   	
    
    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        text = text.replace(" – ", "–");
        $(this).text(text);
    });
           
    
    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        text = text.replace("12:00 PM", "Noon");
        $(this).text(text);
    });
    
    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        text = text.replace(" AM", " a.m.");
        $(this).text(text);
    });
    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        text = text.replace(" AM", " a.m.");
        $(this).text(text);
    });
    
    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        text = text.replace(" PM", " p.m.");
        $(this).text(text);
    });
    
    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        text = text.replace(" PM", " p.m.");
        $(this).text(text);
    });
    
    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        text = text.replace(":00", "");
        $(this).text(text);
    });
    
    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        text = text.replace("12:00 PM", "Noon");
        $(this).text(text);
    });
    
    
    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        
        if (text.endsWith('p.m.') && (text.indexOf("p.m.–") >= 0))
        {
        text = text.replace(" p.m.–", "–");
        $(this).text(text);
        }
    });
    
    $(".views-field-field-event-date").each(function() {
        var text = $(this).text();
        
        if (text.endsWith('a.m.') && (text.indexOf("a.m.–") >= 0))
        {
        text = text.replace(" a.m.–", "–");
        $(this).text(text);
        }
    });
    })(jQuery);