const init = () => {
  let countMais = document.getElementById("countMais");
  let countMenos = document.getElementById("countMenos");
  let campoMsg = document.querySelector("textarea").value;
  let count = document.getElementById("count");

  countMais.onclick = function () {
    count.value++;
  };

  countMenos.onclick = function () {
    if (count.value > 1) {
      count.value--;
    }
  };

  if (campoMsg == "" && count.value == "") {
    let btn = document.querySelector("button");
    btn.classList.add("disabled");
  }
};

const validaFormulario = () => {
  let campoMsg = document.querySelector("textarea").value;
  if (campoMsg && count.value) {
    alert("Formulário enviado com sucesso!");
  }
};

init();
