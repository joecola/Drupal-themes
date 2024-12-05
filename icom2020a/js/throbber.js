/**
 * @file
 * Replaced Drupal cores ajax throbber(s), see: https://www.drupal.org/node/2974681
 *
 */
(function ($, Drupal) {
console.log('throbber ready')

  Drupal.theme.ajaxProgressThrobber = function () {
    console.log('throbber1')
    return "<div class=\"ajax-spinner ajax-spinner--inline\"><span class=\"ajax-spinner__label\">" + Drupal.t('Loading&nbsp;&hellip;', {}, {
      context: "Loading text for Drupal cores Ajax throbber (inline)"
    }) + "</span></div>";
  };
  
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    console.log('throbber2')
    return "<div class=\"ajax-spinner ajax-spinner--fullscreen\"><span class=\"ajax-spinner__label\">" + Drupal.t('Loading&nbsp;&hellip;', {}, {
      context: "Loading text for Drupal cores Ajax throbber (fullscreen)"
    }) + "</span></div>";
  };
    // You can also customize only throbber message:
    // Drupal.theme.ajaxProgressMessage = message => '<div class="my-message">' + message + '</div>';
})(jQuery, Drupal);