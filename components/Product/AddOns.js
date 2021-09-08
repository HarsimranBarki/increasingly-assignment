import create from "../../lib/create.js";

const AddOns = () => {
  let container = create("div", ["div"]);
  let heading = create("p", ["font-semibold"]);
  heading.textContent = "Add-ons Products";

  container.append(heading);

  for (let i = 1; i <= 3; i++) {
    let itemContainer = create("div", [
      "flex",
      "items-center",
      "p-5",
      "flex-wrap",
    ]);

    let formGroup = create("div", ["form-group"]);
    let checkbox = create("input", ["checkbox"]);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `c${i}`);
    let label = create("label", ["label"]);
    label.setAttribute("for", `c${i}`);

    formGroup.append(checkbox);
    formGroup.append(label);

    itemContainer.append(formGroup);
    let itemImage = create("img", ["ml-2", "mr-2"]);
    itemImage.src = `./img/add_one_${i}.png`;

    itemContainer.append(itemImage);

    // Item Information
    let box = create("div", ["box"]);
    let boxTitle = create("h2", ["font-normal", "text-sm"]);
    boxTitle.textContent =
      "DEAL OF THE DAY! 4K Ultra HD 8 Channel Security DVR with...";

    box.append(boxTitle);
    itemContainer.append(box);

    // Stars
    let start = create("div", ["mt-1", "flex", "items-center"]);
    for (let i = 0; i < 5; i++) {
      let img = create("img", ["mr-1", "text-xsm"]);
      img.src = "./img/star.png";
      start.append(img);
    }
    let startTitle = create("p", [
      "text-blue",
      "text-xsm",
      "inline-block",
      "ml-1",
    ]);
    startTitle.textContent = "(12 Reviews)";
    box.append(start);
    start.append(startTitle);

    // Price
    let priceTitle = create("p", [
      "text-sm",
      "font-normal",
      "text-strike",
      "mt-3",
    ]);
    priceTitle.textContent = "Reg $199.99";

    box.append(priceTitle);

    // SubPrice
    let subPriceBox = create("div", ["mt-1", "flex", "items-center"]);
    let firstPrice = create("p", ["text-blue", "font-bold", "mr-1"]);
    firstPrice.textContent = "$129.99";
    subPriceBox.append(firstPrice);
    let secondPrice = create("p", ["text-green", "font-bold"]);
    secondPrice.textContent = "SAVE $70.00 (35%)";
    subPriceBox.append(secondPrice);

    box.append(subPriceBox);

    // Edit
    let singleBox = create("div", ["mt-3", "font-normal"]);
    singleBox.innerHTML = `SINGLE <a href="#" class="text-blue ml-1">Edit</a>`;

    box.append(singleBox);
    // End
    container.append(itemContainer);
  }

  return container;
};

export default AddOns;
