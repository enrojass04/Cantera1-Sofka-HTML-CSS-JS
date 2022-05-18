const parrafo1 = document.querySelector("#par1");
console.log(parrafo1);


const cambiarColor = (id) => {
    let element = document.querySelector(`.${id}`);
    element.classList.add("estilo2");
}

const cambiarFondo = (id) => {
    let element = document.getElementById("body");
    element.style.backgroundColor = id.value;
    localStorage.setItem('color', id.value);
}

const cargarColor = () => {
    const color = localStorage.getItem("color");
    if (color) {
        let element = document.getElementById("body");
        element.style.backgroundColor = color;
    }
}