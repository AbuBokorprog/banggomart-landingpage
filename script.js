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

// category
const categoryCarousel = document.querySelector(".category-carousel");
fetch("/category.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data?.map((item) => {
      const card = document.createElement("div");

      card.innerHTML = `
      <div
          class="card text-center mx-4 bg-light border-0"
          style="width: 10rem"
        >
        <img src="${item.image}" class="card-img-top category-img" alt="...">
        <div class="card-body">
          <p class="card-text">${item.category}</p>
          <p class="card-text">${item.total_items} items</p>
        </div>
        </div>
        `;
      categoryCarousel.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

$(".category-carousel").slick({
  infinite: true,
  speed: 400,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
