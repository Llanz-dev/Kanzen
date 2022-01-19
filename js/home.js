let productsInCart = JSON.parse(localStorage.getItem("ShoppingCart"));
if (!productsInCart) {
  productsInCart = [];
}

const show_table = document.getElementById("right-content");
const sub_total = document.getElementById("sub-total");
const charge = document.getElementById("charge-total");
const add_buttons = document.querySelectorAll(".cart-button");
const tax_show = document.getElementById("tax-total");
const link_receipt = document.getElementById("link-receipt");
const charge_button = document.getElementById("charge-button");

charge_button.onclick = () => {
  if (productsInCart.length <= 0) {
    alert("Add an items first");
    link_receipt.href = "";
  }
};

const countTheSumPrice = () => {
  let sumPrice = 0;
  productsInCart.forEach((product) => {
    sumPrice += product.price;
  });
  return sumPrice;
};

const calculateTheTax = () => {
  tax = parseFloat((countTheSumPrice() * 0.12).toFixed(2));
  return tax;
};

const updateShoppingCartHTML = () => {
  localStorage.setItem("ShoppingCart", JSON.stringify(productsInCart));
  if (productsInCart.length > 0) {
    let result = productsInCart.map((product) => {
      return (
        '<div class="each_item" id="item_chosen"><img src="' +
        product.image +
        '"><div><p><b class="name_item">' +
        product.name +
        '</b></p><p class="light-text" id="price-appear">₱' +
        product.basePrice.toLocaleString() +
        '.00</p></div><p class="times">' +
        product.quantity +
        'x</p><div><i class="far fa-times-circle delete-ic delete-button" id="' +
        product.id +
        '"></i><p>₱<span class="each-calculation" id="' +
        product.id +
        '">' +
        product.price.toLocaleString() +
        "</span></p></div></div>"
      );
    });
    show_table.innerHTML = result.join("");
    document.getElementById("items-count").textContent = productsInCart.length;
    sub_total.textContent = countTheSumPrice().toLocaleString();
    charge.textContent = parseInt(
      countTheSumPrice() + calculateTheTax()
    ).toLocaleString();
    tax_show.textContent = calculateTheTax().toLocaleString();
    localStorage.setItem("subTotal", countTheSumPrice().toLocaleString()); //store a key/value
    localStorage.setItem("tax", calculateTheTax().toLocaleString()); //store a key/value
    localStorage.setItem(
      "charge",
      parseInt(countTheSumPrice() + calculateTheTax()).toLocaleString()
    ); //store a key/value
    charge_button.style.cursor = "pointer";
    charge_button.style.disabled = false;
  } else {
    show_table.innerHTML = "";
    sub_total.textContent = "00";
    charge.textContent = "00";
    tax_show.textContent = "00";
    document.getElementById("items-count").textContent = 0;
    charge_button.style.cursor = "default";
    charge_button.style.disabled = true;
  }
};

const updateProductsInCart = (product) => {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].quantity += 1;
      productsInCart[i].price =
        productsInCart[i].basePrice * productsInCart[i].quantity;
      return;
    }
  }
  productsInCart.push(product);
};

add_buttons.forEach((product) => {
  product.onclick = (e) => {
    if (e.target.classList.contains("cart-button")) {
      let productToCart = {
        name: e.target.parentElement.querySelector(".name-item").textContent,
        image: e.target.parentElement.querySelector(".product-image").src,
        id: e.target.id,
        quantity: 1,
        price:
          +e.target.parentElement.children[2].children[0].textContent.replace(
            /,/g,
            ""
          ),
        basePrice:
          +e.target.parentElement.children[2].children[0].textContent.replace(
            /,/g,
            ""
          ),
      };
      updateProductsInCart(productToCart);
      updateShoppingCartHTML(productToCart);
    }
  };
});

show_table.addEventListener("click", (e) => {
  const delete_button = e.target.classList.contains("delete-button");
  if (delete_button) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.id) {
        if (delete_button) {
          productsInCart[i].quantity -= 1;
        }
        productsInCart[i].price =
          productsInCart[i].basePrice * productsInCart[i].quantity;
      }
      if (productsInCart[i].quantity <= 0) {
        productsInCart.splice(i, 1);
      }
    }
    updateShoppingCartHTML();
  }
});
updateShoppingCartHTML();

const add_item = document.querySelectorAll(".card button");
const all_btn = document.getElementById("all-btn");
const snack_btn = document.getElementById("snack-btn");
const tea_btn = document.getElementById("tea-btn");
const pizza_btn = document.getElementById("pizza-btn");
const noodle_btn = document.getElementById("noodle-btn");
const seafood_btn = document.getElementById("seafood-btn");
const section_all = document.getElementById("section-all");
const section_snack = document.getElementById("section-snack");
const section_tea = document.getElementById("section-tea");
const section_pizza = document.getElementById("section-pizza");
const section_noodle = document.getElementById("section-noodle");
const section_seafood = document.getElementById("section-seafood");

all_btn.onclick = () => {
  selection_hide(
    section_seafood,
    section_noodle,
    section_pizza,
    section_tea,
    section_snack,
    section_all
  );
};

snack_btn.onclick = () => {
  selection_hide(
    section_all,
    section_seafood,
    section_noodle,
    section_pizza,
    section_tea,
    section_snack
  );
};

tea_btn.onclick = () => {
  selection_hide(
    section_all,
    section_snack,
    section_seafood,
    section_noodle,
    section_pizza,
    section_tea
  );
};

pizza_btn.onclick = () => {
  selection_hide(
    section_all,
    section_snack,
    section_tea,
    section_seafood,
    section_noodle,
    section_pizza
  );
};

noodle_btn.onclick = () => {
  selection_hide(
    section_all,
    section_snack,
    section_tea,
    section_pizza,
    section_seafood,
    section_noodle
  );
};

seafood_btn.onclick = () => {
  selection_hide(
    section_all,
    section_snack,
    section_tea,
    section_pizza,
    section_noodle,
    section_seafood
  );
};

const selection_hide = (
  section_all,
  section_snack,
  section_tea,
  section_pizza,
  section_noodle,
  selection_selected
) => {
  section_all.style.display = "none";
  section_snack.style.display = "none";
  section_tea.style.display = "none";
  section_pizza.style.display = "none";
  section_noodle.style.display = "none";
  selection_selected.style.display = "flex";
};
