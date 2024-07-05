window.onload = () => {
  let form = document.querySelector("#registroForm");
  form.numero.addEventListener("input", validarnumero);
};

function validarFormulario() {
  if (validarnumero()) {
    return true;
  } else {
    return false;
  }
}


function validarnumero() {
  let numero = document.querySelector("#numero");
  let msnError = document.querySelector(".numeroError");
  if (!numero.value.trim()) {
    //si está vacio..
    numero.classList.add("errorInput");
    numero.classList.remove("validoInput");
    msnError.textContent = "El numero de seguimiento es obligatorio";
    return false;
  } else if (
    !/^USP[0-9]{7}$/.test(numero.value)
  ) {
    numero.classList.add("errorInput");
    numero.classList.remove("validoInput");
    msnError.textContent = "El formato de numero debe comenzar con USP y tener 10 digitos";
    return false;
  } else {
    numero.classList.remove("errorInput");
    numero.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}

