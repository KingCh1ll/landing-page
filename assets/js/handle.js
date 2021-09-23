/*
KingCh1ll
Handle.js
*/

var scroll = new SmoothScroll('a[href*="#"]');
var online = true;
var Popup;

$(window).load(async () => {
    Popup = Swal.mixin({
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

    if (typeof Storage !== undefined) {
        if (localStorage.cookies === "accepted") {
            return;
        }

        Swal.fire({
            title: "Howdy, visitor!",
            text: "Welcome to Ch1ll Studios' official website. May I show you around? It'll be quick!",
            imageUrl: "/assets/images/Ch1llStudios.png",
            imageHeight: 100,
            imageWidth: 100,
            showCancelButton: false,
            showDenyButton: true,
            confirmButtonText: "<span>Show me around!</span>",
            denyButtonText: "<span>No thank you.</span>",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Meet Ch1ll Studios!",
                    text: "Cut your dollars! Our services are not only premium, but totally free.",
                    confirmButtonText: "<span>Cool!</span>",
                    showCancelButton: false,
                    showDenyButton: true,
                    denyButtonText: "<span>Bye!</span>",
                }).then(() => {
                    Swal.fire({
                        title: "Meet, Ch1llBlox!",
                        text: "The first service on our list is Ch1llBlox. Ch1llBlox is a prenium, but yet free Discord bot. Ch1llBlox both keeps your server protected and boosts the activity within the server! Ch1llBlox is also EASILY customizable. Oh yeah, he also plays music and a whole lot of other things like games and such!",
                        imageUrl: "/assets/images/Ch1llBlox.png",
                        imageHeight: 100,
                        imageWidth: 100,
                        confirmButtonText: "<span>Sick! 🤟</span>",
                        showCancelButton: false,
                        showDenyButton: true,
                        denyButtonText: "<span>Bye!</span>",
                    }).then(() => {
                        Swal.fire({
                            title: "The End... But more coming soon!",
                            text: "Ch1ll Studios is constantly working on new services! We'll have more services soon for you to enjoy :)",
                            icon: "info",
                            confirmButtonText: "<span>Ah.</span>",
                        }).then(() => {
                            Swal.fire({
                                title: "🍪 We use cookies!",
                                text: "We use cookies to improve our website. By clicking okay, you won't see this screen ever again.",
                                confirmButtonText: "<span>Okay!</span>",
                                showCancelButton: false,
                                showDenyButton: true,
                                denyButtonText: "<span>SHUT!</span>",
                            }).then((response) => {
                                if (response.isConfirmed) {
                                    localStorage.cookies = "accepted";
                                }
                            });
                        });
                    });
                });
            } else {
                Swal.fire({
                    title: "🍪 We use cookies!",
                    text: "We use cookies to improve our website. By clicking okay, you won't see this screen ever again.",
                    confirmButtonText: "<span>Okay!</span>",
                    showCancelButton: false,
                    showDenyButton: true,
                    denyButtonText: "<span>SHUT!</span>",
                }).then((response) => {
                    if (response.isConfirmed) {
                        localStorage.cookies = "accepted";
                    }
                });
            }
        });
    } else {
        Swal.fire({
            title: "Uh oh!",
            text: "Your browser doesn't support local storage! We need you to update your browser or use a different one before using our website.",
            icon: "error",
            confirmButtonText: "<span>😞 Dang...</span>",
        }).then(() => {
            window.close();
        });
    }

    setInterval(() => {
        if (navigator.onLine !== online) {
            if (navigator.onLine === false) {
                Popup.fire({
                    icon: "error",
                    title: "Uh oh! You're not connected.",
                });
            }

            if (navigator.onLine === true) {
                Popup.fire({
                    icon: "success",
                    title: "Reconnected!",
                });
            }

            online = navigator.onLine;
        }
    }, 5 * 1000);
});

$(document).ready(async () => {
    new bootstrap.ScrollSpy(document.body, {
        target: "#navShrink",
    });

    var iframes = document.getElementsByTagName("iframe");

    for (var iframe of iframes) {
        iframe.setAttribute("sandbox", "allow-popups allow-forms");
    }

    AOS.init({
        once: false,
        startEvent: "load",
        duration: "600",
    });

    $(document).on("click", ".deletebot", async () => {
        await Swal.fire({
            title: `Are you sure you want to delete ${$(this).attr("name")}?`,
            text: "THIS ACTION CANNOT BE UNDONE!",
            icon: "warning",
            html: `Type <u>${$(this).attr("name")}</u> to confirm.`,
            showCancelButton: true,
            input: "text",
            confirmButtonText: "Delete",
            preConfirm: async (name) => {
                if (name.toLowerCase() !== $(this).attr("name").toLowerCase()) {
                    Swal.update({
                        title: "Cancelled",
                        html: "",
                    });

                    await wait(1);
                } else {
                    await fetch(`/api/bots/${$(this).attr("id")}`, {
                        method: "DELETE",
                    });

                    location.href = "/";
                }
            },
        });
    });
});
