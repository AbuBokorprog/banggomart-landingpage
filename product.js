const params = new URLSearchParams(window.location.search);
const params1 = params.get("param");
console.log(params1);

fetch("/public/product.json")
  .then((res) => res.json())
  .then((data) => {
    const product = data?.find((item) => item.name === params1);
    console.log(product);
    const { name, price, discountPrice, image } = product;
    const detailsDiv = document.getElementById("ProductDetails");
    const div = document.createElement("div");
    div.classList.add("row");
    div.innerHTML = `
        <div class="col-lg-4 col-md-5 col-sm-12">
          <img src=${image[0]} alt="" />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
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
            <button
              class="border p-2 border-success"
              style="border-radius: 45%"
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <div class="px-5 border py-2 border-success rounded-2">1</div>
            <button
              class="border p-2 border-success"
              style="border-radius: 45%"
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <div
            class="d-flex my-4 fw-bold justify-content-between align-items-center"
          >
            <button class="btn btn-success fs-5 px-5 py-3 fw-bold">
              <i class="fa-solid fa-cart-shopping"></i> Add To Cart
            </button>
            <button class="btn btn-success fs-5 px-5 py-3 fw-bold">
              <i class="fa-solid fa-truck"></i> Quick Order
            </button>
          </div>
          <div>
            <button class="btn btn-success py-4 w-100 fw-bold">
              <i class="fa-solid fa-phone"></i> For Call : +8801648177071
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 overflow-auto">
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
  });
