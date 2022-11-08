let etiquetaImagen=document.getElementById("fotografia");
let etiquetaTitulo=document.getElementById("titulo");
etiquetaTitulo.classList.add("fuente","alineado");
let etiquetaParrafo=document.getElementById("parrafo");
let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click", function(evento){
    alert("Estamos haciendo clic")
    etiquetaImagen.src="./img/inuyashaCompleto.png"
    etiquetaTitulo.textContent="HISTORIA"
    etiquetaTitulo.classList.add("fuente","alineado");
    etiquetaParrafo.classList.remove("text-danger");
})