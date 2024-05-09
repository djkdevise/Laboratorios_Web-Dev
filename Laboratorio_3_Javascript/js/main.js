document.addEventListener('DOMContentLoaded', function () {
    const tabla = document.getElementById('tablaAnalisisFoliares');
    const formulario = document.getElementById('formularioRegistro');

    tabla.addEventListener('click', function (event) {
        const fila = event.target.closest('tr');
        if (!fila) return; // Si no se hace clic en una fila, salir

        const celdas = fila.querySelectorAll('td');

        // Llenar el formulario con los datos de la fila
        formulario.idRegistro.value = celdas[0].innerText;
        formulario.fechaRegistro.value = convertirFecha(celdas[1].innerText); // Convertir la fecha al formato adecuado
        formulario.fincaRegistro.value = celdas[2].innerText;
        formulario.potreroRegistro.value = celdas[3].innerText;
        formulario.areaRegistro.value = celdas[4].innerText;
        formulario.nitrogenoRegistro.value = celdas[5].innerText;
        formulario.potasioRegistro.value = celdas[6].innerText;
        formulario.fosforoRegistro.value = celdas[7].innerText;
        formulario.manganesoRegistro.value = celdas[13].innerText;
        formulario.boroRegistro.value = celdas[14].innerText;
    });

    // Función para convertir la fecha al formato yyyy-mm-dd
    function convertirFecha(fecha) {
        const partesFecha = fecha.split('-');
        const dia = partesFecha[0];
        const mes = obtenerMes(partesFecha[1]);
        const anio = partesFecha[2];
        return anio + "-" + mes + "-" + dia;
        alert(anio + "-" + mes + "-" + dia);
    }

    // Función para obtener el nombre del mes a partir de su número
    function obtenerMes(numeroMes) {
        const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
        return meses[parseInt(numeroMes) - 1];
    }
});