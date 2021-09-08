import create from "../../lib/create.js";
import PriceContainer from "../Cart/PriceContainer.js";

const CartBox = () => {
  // Level 0
  let cart = create("div", ["flex-10"]);
  // Level 1
  let cartPadding = create("div", ["p-8"]);
  // Level 2
  let cartHeading = create("h3", ["font-medium", "text-md"]);
  cartHeading.textContent = "Price Summay";
  // 2+
  let hrTop = create("hr", [
    "bg-gray",
    "border-none",
    "border-bottom-dashed",
    "text-gray",
    "h-1",
    "w-full",
    "mt-3",
  ]);

  let priceContainerThree = create("div", [
    "font-normal",
    "mt-3",
    "text-sm",
    "flex",
    "items-center",
    "w-full",
    "text-darkgray",
    "justify-between",
    "align-start",
  ]);

  let p31 = create("p", ["text"]);
  p31.textContent = "Total Price";
  let p32 = create("p", ["text-blue", "font-bold", "text-lg", "text-right"]);
  p32.textContent = " $441.95";
  let span = create("span", ["text-green", "text-sm", "text-right"]);
  span.innerText = "SAVE $70.00 (35%)";
  let br = create("br", ["br"]);
  p32.append(br);
  p32.append(span);

  let hr = create("hr", [
    "bg-gray",
    "border-none",
    "border-bottom-dashed",
    "text-gray",
    "h-1",
    "w-full",
  ]);

  let button = create("button", [
    "button",
    "p-7",
    "text-md",
    "font-semibold",
    "mt-3",
    "rounded",
    "button-bg--orange",
    "w-100",
    "h--48",
    "font-inherit",
  ]);

  button.textContent = "Add 4 Items To Cart";

  // 2+
  cartPadding.append(cartHeading);
  cartPadding.append(hrTop);
  cartPadding.append(PriceContainer());
  cartPadding.append(hr);
  priceContainerThree.append(p31);
  priceContainerThree.append(p32);
  cartPadding.append(priceContainerThree);
  cartPadding.append(button);

  cart.append(cartPadding);
  return cart;
};

export default CartBox;
