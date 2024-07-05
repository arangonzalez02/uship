window.onload = () => {
  let form = document.querySelector("#registroForm");
  form.usuario.addEventListener("input", validarUsuario);
  form.pass1.addEventListener("input", validarPass1);
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
  if (validarUsuario() && validarPass1()) {
    return true;
  } else {
    return false;
  }
}


function validarUsuario() {
  let usuario = document.querySelector("#usuario");
  let msnError = document.querySelector(".usuarioError");
  if (!usuario.value.trim()) {
    //si está vacio..
    usuario.classList.add("errorInput");
    usuario.classList.remove("validoInput");
    msnError.textContent = "El usuario es obligatorio";
    return false;
  } else if (
    !/^@[a-zA-Z0-9.-]{8}$/.test(usuario.value)
  ) {
    usuario.classList.add("errorInput");
    usuario.classList.remove("validoInput");
    msnError.textContent = "El formato de usuario debe comenzar con @ y tener 8 caracteres";
    return false;
  } else {
    usuario.classList.remove("errorInput");
    usuario.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}

// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
function validarPass1() {
  let pass1 = document.querySelector("#pass1");
  let msnError = document.querySelector(".pass1Error");
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass1.value)) {
    pass1.classList.add("errorInput");
    pass1.classList.remove("validoInput");
    msnError.textContent = "La contraseña debe contener 8 caracteres de los cuales 1 mayúscula, 1 minúscula y 1 letra";
    return false;
  } else {
    pass1.classList.remove("errorInput");
    pass1.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}
