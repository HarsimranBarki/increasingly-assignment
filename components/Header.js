import create from "../lib/create.js";
const Header = () => {
  /** Structure
   * header
   * -> nav
   * --> button + img
   */
  let header = create("header", ["bg-gray", "h-lg"]);

  let nav = create("nav", [
    "max-w-lg",
    "m-auto",
    "flex",
    "items-center",
    "h-100",
    "row-reverse",
    "justify-left",
  ]);

  header.append(nav);

  let button = create("button", [
    "button",
    "text-blue",
    "text-sm",
    "font-medium",
    "flex",
    "items-center",
    "font-family-monsterrat",
  ]);

  button.textContent = "Back";

  //   <img src="./img/nav.svg" class="mr-1 h-8" />
  let img = create("img", ["mr-1", "h-8"]);
  img.src = "./img/nav.svg";

  nav.append(button);
  nav.append(img);
  return header;
};

export default Header;
