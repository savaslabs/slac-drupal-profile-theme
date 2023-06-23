import Drupal from 'drupal';

const button = '<button class="view-all">View all services</button>';
(function ($, Drupal) {
  Drupal.behaviors.card = {
    attach: function (context, settings) {
      $('.l-section--dark.services', context).once('services').each(function () {
        let $cards = $(this).find('.c-card');
        $cards.each(function(index) {
          if (index > 5) {
            $(this).hide();
          }
        });
        if ($cards.length > 5) {
          $(this).find('.l-section__content').append(button);
        }
        $(this).find('.view-all').click(function () {
          $cards.show();
          $(this).remove();
        });
      });
    }
  };
})(jQuery, Drupal);


