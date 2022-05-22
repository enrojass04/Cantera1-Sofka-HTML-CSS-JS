const cambiarFondo = (id) => {
    let element = document.getElementById("body");
    element.style.backgroundColor = id.value;
    localStorage.setItem('color', id.value);

    let element3 = document.getElementById("tema2");
    element3.style.backgroundColor = id.value;
    localStorage.setItem('color', id.value);
}



const cargarColor = () => {
    const color1 = localStorage.getItem("color");
    if (color1) {
        let element = document.getElementById("body");
        element.style.backgroundColor = color1;
    }

    const color3 = localStorage.getItem("color");
    if (color3) {
        let element3 = document.getElementById("tema2");
        element3.style.backgroundColor = color3;
    }

}

let opcionesAcordeon = document.getElementsByClassName("acordeon");

for (let i = 0; i < opcionesAcordeon.length; i++) {
    opcionesAcordeon[i].addEventListener('click', function() {
        this.classList.toggle("active");
        let siguiente = this.nextElementSibling;
        if (siguiente.style.display == "block") {
            siguiente.style.display = "none";
        } else {
            siguiente.style.display = "block";
        }
    })
}
