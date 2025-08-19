let darkMode = confirm("Quiere activar el modo oscuro?")

let tipoDeFondo = document.querySelector(".light")
let header = document.querySelector(".header")
let item = document.querySelectorAll(".item")
let botonCambioDeModo = document.querySelector("#modo")

if (darkMode) {
    tipoDeFondo.classList.add("dark")
    header.classList.add("header-dark")
    item.forEach(item => {
        item.classList.add("item-dark")
    });
    botonCambioDeModo.innerHTML = `Modo claro <i class="fa-solid fa-sun"></i>`
}

botonCambioDeModo.addEventListener("click", () => {
    tipoDeFondo.classList.toggle("dark")
    header.classList.toggle("header-dark")
    item.forEach(item => {
        item.classList.toggle("item-dark")
    })

    setTimeout(() => {
        if (tipoDeFondo.classList.contains("dark")) {
            botonCambioDeModo.innerHTML = `Modo claro <i class="fa-solid fa-sun"></i>`
        } else {
            botonCambioDeModo.innerHTML = `Modo oscuro <i class="fa-solid fa-moon"></i>`
        }
        botonCambioDeModo.style.opacity = 1;

    }, 200);


})