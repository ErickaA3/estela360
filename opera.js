// Selecciona el elemento del input
const nombre = document.getElementById("nombre");

// Obtiene una referencia a tu base de datos
const database = firebase.database();

// Agrega un event listener al botón "btnenviar"
btnenviar.addEventListener('click', (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del botón (enviar el formulario)

    // Establece el valor del campo "campo1" en la base de datos
    // con el valor del input "nombre" cuando se haga clic en el botón "btnenviar"
    database.ref('/nuevoTopico').set({
        campo1: nombre.value
    });
});
