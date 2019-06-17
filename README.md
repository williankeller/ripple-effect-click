# Ripple Effect Click

[![Build Status](https://travis-ci.org/williankeller/ripple-effect-click.svg?branch=master)](https://travis-ci.org/williankeller/ripple-effect-click)

You probably have noticed that ripple effect (known as "ripple") when you click on an element on your Android.
Now you can implement it to your application very fast and easily.

### How to use:
Simple and standard use, just define the class or element you want to add the ripple effect.
This example will apply the ripple effect to all buttons you have.
```javascript
$('button').rippleEffect();
```

You also can define more than one element into the same definition, just like this:
```javascript
$('button, .to-ripple, .element-test').rippleEffect();
```

### Extra configurations:
There are some extra settings you can apply to the ripple's configuration:

**Animation properties:**
* *CSS animation-timing-function Property:*
    - `timingFunction`: linear
    - ```javascript
      $('button').rippleEffect({
          duration: '2s'
      });
      ```
* *CSS animation-duration Property:*
    - `duration`: '0.65s'
    - ```javascript
      $('button').rippleEffect({
          duration: '2s'
      });
      ```

### Contribution
Want to contribute to this extension? The quickest way is to open a [pull request on GitHub](https://help.github.com/articles/using-pull-requests).


### Support
If you encounter any problems or bugs, please open an issue on [GitHub](https://github.com/williankeller/ripple-effect-click/issues).
Need help setting up or want to customize this extension to meet your business needs? Please let me know!
