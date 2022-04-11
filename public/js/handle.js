/*
KingCh1ll
Handle.js
*/

let scroll = new SmoothScroll("a[href*=\"#\"]");
let online = true;

$(window).load(async () => {
	const Popup = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3 * 1000,
		timerProgressBar: true,
		didOpen: (popup) => {
			popup.addEventListener("mouseenter", Swal.stopTimer);
			popup.addEventListener("mouseleave", Swal.resumeTimer);
		},
		showClass: {
			popup: "animate__animated animate__fadeInDown",
		},
		hideClass: {
			popup: "animate__animated animate__fadeOutUp",
		},
	});

	function updateStatus() {
		if (navigator.onLine === true) {
			Popup.fire({
				icon: "success",
				title: "Back Online",
				text: `You're back online!`,
			});
		} else {
			Popup.fire({
				icon: "error",
				title: "Uh oh!",
				text: `You're offline!`,
			});
		}
	}

	window.addEventListener("online", updateStatus);
	window.addEventListener("offline", updateStatus);

	window.addEventListener("error", (err) => {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: err.message,
			footer: "<a href=\"/support\">Contact Support</a>"
		})
	});

	let iframes = document.getElementsByTagName("iframe");

	for (let iframe of iframes) {
		iframe.setAttribute("sandbox", "allow-popups allow-forms");
	}
});

$(document).ready(() => {
	let iframes = document.getElementsByTagName("iframe");

	for (let iframe of iframes) {
		iframe.setAttribute("sandbox", "allow-popups allow-forms");
	}

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
