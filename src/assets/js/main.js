/* jshint jquery:true */
/* global anchors:true */

(function() {
    "use strict";

    var testimonialsContainer = document.getElementById("testimonials");

    if (testimonialsContainer) {
        var testimonialImages = [
            "twitter-levgimelfarb.png",
            "twitter-menonHari.png",
            "twitter-nathanchere.png",
            "twitter-patrickroos.png",
            "twitter-ritasker.png",
            "twitter-twith2sugars.png"
        ];

        var testimonialImage = testimonialImages[Math.floor(Math.random() * testimonialImages.length)];

        var html = "<p>" +
                        "<img src=\"/assets/images/testimonials/" + testimonialImage + "\" alt=\"" +
                        testimonialImage + "\">" +
                   "</p>";
        testimonialsContainer.innerHTML = html;
    }
})();

(function($) {
    "use strict";
    $(document).foundation();
    anchors.add(".docs-content h2, .docs-content h3, .docs-content h4, .docs-content h5, .docs-content h6");
})(jQuery);
