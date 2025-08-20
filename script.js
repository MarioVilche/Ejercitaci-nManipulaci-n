let darkMode = confirm("Quiere activar el modo oscuro?")

let tipoDeFondo = document.querySelector(".light")
let botonCambioDeModo = document.querySelector("#modo")

if (darkMode) {

    tipoDeFondo.classList.add("dark")

    botonCambioDeModo.innerHTML = `Modo claro <i class="fa-solid fa-sun"></i>`

}

botonCambioDeModo.addEventListener("click", () => {

    tipoDeFondo.classList.toggle("dark")

    setTimeout(() => {
        if (tipoDeFondo.classList.contains("dark")) {
            botonCambioDeModo.innerHTML = `Modo claro <i class="fa-solid fa-sun"></i>`
        } else {
            botonCambioDeModo.innerHTML = `Modo oscuro <i class="fa-solid fa-moon"></i>`
        }
        botonCambioDeModo.style.opacity = 1;

    }, 200);


})