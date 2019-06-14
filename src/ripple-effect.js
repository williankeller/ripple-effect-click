
(function ($) {
  'use strict';

  /**
   * Define global function to set an element ripple effect.
   *
   * Basic usage:
   * $('.to-ripple').rippleEffect();
   *
   * @param {Object} options
   * @return {DOM}
   */
  $.fn.rippleEffect = function (options) {

    /**
     * Default configuration parameters.
     *
     * @type {Object}
     */
    var defaults = {
      onAnimate: 'on-animate',
      preparing: 'prepare-ripple',
      rippleElement: 'ripple',

      element: '.to-ripple',
      duration: null,
      timingFunction: null
    };
    // Merging settings.
    var settings = $.extend({}, defaults, options);

    /**
     * Detect element click action.
     *
     * @param {DOM} element
     * @returns {Boolean}
     */
    var detectClickAction = function (element) {
      $(element).on('click', function (e) {
        // Instance variables to use.
        var current = $(this), ripple, size, pageX, pageY;

        // Create ripple element if still don't exist.
        if (current.find('.' + settings.rippleElement).length === 0) {
          // Prepare parent to get the ripple element.
          current.addClass(settings.preparing);

          // Insert the ripple element into the content element.
          current.prepend('<span class="' + settings.rippleElement + '"></span>');
        }
        // Define the created ripple into a variable.
        ripple = current.find('.ripple');

        // If multiple clicks exists, stop previous animation.
        ripple.removeClass(settings.onAnimate);

        // Define the ripple size.
        if (! ripple.height() && ! ripple.width()) {
          // Get element width or element height to make the circle to cover full element.
          size = Math.max(current.outerWidth(), current.outerHeight());

          ripple.css({
            height: size,
            width: size,
          });
        }

        // Custom settings animations.
        if (settings.duration !== null) {
          ripple.css({
            'animation-duration': settings.duration
          });
        }
        if (settings.timingFunction !== null) {
          ripple.css({
            'animation-timing-function': settings.timingFunction
          });
        }

        // Get the click position.
        // Logic = Position from page relation.
        // - Parent, Relative position to the page.
        pageX = e.pageX - current.offset().left - ripple.width() / 2;
        pageY = e.pageY - current.offset().top - ripple.height() / 2;

        // Define ripple position and add the '.on-animate' class.
        ripple.css({
          top: pageY + 'px',
          left: pageX + 'px'
        }).addClass(settings.onAnimate);
      });
      return false;
    };

    /**
     * Return to render and build to each matched elements.
     *
     * @see detectClickAction
     *
     * @param {DOM} elements
     * @returns {DOM}
     */
    var init = function (elements) {
      // Tracks all elements passed in the function.
      elements.each(function () {

        // Build the custom select elements.
        detectClickAction(this);
      });
      return elements;
    };

    /**
     * Return to render and build to each matched elements.
     */
    return init(this);
  };
})(jQuery);