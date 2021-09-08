let camera_preview = document.getElementById("camera_popup");
let main_preview = document.getElementById("main_preview");
let gallery_item = document.querySelectorAll(".gallery_item");
let camera_popup = document.getElementById("camera_popup_preview");

main_preview.addEventListener("mouseenter", () => {
  console.log("entered");
  setPreview();
});

main_preview.addEventListener("mouseleave", () => {
  console.log("left");
  setPreview();
});

let isPreview = false;
const setPreview = () => {
  let cameraStyle = camera_preview.style;
  camera_popup.src = main_preview.src;

  if (!isPreview) {
    cameraStyle.display = "block";
    isPreview = true;
  } else {
    cameraStyle.display = "none";
    isPreview = false;
  }
};

let currentActive = gallery_item[0];

// Add Event Listener To Each Element
gallery_item.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let src = e.target.src;
    main_preview.src = src;
    ele.classList.add("gallery_item_active");
    currentActive = ele;

    updateAllPreview();
  });
});

// Update Hover Preview Of Previous Elements
const updateAllPreview = () => {
  gallery_item.forEach((ele) => {
    let curr = ele.getAttribute("data-imageId");
    if (curr !== currentActive.getAttribute("data-imageId")) {
      ele.classList.remove("gallery_item_active");
    }
  });
};
