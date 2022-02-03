/*
KingCh1ll
Handle.js
*/

let scroll = new SmoothScroll("a[href*=\"#\"]");
let online = true;

$(window).load(async () => {
	let Popup = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (popup) => {
			popup.addEventListener("mouseenter", Swal.stopTimer);
			popup.addEventListener("mouseleave", Swal.resumeTimer);
		},
	});

	window.addEventListener("error", (err) => {
		Popup.fire({
			icon: "error",
			title: "Uh oh!",
			text: `An error occured. Please contact a support member with the following error. ${err.message}`,
		});
	});

	let iframes = document.getElementsByTagName("iframe");

	for (let iframe of iframes) {
		iframe.setAttribute("sandbox", "allow-popups allow-forms");
	}
});

$(document).ready(() => {
	let scrollSpy = new bootstrap.ScrollSpy(document.body, {
		target: "#navbar-example",
	});

	let dataSpyList = [].slice.call(
		document.querySelectorAll("[data-bs-spy=\"scroll\"]")
	);
	dataSpyList.forEach((dataSpyEl) => {
		bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();
	});

	let iframes = document.getElementsByTagName("iframe");

	for (let iframe of iframes) {
		iframe.setAttribute("sandbox", "allow-popups allow-forms");
	}

	AOS.init({
		once: false,
		startEvent: "load",
		duration: "600",
	});

	$(document).on("click", ".social", async function () {
		await Swal.fire({
			title: "Whoa there!",
			text: `Are you sure you want to go to ${$(this).attr("link")}?`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yep!",
			preConfirm: async (name) => {
        window.location = $(this).attr("link");
			},
		});
	});

	$(".counter").each(function () {
		$(".counter").animate(
			{
				Counter: this.text(),
			},
			{
				duration: 2000,
				easing: "swing",
				step: function () {
					this.text(`${Math.ceil(this.Counter)}+`);
				},
			}
		);
	});
});
