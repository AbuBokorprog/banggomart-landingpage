// banner slider

$(".carousel").slick({
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
  adaptiveHeight: true,
  cssEase: "linear",
});

// category carousel
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
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-product-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-product-next"><i class="fa-solid fa-chevron-right"></i></button>',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-product-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-product-next"><i class="fa-solid fa-chevron-right"></i></button>',
      },
    },
  ],
});

// hot, new and regular product carousel

$(".hot-carousel").slick({
  infinite: true,
  speed: 400,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:
    '<button type="button" class="slick-product-prev"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-product-next"><i class="fa-solid fa-chevron-right"></i></button>',
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

// add cart button and price show on hover

const cardElements = document.querySelectorAll(".card");
cardElements.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector(".add-to-cart-btn").style.display = "block";
    card.querySelector(".price").style.display = "block";
    card.querySelector(".add-to-cart-btn").style.animation =
      "bottomToTop 2s ease forwards";
  });
  card.addEventListener("mouseleave", () => {
    card.querySelector(".add-to-cart-btn").style.display = "none";
    card.querySelector(".price").style.display = "none";
  });
});
