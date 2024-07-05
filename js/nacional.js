window.onload = () => {
    document.querySelector("#mostrarButton").addEventListener("click", function () {
        let mensaje = document.querySelector("#mensaje");
        if (mensaje.style.display === "none" || mensaje.style.display === "") {
            mensaje.style.display = "block";
            mensaje.textContent = "Las maletas, tu bicicleta, los palos de golf, tus mascotas o un simple paquete. Para tus envíos particulares recogemos y entregamos en menos de 24 horas. Descubre todo lo que podemos hacer por ti.";
        } else {
            mensaje.style.display = "none";
        }
    });
}