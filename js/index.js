const cambiarFondo = (id) => {
    let element = document.getElementById("body");    
    element.style.backgroundColor = id.value;
    localStorage.setItem('color', id.value);

    /* let element2 = document.getElementById("tema1");    
    element2.style.backgroundColor = id.value;
    localStorage.setItem('color', id.value); */

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

    /* const color2 = localStorage.getItem("color");
    if (color2) {
        let element2 = document.getElementById("tema1");
        element2.style.backgroundColor = color1;
    } */
}