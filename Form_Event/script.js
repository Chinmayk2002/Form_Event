//Select elements
const pName = document.querySelector(".pName");
const pPrice = document.querySelector(".pPrice");
const pDesc = document.querySelector(".pDesc");
const pQty = document.querySelector(".pQty");
const category = document.querySelector(".category");
const msg = document.querySelector(".msg");
const form = document.querySelector("form");
const mouse = document.querySelector(".cord");

pName.onchange = function (e) {
  console.log("changed");
  msg.innerHTML = "onChange";
};

form.onsubmit = function (e) {
  // prevent default load behaviour
  e.preventDefault();
  console.log("Submitted");

  // get value from input fields

  const name = pName.value;
  const price = pPrice.value;
  const disc = pDesc.value;
  const qty = pQty.value;
  const selectcat = category.value;

  console.log({ name, price, disc, qty, selectcat });
};

form.onreset = function (e) {
  console.log("reset");
  e.preventDefault();
  pName.value = "";
  pPrice.value = "";
  pDesc.value = "";
  pQty.value = "";
  category.value = "";
};

pName.onfocus = function (e) {
  msg.innerHTML = "You are typing";
};
pName.onblur = function (e) {
  msg.innerHTML = "";
};

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  mouse.innerHTML = " X = " + x + " , " + " Y = " + y;
});
