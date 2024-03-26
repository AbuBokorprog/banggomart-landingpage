document.addEventListener("DOMContentLoaded", function () {
  const searchToggle = document.getElementById("searchToggle");
  const searchModal = new bootstrap.Modal(
    document.getElementById("searchModal")
  );

  searchToggle.addEventListener("click", function () {
    searchModal.toggle();
  });

  const searchSubmit = document.getElementById("searchSubmit");

  searchSubmit.addEventListener("click", function () {
    const searchInputValue = document.getElementById("searchInput").value;

    console.log("Searching for:", searchInputValue);
    // Close modal after search action
    searchModal.hide();
  });
});

$(".carousel").slick({
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  // arrows: true,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
  adaptiveHeight: true,
  cssEase: "linear",
});
