const street_address = document.getElementById("street_address");
const customer_name = document.getElementById("customer_name");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip_code = document.getElementById("zip_code");

document.getElementById("button_payment").onclick = () => {
  const customer_name_value = customer_name.value;
  const street_address_value = street_address.value;
  const city_value = city.value;
  const state_value = state.value;
  const zip_code_value = zip_code.value;

  if (street_address_value && city_value && state_value && zip_code_value && customer_name_value) {
    localStorage.setItem("customer-name-value", customer_name_value);
    localStorage.setItem("street-address-item", street_address_value);
    localStorage.setItem("city-item", city_value);
    localStorage.setItem("state-item", state_value);
    localStorage.setItem("zip-code-item", zip_code_value);
  }
};
