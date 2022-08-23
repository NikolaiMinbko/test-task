import scrollTo from "./scrollTo.js";

const form = () => {
  const modal = document.querySelector(".popup"),
    form = document.querySelector(".form"),
    formInputs = document.querySelectorAll(".form__input"),
    logoImg = document.querySelector(".form__logo-img");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
      form.submit();

      formInputs.forEach((input) => (input.value = ""));
      logoImg.removeAttribute("src");
      modal.style.display = "none";
      scrollTo();
      alert("Форма успешно отправлена!");
    } else {
      alert(form.validationMessage);
    }
  });
};

export default form;
