/*
KingCh1ll
Handle.js
*/

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SmoothScroll from "./smoothscroll";

$(window).load(async () => new SmoothScroll("a[href*=\"#\"]"));

$(document).ready(() => {
	let iframes = document.getElementsByTagName("iframe");

	AOS.init({
		// once: false,
		duration: "600",
	});

	console.log(
		"%cWHOA THERE!",
		"color: #314ef5; font-weight: bold;; font-size: 50px"
	);
	console.log(
		"%cIf someone told you to paste something here, it's VERY likely you're being scammed.",
		"color: white; font-size: 20px"
	);
	console.log(
		"%cBe careful!",
		"color: red; font-size: 25px"
	);

	$("#load").fadeOut()

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
