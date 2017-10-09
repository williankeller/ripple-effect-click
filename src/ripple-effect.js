(function ($, document) {
  'use strict';

  /**
   * Define global function to set an element ripple effect.
   *
   * Basic usage:
   * $('.to-ripple').rippleEfect();
   *
   * @param {Object} options
   * @return {jQuery}
   */
  $.fn.rippleEffect = function (options) {

    /**
     * Default configuration parameters.
     *
     * @type {Object}
     */
    var defaults = {
      // Submit form when select option is selected.
      element: '.to-ripple'
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
        // Intance variables to use.
        var current = $(this), ripple, size, pageX, pageY;

        // Create ripple element if still don't exist.
        if (current.find('.ripple').length === 0) {
          // Prepare parent to get the ripple element.
          current.addClass('prepare-ripple');

          // Insert the ripple element into the content element.
          current.prepend('<span class="ripple"></span>');
        }
        // Define the created ripple into a variable.
        ripple = current.find('.ripple');

        // If multiple clicks exists, stop previus animation.
        ripple.removeClass('on-animate');

        // Define the ripple size.
        if (! ripple.height() && ! ripple.width()) {
          // Get element width or element height to make the circle to cover full element.
          size = Math.max(current.outerWidth(), current.outerHeight());

          ripple.css({
            height: size,
            width: size
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
        }).addClass('on-animate');
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
})(jQuery, document);