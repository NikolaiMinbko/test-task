import scrollTo from "./scrollTo.js";

const modals = () => {
  const bindModals = (triggerSelector, modalSelector, closeSelector) => {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach((item) => {
      item.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";

      scrollTo();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        scrollTo();
      }
    });
  };

  //triggerSelector, modalSelector, closeSelector
  bindModals(".open", ".popup", ".form__cancel");
};

export default modals;
