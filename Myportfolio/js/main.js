jQuery(document).ready(function () {
  "use strict";

  $(".slider").ripples({
    dropRadius: 10,
    perturbance: 0.01,
  });

  var typed = new Typed(".text", {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
      "I am <strong class = 'primary' >Abhishek Jaiswal.</strong>",
      "I am a <strong class = 'secondary' >Programmer.</strong>",
      "I am a <strong class = 'secondary' >Developer.</strong>",
    ],
    stringsElement: null,

    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 70,

    /**
     * @property {number} startDelay time before typing starts in milliseconds
     */
    startDelay: 20,

    /**
     * @property {number} backSpeed backspacing speed in milliseconds
     */
    backSpeed: 100,

    /**
     * @property {boolean} smartBackspace only backspace what doesn't match the previous string
     */
    smartBackspace: true,

    /**
     * @property {boolean} shuffle shuffle the strings
     */
    shuffle: false,

    /**
     * @property {number} backDelay time before backspacing in milliseconds
     */
    backDelay: 700,

    /**
     * @property {boolean} fadeOut Fade out instead of backspace
     * @property {string} fadeOutClass css class for fade animation
     * @property {boolean} fadeOutDelay Fade out delay in milliseconds
     */
    fadeOut: false,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,

    /**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
    loop: true,
    loopCount: Infinity,

    /**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,
  });

  $(window).scroll(function () {
    var top = $(
      window
    ).scrollTop(); /*to count how much user has scrolled from the top */
    if (top > 70) {
      $("header").addClass("transparent-bg");
    } else {
      if ($("header").hasClass("transparent-bg")) {
        $("header").removeClass("transparent-bg");
      }
    }
  });
});
