// KingCh1ll //
// 10/24/2021 //

$(window).load(async () => {
  const scroll = new SmoothScroll('a[href*="#"]');
  const Popup = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: popup => {
      popup.addEventListener("mouseenter", Swal.stopTimer);
      popup.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  window.addEventListener("error", err => {
    Popup.fire({
      icon: "error",
      title: "Uh oh!",
      text: `An error occured. Please contact a support member with the following error. ${err.message}`,
    });
  });
});

$(document).ready(() => {
  let scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar-example",
  });

  let dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
  dataSpyList.forEach(dataSpyEl => {
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

  $(document).on("click", ".testDelete", async function() {
    await Swal.fire({
      title: `Are you sure you want to delete ${$(this).attr("name")}?`,
      text: "THIS ACTION CANNOT BE UNDONE!",
      icon: "warning",
      html: `Type <u>${$(this).attr("name")}</u> to confirm.`,
      showCancelButton: true,
      input: "text",
      confirmButtonText: "Delete",
      preConfirm: async name => {
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

  $(".counter").each(function() {
    $(".counter").animate(
      {
        Counter: this.text(),
      },
      {
        duration: 2000,
        easing: "swing",
        step: function() {
          this.text(`${Math.ceil(this.Counter)}+`);
        },
      },
    );
  });
});
