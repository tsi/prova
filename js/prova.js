(function ($) {

  Drupal.behaviors.provaBehavior = {
    attach: function (context, settings) {

      alert('JS WORKS');

      alert('drupalSettings says: Happy ' + drupalSettings.prova.day + '!!!!');

    }
  };

})(jQuery);
