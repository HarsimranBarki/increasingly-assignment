import Header from "./components/Header.js";
import Main from "./components/Main.js";

class View {
  constructor() {}

  render() {
    let container = document.getElementById("app");
    container.appendChild(Header());
    container.appendChild(Main());
  }

  create(tag, className) {
    let ele = document.createElement(tag);
    ele.classList.add(...className);
    return ele;
  }
}
class Model {
  constructor() {
    this.state = [];
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  handleRender() {
    this.view.render();
  }
}

const app = new Controller(new Model(), new View());
app.handleRender();

// Handling UI
// Initializing Selectors
let popup = document.getElementById("camera_popup");
let galleryMain = document.getElementById("gallery_preview");
let galleryItem = document.querySelectorAll(".gallery_item");
let popupImage = document.getElementById("popup_image");

// Event Listeners

// Image Preview
galleryMain.addEventListener("mouseenter", () => {
  setPreview();
});

galleryMain.addEventListener("mouseleave", () => {
  setPreview();
});

// Preview Enable/Disable
const setPreview = () => {
  // Set Source
  popupImage.src = galleryMain.src;

  let display = popup.style.display;

  if (display == "" || display == "none") {
    popup.style.display = "block";
    popup.style.opacity = "1";
  } else {
    popup.style.display = "none";
    popup.style.opacity = "0";
  }
};

// Gallery Active CSS Class Enable/Disable
let currentActive = galleryItem[0];

// Add Event Listener To Each Element
galleryItem.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    galleryMain.src = e.target.src;
    ele.classList.add("gallery_item_active");
    currentActive = ele;

    updateAllPreview();
  });
});

// Update Hover Preview Of Previous Elements
const updateAllPreview = () => {
  galleryItem.forEach((ele) => {
    let curr = ele.getAttribute("data-imageId");
    if (curr !== currentActive.getAttribute("data-imageId")) {
      ele.classList.remove("gallery_item_active");
    }
  });
};
