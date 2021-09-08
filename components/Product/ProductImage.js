import create from "../../lib/create.js";

const ProductImage = () => {
  let productContainer = create("div", ["p-5", "flex-40"]);
  let mainImage = create("div", ["flex", "justify-center", "items-center"]);
  let image = create("img", ["p-5", "w-100"]);
  image.setAttribute("id", "gallery_preview");
  image.src = "./img/camera_main.png";

  mainImage.append(image);
  productContainer.append(mainImage);

  // gallery
  let galleryContainer = create("div", [
    "mt-8",
    "flex",
    "gap-5",
    "justify-center",
    "w-100",
    "flex-wrap",
  ]);

  for (let i = 1; i < 5; i++) {
    let galleryItem = null;
    if (i == 1) {
      galleryItem = create("img", [
        "gallery_item",
        "gallery_item_active",
        "border",
        "border-gray",
      ]);
    } else {
      galleryItem = create("img", ["gallery_item", "border", "border-gray"]);
    }
    galleryItem.src = `./img/camera_preview_${i}.png`;
    galleryItem.setAttribute("data-imageId", i);
    galleryContainer.append(galleryItem);
  }

  productContainer.append(galleryContainer);
  return productContainer;
};

export default ProductImage;
