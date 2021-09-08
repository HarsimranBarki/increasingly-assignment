import create from "../../lib/create.js";
import AddOns from "./AddOns.js";

const ProductInformation = () => {
  let infoContainer = create("div", ["flex-grow", "p-5", "flex-40"]);

  let title = create("h2", ["font-semibold", "text-md"]);
  title.textContent =
    "MPX HD 1080p Outdoor PTZ Camera, 4x Optical Zoom with Color Night Vision, Metal Camera";
  infoContainer.append(title);

  // Revirew
  let reviewBox = create("div", ["mt-1", "flex", "items-center", "flex-wrap"]);

  for (let i = 0; i < 5; i++) {
    let img = create("img", ["mr-1"]);
    img.src = "./img/star.png";
    reviewBox.append(img);
  }
  infoContainer.append(reviewBox);

  let reviewTitle = create("p", [
    "text-blue",
    "text-xsm",
    "inline-block",
    "ml-1",
  ]);
  reviewTitle.textContent = "(12 Reviews)";

  reviewBox.append(reviewTitle);

  // Price
  let strikePrice = create("p", [
    "text-sm",
    "font-normal",
    "text-strike",
    "mt-3",
  ]);

  strikePrice.textContent = "Reg $299.99";

  infoContainer.append(strikePrice);

  let newPrice = create("div", ["mt-1", "flex", "items-center"]);
  let newPriceText = create("p", ["text-blue", "font-bold", "mr-1"]);
  newPriceText.textContent = "$199.99";
  let savePriceText = create("p", ["text-green", "font-bold"]);
  savePriceText.textContent = "SAVE $70.00 (35%)";

  newPrice.append(newPriceText);
  newPrice.append(savePriceText);

  infoContainer.append(newPrice);

  // Options
  let selectTitle = create("p", ["mt-4", "font-semibold"]);
  selectTitle.textContent = "Select Options";
  infoContainer.append(selectTitle);

  // Option Boxes
  let selectContainer = create("div", [
    "flex",
    "mt-2",
    "sm-flex-wrap",
    "gap-6",
  ]);
  let firstSelect = create("div", [
    "border",
    "border-orange",
    "text-orange",
    "p-5",
    "rounded",
    "w-20",
    "hover-bg-gray",
    "cursor-pointer",
  ]);
  firstSelect.innerHTML = `SINGLE <br />$199.99`;

  selectContainer.append(firstSelect);

  let secondSelect = create("div", [
    "border",
    "border-medium",
    "p-5",
    "rounded",
    "w-20",
    "hover-bg-gray",
    "cursor-pointer",
  ]);
  secondSelect.innerHTML = ` 2-PACK <br />$299.99`;
  selectContainer.append(secondSelect);

  let thirdSelect = create("div", [
    "border-gray",
    "border",
    "border-medium",
    "p-5",
    "rounded",
    "w-20",
    "hover-bg-gray",
    "text-gray",
    "cursor-pointer",
  ]);
  thirdSelect.innerHTML = ` 4-PACK <br />$399.99`;
  selectContainer.append(thirdSelect);

  infoContainer.append(selectContainer);

  // Incrementor
  let incContainer = create("div", ["flex", "mt-5", "items-center"]);
  let addNow = create("div", [
    "mr-2",
    "p-5",
    "border",
    "rounded",
    "flex",
    "text-lg",
    "hover-bg-gray",
    "items-center",
    "text-gray",
    "cursor-pointer",
    "justify-center",
    "w-7",
  ]);
  addNow.textContent = "+";

  incContainer.append(addNow);

  let nums = create("div", [
    "mr-2",
    "p-5",
    "border",
    "border-orange",
    "rounded",
    "flex",
    "text-lg",
    "hover-bg-gray",
    "items-center",
    "text-gray",
    "cursor-pointer",
    "justify-center",
    "w-7",
  ]);

  nums.textContent = "1";

  incContainer.append(nums);

  let subNow = create("div", [
    "mr-2",
    "p-5",
    "border",
    "rounded",
    "flex",
    "text-lg",
    "hover-bg-gray",
    "items-center",
    "text-gray",
    "cursor-pointer",
    "justify-center",
    "w-7",
  ]);
  subNow.textContent = "-";

  incContainer.append(subNow);

  infoContainer.append(incContainer);

  let hr = create("hr", [
    "mt-5",
    "mb-5",
    "bg-gray",
    "border-none",
    "text-gray",
    "h-2",
  ]);

  infoContainer.append(hr);

  infoContainer.append(AddOns());
  return infoContainer;
};

export default ProductInformation;
