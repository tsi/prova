(function ($) {

  Drupal.behaviors.provaBehavior = {
    attach: function (context, settings) {

      alert('IT WORKS');

      alert('drupalSettings says: Happy ' + drupalSettings.prova.day + '!!!!');

    }
  };

})(jQuery);
