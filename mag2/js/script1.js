(function($) {
  $(document).ready(function() {


    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                    event.preventDefault();
                    $(this).ekkoLightbox();
                });

    $('.toggle').toggles({
      text: {
        on: '', // text for the ON position
        off: '' // and off
      }
    });
    var linkRewriter = function(a, b) {
      $('a[href*="' + a + '"]').each(function() {
        $(this).attr('href', $(this).attr('href').replace(a, b));
      });
    };
    //linkRewriter('mag.uchicago.edu', 'magdev1.uchicago.edu');
    $('#edit-search-api-fulltext').attr('placeholder', 'Search');
    $('#edit-name option:contains("- Any -")').text('- Topic -');
    $('#edit-created option:contains("- Any -")').text('- Year -');
    $(" #block-mag2-views-block-mag-top-stories-block-1 .attachment").hide();
    $('.toggle').on('toggle', function(e, active) {
      if (active) {
        console.log('Most read');
        $(".view-mag-top-stories .mostread").hide();
        $(" #block-mag2-views-block-mag-top-stories-block-1 .attachment").fadeIn();
      } else {
        console.log('Most shared');
        $(".view-mag-top-stories .mostread").fadeIn();
        $(" #block-mag2-views-block-mag-top-stories-block-1 .attachment").hide();
      }
    });
    $(".form-item-search-api-fulltext").append('<i id="searchclose" class="fa fa-window-close" aria-hidden="true"></i>');

    //$(".form-item-search-api-fulltext").append('<i id="searchclose" class="fa fa-window-close" aria-hidden="true"></i>');

    //$(".form-item-search-api-fulltext").append('<button data-drupal-selector="edit-submit-mag-search-2" class="button js-form-submit form-submit btn-info btn" type="submit" id="edit-submit-mag-search-2" value="Apply" name="">Apply</button>');
    //form-item-search-api-fulltext
    $(" #block-mag2-exposedformmag-search-2page-1").hide();
    //mnavcon
    $("#showsearch").click(function() {
      $(".mnavcon").hide();
      $(".navlogo").hide();
      $(" #block-mag2-exposedformmag-search-2page-1").fadeIn();
      $("#edit-search-api-fulltext").focus();
    });
    $("#showsearch2").click(function() {
      $(".mnavcon").toggle();
      //$(".navlogo").toggle();
      $(" #block-mag2-exposedformmag-search-2page-1").fadeIn();
      $("#edit-search-api-fulltext").focus();
    });
    $("#searchclose").click(function() {
      $(" #block-mag2-exposedformmag-search-2page-1").hide();
      $(".mnavcon").fadeIn();
      $(".navlogo").fadeIn();
    });
    $(document).keyup(function(e) {
      if (e.keyCode == 27) { // escape key maps to keycode `27`
        $(" #block-mag2-exposedformmag-search-2page-1").hide();
        $(".mnavcon").fadeIn();
        $(".navlogo").fadeIn();
      }
    });
    // hide missing D7 image/media syntax tags
    $(document).ready(function() {
//$("p").html().replace(/\[\[.+?\]\]/g,'');



$('body :not(script)').contents().filter(function() {
    return this.nodeType === 3;
  }).replaceWith(function() {
      return this.nodeValue.replace(/\[\[.+?\]\]/g,'');
  });

    });
    $(document).ready(function() {




      $(".magazine-issue").each(function(index) {
        $(".field--type-text-with-summary h2").each(function (index) {
            $(this).nextUntil("h2").addBack().wrapAll("<div class='wrap1'></div>");
        });
      });










      $(function() {
        if (matchMedia) {
          const mq = window.matchMedia("(min-width: 700px)");
          mq.addListener(WidthChange);
          WidthChange(mq);
        }

        function WidthChange(mq) {
          if (mq.matches) {
            // window width is at least 700px
            //$('.view-mag-back-issues .col-sm-3').matchHeight();
            $('.view-mag-back-issues .int-wrap').matchHeight({
              byRow: false,
              //property: 'height',
              //target: null,
              //remove: true
            });
            $('.view-taxonomy-term .int-wrap').matchHeight({
              byRow: false,
              //property: 'height',
              //target: null,
              //remove: true
            });
            $('.view-mag-homepage-stories-2 .int-wrap').matchHeight({
              byRow: false,
              //property: 'height',
              //target: null,
              //remove: true
            });
            //view-mag-homepage-stories-2
            $(' #block-mag2-fromthearchiveshomeplaceholder-2').matchHeight(
              {byRow: false}
            );
            //block-fromthearchiveshomeplaceholder-2
            console.log('matchHeight');
          } else {
            // window width is less than 700px
          }
        }
      });
    });
  });
})(jQuery);
