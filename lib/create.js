export default function create(tag, className) {
  let ele = document.createElement(tag);
  ele.classList.add(...className);
  return ele;
}
