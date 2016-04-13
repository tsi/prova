(function ($) {

  Drupal.behaviors.provaAdminBehavior = {
    attach: function (context, settings) {

      alert('Loads on admin theme only');

    }
  };

})(jQuery);
