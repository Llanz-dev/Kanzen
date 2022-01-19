// print();
let productsInCart = JSON.parse(localStorage.getItem("ShoppingCart"));
if (!productsInCart) {
  productsInCart = [];
}

const show_items = document.getElementById("show-items");
const reference_number = document.getElementById("reference-number");

const referenceNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

reference_number.textContent = referenceNumber(1000, 9999);

if (productsInCart.length > 0) {
  let result = productsInCart.map((product) => {
    return `<tr><td class="col-md-9">${product.name} ${product.quantity}x</td><td class="col-md-3"><i class="fa fa-inr"></i>₱ ${product.price}</td></tr>`;
  });
  show_items.innerHTML =
    result.join("") +
    ` <tr>
  <td class="text-right">
      <p>
          <strong>Sub total:</strong>
      </p>
      <p>
          <strong>Tax (12%): </strong>
      </p>
  </td>
  <td>
      <p>
          <strong><i class="fa fa-inr"></i>₱ ${localStorage.getItem(
            "subTotal"
          )}</strong>
      </p>


      <p>
          <strong><i class="fa fa-inr"></i>₱ ${localStorage.getItem(
            "tax"
          )}</strong>
      </p>
  </td>
</tr>
<tr>

  <td class="text-right">
      <h2><strong>Total: </strong></h2>
  </td>
  <td class="text-left text-danger">
      <h2><strong><i class="fa fa-inr"></i>${localStorage.getItem(
        "charge"
      )}</strong></h2>
  </td>
</tr>`;
} else {
  show_items.innerHTML = "";
}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById("reference-number").textContent =
  getRandomNumberBetween(1000, 9999);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
let month = months[d.getMonth()];

document.getElementById("current-date").textContent =
  " " + month + " " + d.getDate() + ", " + d.getFullYear();


const street_address = document.getElementById('street_address')
const city = document.getElementById('city')
const state = document.getElementById('state')
const zip_code = document.getElementById('zip_code')

street_address.textContent = localStorage.getItem('street-address-item')
city.textContent = localStorage.getItem('city-item')
state.textContent = localStorage.getItem('state-item')
zip_code.textContent = localStorage.getItem('zip-code-item')
