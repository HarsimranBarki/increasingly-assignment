import create from "../../lib/create.js";

const Popup = () => {
  let popup = create("div", ["camera_preview_box", "hidden"]);
  popup.setAttribute("id", "camera_popup");
  let image = create("img", ["w-popup"]);
  image.setAttribute("id", ["popup_image"]);

  popup.append(image);

  return popup;
};

export default Popup;
