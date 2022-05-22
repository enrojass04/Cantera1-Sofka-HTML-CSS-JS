const principal = () => {
    const nombres = document.getElementById('nombres').value = "";
    const correo = document.getElementById('correo').value = "";
    const asunto = document.getElementById('asunto').value = "";
    const mensaje = document.getElementById('mensaje').value = "";
}

const guardar = () => {

    const nombres = document.getElementById('nombres').value;
    const correo = document.getElementById('correo').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;


    if (correo == "") {
        alert("falta correo");
    }

    if(nombres == "") {
        alert('falta nombre');
    }

    if(asunto == ""){
        alert('falta asunto');
    }

    if(mensaje == ""){
        alert('falta mensaje');
    }

    console.log(`Nombre: ${nombres} \n Correo: ${correo} \n Asunto: ${asunto} \n mensaje: ${mensaje}`);

}

const borrar = () => {

    const nombres = document.getElementById('nombres').value = "";
    const correo = document.getElementById('correo').value = "";
    const asunto = document.getElementById('asunto').value = "";
    const mensaje = document.getElementById('mensaje').value = "";

}