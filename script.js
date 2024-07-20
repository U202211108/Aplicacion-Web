let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let accept = document.getElementById("accept");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");
let form = document.getElementById("form");
let formSection = document.getElementById("form-section");
let foodSection = document.getElementById("food-section");
let searchIcon = document.getElementById("search-icon");
let searchBox = document.getElementById("search-box");
let searchInput = document.getElementById("search-input");

let isSignUpMode = true; // Variable para controlar el modo

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Inicio Sesion";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    isSignUpMode = false; // Cambiar a modo login
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    isSignUpMode = true; // Cambiar a modo registro
}



accept.onclick = function() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    if (isSignUpMode) {
        // Validación para registro
        if (nombre === "" || correo === "" || contrasena === "") {
            alert("Por favor, complete todos los campos.");
        } else {
            alert("Registro completado con éxito.");
            form.reset();
            // Mostrar la lista de comidas
            formSection.style.display = "none";
            foodSection.style.display = "block";
        }
    } else {
        // Validación para login
        if (correo === "" || contrasena === "") {
            alert("Por favor, complete todos los campos.");
        } else {
            alert("Inicio de Sesion exitoso.");
            form.reset();
            // Mostrar la lista de comidas
            formSection.style.display = "none";
            foodSection.style.display = "block";
        }
    }
}



// Configuramos el evento click para el ícono de búsqueda
searchIcon.onclick = function() {
    // Verificamos el estado actual de la barra de búsqueda
    if (searchBox.style.display === "none" || searchBox.style.display === "") {
        // Si está oculta, la mostramos
        searchBox.style.display = "flex";
        searchInput.focus(); // Enfocamos el input de búsqueda
    } else {
        // Si está visible, la ocultamos
        searchBox.style.display = "none";
        searchInput.value = ""; // Limpiamos el valor del input de búsqueda
    }
};

function showForm() {
    document.getElementById('presentation').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('food-section').style.display = 'none';
}

    // Manejar el botón "Aceptar"
    document.getElementById('accept').addEventListener('click', function() {
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('food-section').style.display = 'block';
});




// Obtener referencias a los elementos necesarios
 searchInput = document.getElementById("searchInput");
const foodItems = document.querySelectorAll(".food-item");

// Manejar el evento de presionar Enter en el campo de búsqueda
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evitar el comportamiento por defecto de submit del formulario

        // Obtener el valor del campo de búsqueda
        const searchTerm = searchInput.value.toLowerCase().trim();

        // Buscar el elemento que coincida con el término de búsqueda
        for (let item of foodItems) {
            const itemName = item.id.toLowerCase(); // Obtener el nombre del elemento en minúsculas
            if (itemName.includes(searchTerm)) {
                // Scroll hacia el elemento encontrado
                item.scrollIntoView({ behavior: "smooth", block: "start" });
                break; // Detener la búsqueda una vez encontrado el elemento
            }
        }

        // Limpiar el campo de búsqueda
        searchInput.value = "";
    }
});

// Volver al inicio
function goBack() {
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('presentation').style.display = 'block';
}


// Función para volver al inicio del programa
function goHome() {
    // Ocultar el formulario de registro y la sección de objetos perdidos
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('food-section').style.display = 'none';
    
    // Mostrar la pantalla de presentación
    document.getElementById('presentation').style.display = 'block';
}
