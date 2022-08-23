const createElem = (el, innerText) => {
  const elem = document.createElement(el);

  if (innerText) {
    elem.innerText = innerText;
  }

  return elem;
};

export default createElem;
