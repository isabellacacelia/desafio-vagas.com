const init = () => {
  let countMais = document.getElementById("countMais");
  let countMenos = document.getElementById("countMenos");
  let campoMsg = document.querySelector("textarea");
  let count = document.getElementById("count");
  let button = document.querySelector("button");

  countMais.onclick = function () {
    count.value++;
  };

  countMenos.onclick = function () {
    if (count.value > 1) {
      count.value--;
    }
  };

  campoMsg.addEventListener("keyup", function () {
    if (campoMsg.value) {
      button.classList.remove("disabled");
    } else {
      button.classList.add("disabled");
    }
  });
};

init();

const validaFormulario = () => {
  let campoMsg = document.querySelector("textarea").value;
  if (campoMsg && count.value) {
    alert("Formulário enviado com sucesso!");
  }
};
