const readFile = () => {
  const fileInput = document.querySelector(".popup .form__logo-input");
  const clearLogoBtn = document.querySelector(".form__logo-clear");
  const img = document.querySelector(".form__logo-img");

  clearLogoBtn.addEventListener("click", (e) => {
    img.removeAttribute("src");
    fileInput.value = null;
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = function () {
        img.src = reader.result;
      };
    } else {
      img.removeAttribute("src");
    }

    reader.onerror = function () {
      img.removeAttribute("src");
    };
  });
};

export default readFile;
