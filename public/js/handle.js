/*
KingCh1ll
Handle.js
*/

import $ from "jquery/src/jquery.js";
import bootstrap from "bootstrap/dist/js/bootstrap";
import AOS from "aos/dist/aos.js";
import SmoothScroll from "smooth-scroll/dist/smooth-scroll.polyfills.js";

$(window).on("load", async () => new SmoothScroll('a[href*="#"]'));
$(document).ready(() => {
	AOS.init({
		once: false,
		startEvent: "load",
		duration: "600",
	});

	console.log("%cWHOA THERE!", "color: #314ef5; font-weight: bold;; font-size: 50px");
	console.log("%cIf someone told you to paste something here, it's VERY likely you're being scammed.", "color: white; font-size: 20px");
	console.log("%cPasting something here could give hackers access to your account!", "color: red; font-size: 25px");

	$(".counter").each(function () {
		$(this)
			.prop("Counter", 0)
			.animate({
				Counter: $(this).text(),
			}, {
				duration: 4000,
				easing: "swing",
				step: function (now) {
					now = Number(Math.ceil(now)).toLocaleString('en');

					$(this).text(now);
				},
			});
	});
});
