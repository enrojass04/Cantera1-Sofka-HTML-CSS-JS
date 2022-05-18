var array = ["Julian", "Eduwin", "Jose", "Dani"];

array.forEach((el, i) => {
    console.log(i + "-->" +el);
});

function saludar1(nombre){
    console.log(`hola ${nombre}`);
}

saludar1("Julian");

const saludar2 = (nombre) => {
    console.log(`Hola ${nombre}`);
}

saludar2("Julian");