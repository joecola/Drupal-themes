(function ($, Drupal) {

    function poplinks(){
    // Create a div to hold the modal
    var modal = $('<div id="image-modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 800px;max-width:70%; background: white; padding: 20px; border-radius: 10px; z-index: 1001;"></div>').appendTo('body');
    var overlay = $('<div id="overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1000;"></div>').appendTo('body');

    // Find all a href links that end in .jpg, .png, or .gif
    $('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]').css('text-decoration-color', '#ff00ff').click(function(e) {
        e.preventDefault();

        // Create a new image element for the modal
        var img = $('<img>').attr('src', this.href).css('width', '100%');

        // Show the modal with the image and the overlay
        modal.empty().append(img).show();
        overlay.show();
    });

    // Hide the modal and the overlay when the overlay is clicked
    overlay.click(function() {
        modal.hide();
        overlay.hide();
    });
    modal.click(function() {
        modal.hide();
        overlay.hide();
    });
};
    $(document).ready(function() {
        poplinks();
});

$(document).ajaxComplete(function () {
    poplinks();
});

})(jQuery, Drupal);