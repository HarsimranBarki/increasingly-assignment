import create from "../lib/create.js";
import CartBox from "./layout/CartBox.js";
import Popup from "./layout/Popup.js";
import ProductBox from "./layout/ProductBox.js";

const Main = () => {
  const main = create("main", [
    "root_container",
    "m-auto",
    "flex",
    "flex-wrap",
    "p-5",
    "w-100",
    "md-flex-col",
  ]);

  main.append(ProductBox());
  main.append(CartBox());
  main.append(Popup());
  return main;
};

export default Main;
