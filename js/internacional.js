// Movimiento de fotos
window.onload = () => {
    let contenedor_tarifas = document.querySelectorAll(".tarifas")

    contenedor_tarifas.forEach(tarifas => {
        let widhOrig = tarifas.clientWidth;
        let heightOrig = tarifas.clientHeight;

        tarifas.addEventListener("mouseover", function () {
            //Aumenta el tamaño
            tarifas.style.width = (widhOrig * 1.5) + "px";
            tarifas.style.height = (heightOrig * 1.5) + "px";
        });

        tarifas.addEventListener("mouseout", function () {
            //Disminuir el tamaño
            tarifas.style.width = widhOrig + "px";
            tarifas.style.height = heightOrig + "px";
        });
    });
}