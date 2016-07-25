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

/* jshint ignore:start */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-32029905-1', 'auto');
ga('send', 'pageview');
/* jshint ignore:end */
