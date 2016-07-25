/* jshint jquery:true */
/* global anchors:true */

(function() {
    "use strict";

    (function() {

        var testimonialsContainer = document.getElementById("testimonials");

        var testimonialImages = [
            "twitter-levgimelfarb.png",
            "twitter-menonHari.png",
            "twitter-nathanchere.png",
            "twitter-patrickroos.png",
            "twitter-ritasker.png",
            "twitter-twith2sugars.png"
        ];

        if (testimonialsContainer) {

            var testimonialImage = testimonialImages[Math.floor(Math.random() * testimonialImages.length)];

            var html = "<p>" +
                            "<img src=\"/assets/images/testimonials/" + testimonialImage + "\" alt=\"" +
                            testimonialImage + "\">" +
                       "</p>";
            testimonialsContainer.innerHTML = html;
        }
    })();

    (function($) {
        $(document).foundation();
    })(jQuery);

    anchors.add(".docs-content h2, .docs-content h3, .docs-content h4, .docs-content h5, .docs-content h6");
})();
