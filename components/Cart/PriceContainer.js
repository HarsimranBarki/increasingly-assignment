import create from "../../lib/create.js";

const PriceContainer = () => {
  // ---- 1
  let priceContainer = create("div", ["mt-3", "mb-3"]);
  let priceContainerOne = create("div", [
    "font-normal",
    "text-sm",
    "flex",
    "items-center",
    "w-full",
    "text-darkgray",
    "justify-between",
  ]);
  let p11 = create("p", ["text"]);
  p11.textContent = "Main Product";

  let p12 = create("p", ["text"]);
  p12.textContent = "$199.99";

  // ---- 2
  let priceContainerTwo = create("div", [
    "font-normal",
    "mt-3",
    "text-sm",
    "flex",
    "items-center",
    "w-full",
    "text-darkgray",
    "justify-between",
  ]);

  let p21 = create("p", ["text"]);
  p21.textContent = "3 add-ons selected";

  let p22 = create("p", ["text"]);
  p22.textContent = "+ $242.96";

  // --- 3

  priceContainerOne.append(p11);
  priceContainerOne.append(p12);

  priceContainerTwo.append(p21);
  priceContainerTwo.append(p22);

  priceContainer.append(priceContainerOne);
  priceContainer.append(priceContainerTwo);

  return priceContainer;
};

export default PriceContainer;
