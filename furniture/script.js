document.addEventListener("DOMContentLoaded", function () {
  // Wishlist functionality
  const wishlistIcons = document.querySelectorAll(".wishlist-icon");
  wishlistIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        this.setAttribute("icon", "mdi:heart");
      } else {
        this.setAttribute("icon", "mdi:heart-outline");
      }
    });
  });

  // Navigation functionality
  const navLinks = document.querySelectorAll(".nav-link");
  const productGrids = document.querySelectorAll(".product-grid");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links and add to clicked link
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      // Hide all product grids
      productGrids.forEach((grid) => grid.classList.remove("active"));

      // Show the selected product grid
      const category = this.getAttribute("data-category");
      document.getElementById(category).classList.add("active");
    });
  });
});

// sale section
function updateCountdown() {
  // Set the date we're counting down to (24 hours from now)
  const countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

  // Update the countdown every 1 second
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, "0");
    document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerHTML = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").innerHTML = String(seconds).padStart(
      2,
      "0"
    );

    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".super-sale").style.display = "none";
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  updateCountdown();
});

// best selling section
document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dot");
  const productSets = [
    [
      `<div class='col-lg-3 col-md-6'><div class='product-card'><span class='discount-badge'>-10% OFF</span><img src='images/bluechair.png' alt='Luxury Sofa' class='product-img mt-5'><div class='product-info'><div class='product-title-row'><h3 class='product-title'>Luxury Sofa</h3><div class='rating'><iconify-icon class='rating-star' icon='material-symbols:star'></iconify-icon><span class='rating-number'>4.9</span></div></div><div class='product-price-row'><div class='product-price'><span class='current-price'>$230.00</span><span class='original-price-product'>$250.00</span></div><span class='delivery-info'>• 2 days delivery</span></div></div></div></div>`,
      `<div class='col-lg-3 col-md-6'><div class='product-card'><span class='discount-badge'>-10% OFF</span><img src='images/bluechair.png' alt='Luxury Sofa' class='product-img mt-5'><div class='product-info'><div class='product-title-row'><h3 class='product-title'>Luxury Sofa</h3><div class='rating'><iconify-icon class='rating-star' icon='material-symbols:star'></iconify-icon><span class='rating-number'>4.9</span></div></div><div class='product-price-row'><div class='product-price'><span class='current-price'>$230.00</span><span class='original-price-product'>$250.00</span></div><span class='delivery-info'>• 2 days delivery</span></div></div></div></div>`,
      `<div class='col-lg-3 col-md-6'><div class='product-card'><span class='discount-badge'>-10% OFF</span><img src='images/bluechair.png' alt='Luxury Sofa' class='product-img mt-5'><div class='product-info'><div class='product-title-row'><h3 class='product-title'>Luxury Sofa</h3><div class='rating'><iconify-icon class='rating-star' icon='material-symbols:star'></iconify-icon><span class='rating-number'>4.9</span></div></div><div class='product-price-row'><div class='product-price'><span class='current-price'>$230.00</span><span class='original-price-product'>$250.00</span></div><span class='delivery-info'>• 2 days delivery</span></div></div></div></div>`,
      `<div class='col-lg-3 col-md-6'><div class='product-card'><span class='discount-badge'>-10% OFF</span><img src='images/bluechair.png' alt='Luxury Sofa' class='product-img mt-5'><div class='product-info'><div class='product-title-row'><h3 class='product-title'>Luxury Sofa</h3><div class='rating'><iconify-icon class='rating-star' icon='material-symbols:star'></iconify-icon><span class='rating-number'>4.9</span></div></div><div class='product-price-row'><div class='product-price'><span class='current-price'>$230.00</span><span class='original-price-product'>$250.00</span></div><span class='delivery-info'>• 2 days delivery</span></div></div></div></div>`,
    ],
    [
      `<div class='col-lg-3 col-md-6'><div class='product-card'><span class='discount-badge'>-15% OFF</span><img src='images/sofa-yellow.png' alt='Modern Chair' class='product-img mt-5'><div class='product-info'><div class='product-title-row'><h3 class='product-title'>Modern Chair</h3><div class='rating'><iconify-icon class='rating-star' icon='material-symbols:star'></iconify-icon><span class='rating-number'>4.8</span></div></div><div class='product-price-row'><div class='product-price'><span class='current-price'>$210.00</span><span class='original-price-product'>$245.00</span></div><span class='delivery-info'>• 1 day delivery</span></div></div></div></div>`,
      `<div class='col-lg-3 col-md-6'><div class='product-card'><span class='discount-badge'>-15% OFF</span><img src='images/sofa-yellow.png' alt='Modern Chair' class='product-img mt-5'><div class='product-info'><div class='product-title-row'><h3 class='product-title'>Modern Chair</h3><div class='rating'><iconify-icon class='rating-star' icon='material-symbols:star'></iconify-icon><span class='rating-number'>4.8</span></div></div><div class='product-price-row'><div class='product-price'><span class='current-price'>$210.00</span><span class='original-price-product'>$245.00</span></div><span class='delivery-info'>• 1 day delivery</span></div></div></div></div>`,
      `<div class='col-lg-3 col-md-6'><div class='product-card'><span class='discount-badge'>-15% OFF</span><img src='images/sofa-yellow.png' alt='Modern Chair' class='product-img mt-5'><div class='product-info'><div class='product-title-row'><h3 class='product-title'>Modern Chair</h3><div class='rating'><iconify-icon class='rating-star' icon='material-symbols:star'></iconify-icon><span class='rating-number'>4.8</span></div></div><div class='product-price-row'><div class='product-price'><span class='current-price'>$210.00</span><span class='original-price-product'>$245.00</span></div><span class='delivery-info'>• 1 day delivery</span></div></div></div></div>`,
      `<div class='col-lg-3 col-md-6'><div class='product-card'><span class='discount-badge'>-15% OFF</span><img src='images/sofa-yellow.png' alt='Modern Chair' class='product-img mt-5'><div class='product-info'><div class='product-title-row'><h3 class='product-title'>Modern Chair</h3><div class='rating'><iconify-icon class='rating-star' icon='material-symbols:star'></iconify-icon><span class='rating-number'>4.8</span></div></div><div class='product-price-row'><div class='product-price'><span class='current-price'>$210.00</span><span class='original-price-product'>$245.00</span></div><span class='delivery-info'>• 1 day delivery</span></div></div></div></div>`,
    ],
  ];
  let currentSet = 0;
  const productRow = document.getElementById("product-row");
  const prevBtn = document.getElementById("prev-products-btn");
  const nextBtn = document.getElementById("next-products-btn");

  function updateSlider(index) {
    productRow.innerHTML = productSets[index].join("");
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  nextBtn.onclick = function () {
    currentSet = (currentSet + 1) % productSets.length;
    updateSlider(currentSet);
  };
  prevBtn.onclick = function () {
    currentSet = (currentSet - 1 + productSets.length) % productSets.length;
    updateSlider(currentSet);
  };
  dots.forEach((dot, index) => {
    dot.onclick = function () {
      currentSet = index;
      updateSlider(currentSet);
    };
  });
});
