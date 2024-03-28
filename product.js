const params = new URLSearchParams(window.location.search);
const params1 = params.get("param");

fetch("/public/product.json")
  .then((res) => res.json())
  .then((data) => {
    const product = data?.find((item) => item.name === params1);

    const { name, price, discountPrice, image } = product;
    const detailsDiv = document.getElementById("ProductDetails");
    const div = document.createElement("div");
    div.classList.add("row");
    div.innerHTML = `
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        </div>
        <button class="carousel-control-prev slick-product-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next slick-product-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12">
          <h3 class="fw-bold fs-2">
            ${name}
          </h3>
          <div
            class="d-flex my-4 fw-bold justify-content-start gap-4 align-items-center"
          >
            <h3 class="text-success fs-2 fw-bold">${discountPrice} TK</h3>
            <h3 class="text-danger fs-2 fw-bold text-decoration-line-through">
              ${price} TK
            </h3>
          </div>
          <div class="d-flex justify-content-start gap-2 align-items-center">
            <button id="minusBtn"
              class="border p-2 border-success"
              style="border-radius: 45%"
            >
              <i class="fa-solid fa-minus" ></i>
            </button>
            <div class="px-5 border py-2 border-success rounded-2" id="quantityDisplay">1</div>
            <button
            id="plusBtn"
              class="border p-2 border-success"
              style="border-radius: 45%"
            >
              <i class="fa-solid fa-plus" ></i>
            </button>
          </div>
          <div
            class="d-flex my-4 fw-bold justify-content-start gap-4 align-items-center"
          >
            <button class="btn btn-success fs-5 py-3 fw-bold">
              <i class="fa-solid fa-cart-shopping"></i> Add To Cart
            </button>
            <button class="btn btn-success fs-5 py-3 fw-bold">
              <i class="fa-solid fa-truck"></i> Quick Order
            </button>
          </div>
          <div>
            <button class="btn btn-success py-4 w-100 fw-bold">
              <i class="fa-solid fa-phone"></i> For Call : +8801648177071
            </button>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 overflow-auto">
          <h3>Category</h3>
          <ul class="list-unstyled">
            <li class="border p-3">Electricity</li>
            <li class="border p-3">Health & Beauty</li>
            <li class="border p-3">Kitchen Tools</li>
            <li class="border p-3">Life Styles</li>
            <li class="border p-3">Smart Gadgets</li>
            <li class="border p-3">Furniture & Decor</li>
          </ul>
        </div>
`;

    detailsDiv.appendChild(div);

    const carouselInner = document.querySelector(".carousel-inner");
    image.forEach((imageUrl, index) => {
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");

      if (index === 0) {
        carouselItem.classList.add("active");
      }

      const img = document.createElement("img");
      img.src = imageUrl;
      img.classList.add("d-block", "w-100");
      img.alt = "Product Image";

      carouselItem.appendChild(img);
      carouselInner.appendChild(carouselItem);
    });
  });

// quantity increase and decrease

document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.getElementById("minusBtn");
  const plusBtn = document.getElementById("plusBtn");
  const quantityDisplay = document.getElementById("quantityDisplay");

  let quantity = 1;
  // Update quantity display function
  const updateQuantityDisplay = () => {
    quantityDisplay.textContent = quantity;
  };

  // Event listener for plus button
  plusBtn.addEventListener("click", () => {
    if (quantity < 10) {
      quantity++;
      updateQuantityDisplay();
    }
  });

  // Event listener for minus button
  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updateQuantityDisplay();
    }
  });
});

// slider

$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
});
