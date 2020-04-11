(function () {
  const formulario = document.getElementById("sectionForm");
  const allCheckbox = formulario.querySelectorAll("input[type=checkbox]");
  const checkboxLength = allCheckbox.length;
  const firstCheckbox = checkboxLength > 0 ? allCheckbox[0] : null;

  function checkInit() {
    if (firstCheckbox) {
      for (let i = 0; i < checkboxLength; i++) {
        allCheckbox[i].addEventListener("change", checkValidity);
      }
      checkValidity();
    }
  }

  function isChecked() {
    for (let i = 0; i < checkboxLength; i++) {
      if (allCheckbox[i].checked) return true;
    }

    return false;
  }

  function checkValidity() {
    const errorMessage = !isChecked()
      ? "Escolha pelo menos uma das opções"
      : "";
    firstCheckbox.setCustomValidity(errorMessage);
  }

  checkInit();
})();
