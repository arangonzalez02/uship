window.onload = () => { //lo que hay dentro de las llaves se ejecuta cuando carga la página
    //array es una variable que dentro tienen varios datos como strings, ...

    let destinos = ["Local", "Provincial", "Comunidad Autonoma", "Nacional", "Ceuta y Melilla", "Baleares y Canarias", "Europa", "Resto del Mundo"]; //array de 1 dimensión

    let pesos = ["Hasta 0.5KG", "Hasta 5KG", "Hasta 10KG", "Hasta 20KG"]; //array de 1 dimensión

    let precios = [ //array de 2 dimensiones, con x e y
        [4.88, 6.75, 8.49, 11.39],
        [10.88, 9.75, 11.49, 14.39],
        [10.88, 12.75, 14.49, 17.39],
        [14.88, 16.75, 18.49, 21.39],
        [20.88, 22.75, 24.49, 27.39],
        [18.88, 20.75, 22.49, 25.39],
        [22.88, 24.75, 26.49, 29.39],
        [27.88, 29.75, 31.49, 34.39]
    ];

    let desplegableDestino = document.querySelector("#destino");
    let desplegablePeso = document.querySelector("#peso");

    // forEach "por cada elemento de lo que se esté tratando en ese momento" por cada elemento va a ejecutar algo

    destinos.forEach((textoArray, index) => {
        let option = document.createElement("option");
        option.value = index;
        // al option se le asigna el indice
        option.text = textoArray;
        // queremos crear un option por cada elemento
        desplegableDestino.appendChild(option);
    });

    pesos.forEach((nuevoTexto, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.text = nuevoTexto;
        desplegablePeso.appendChild(option);
    });

    document.querySelector("#boton").addEventListener("click", function () {
        //cuando haces click en el botón te devuelve el value de la opción seleccionada en cada desplegable (el indice)
        let indiceDestinos = desplegableDestino.value;
        let indicePesos = desplegablePeso.value;

        if (indiceDestinos == "" || indicePesos == "") {
            document.querySelector("#mensaje").innerHTML = `Selecciona una opción`;
            document.querySelector("#mensaje").style = "color: red;"
        } else {
            let precio = precios[indiceDestinos][indicePesos];
            document.querySelector("#mensaje").innerHTML = `El precio es de ${precio}`;
            document.querySelector("#mensaje").style = "color: black;"
        }
    });

}


