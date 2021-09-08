import create from "../../lib/create.js";
import ProductImage from "../Product/ProductImage.js";
import ProductInformation from "../Product/ProductInformation.js";
const ProductBox = () => {
  let productBox = create("div", [
    "flex",
    "border-right-1",
    "flex-60",
    "flex-wrap",
    "p-8",
    "border-right-none",
  ]);

  productBox.append(ProductImage());
  productBox.append(ProductInformation());

  return productBox;
};

export default ProductBox;
