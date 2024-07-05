window.onload = () => {
  let form = document.querySelector("#registroForm");
  form.nombre.addEventListener("input", validarNombre);
  form.email.addEventListener("input", validarEmail);
  form.reset.addEventListener("click", () => {
    inputs = document.querySelectorAll("input"); //es un array de todos los input
    inputs.forEach((element) => {
      element.classList.remove("errorInput"); //borra el borde rojo de los input
      element.classList.remove("validoInput");
    });
    let mensajeError = document.querySelectorAll(".msn"); //eliminando los mensajes de error que haya en el html
    mensajeError.forEach((mensaje) => {
      mensaje.textContent = "";
    });
  });
};

function validarFormulario() {
  if (validarNombre() && validarEmail()) {
    return true;
  } else {
    return false;
  }
}

function validarNombre() {
  let nombre = document.querySelector("#nombre");
  let msnError = document.querySelector(".nombreError");
  if (!nombre.value.trim()) {
    //si está vacio..
    nombre.classList.add("errorInput");
    nombre.classList.remove("validoInput");
    msnError.textContent = "El nombre es obligatorio";
    return false;
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
    nombre.classList.add("errorInput");
    nombre.classList.remove("validoInput");
    msnError.textContent = "El nombre solo puede tener letras y espacios";
    return false;
  } else {
    nombre.classList.remove("errorInput");
    nombre.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}

function validarEmail() {
  let email = document.querySelector("#email");
  let msnError = document.querySelector(".emailError");
  if (!email.value.trim()) {
    //si está vacio..
    email.classList.add("errorInput");
    email.classList.remove("validoInput");
    msnError.textContent = "El email es obligatorio";
    return false;
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)
  ) {
    email.classList.add("errorInput");
    email.classList.remove("validoInput");
    msnError.textContent = "El formato de email es error";
    return false;
  } else {
    email.classList.remove("errorInput");
    email.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}
