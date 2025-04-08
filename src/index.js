// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  const priceValue = price.innerHTML;
  const quantityValue = quantity.value; // innerhtml possible?

  let subtotalValue = priceValue * quantityValue;

  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalValue.toFixed(2);
  return subtotalValue;
}

function calculateAll() {
  /*const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");

  allProducts.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  let totalValue = 0;
  allProducts.forEach((product) => {
    totalValue += updateSubtotal(product);
  });

  const total = document.querySelector("#total-value span");
  total.innerHTML = totalValue.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const productRow = target.closest(".product");

  productRow.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
});
