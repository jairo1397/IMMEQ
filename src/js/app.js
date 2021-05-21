let i = 1;

function mostrarProductos() {
    const uno = document.getElementById('botonOn');
    if (i % 2 == 0) {
        uno.innerHTML = "Ver mas";
        var element = document.querySelector(".oculto")
        element.classList.add("hidden");
    } else {
        uno.innerHTML = "Ver menos";
        const element = document.querySelector(".hidden");
        element.classList.remove("hidden");
    }
    i++;
}