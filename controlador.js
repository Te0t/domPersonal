//Controlando Etiquetas con el DOM

//1. Almacenar en memoria (Crear una variable) la etiqueta que quiero controlar.

// se crea la variable etiquetaImagen del documento index y traeme el elemento con el id ("laetiqueta");
let etiquetaImagen=document.getElementById("fotografia");
//console.log(etiquetaImagen);
//2. Controlando nuestras etiquetas con el DOM, controlar es cambiar la fuente (SRC) de una etiqueta .src
etiquetaImagen.src="./img/inuyashaCompleto.png"

//2.2 Controlar es cambiar el contenido de texto de una etiqueta .textContent
let etiquetaTitulo=document.getElementById("titulo");
etiquetaTitulo.textContent="HISTORIA"

//2.3 Controlar es agregar estilos .classList.add
etiquetaTitulo.classList.add("fuente","alineado");

//2.4 Controlar es remover estilos .classList.remove
let etiquetaParrafo=document.getElementById("parrafo");
etiquetaParrafo.classList.remove("text-danger");

//2.8 Controlar es detectar eventos, en este caso seria una funcion anonima
let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click", function(evento){
    alert("Estamos haciendo clic")
})

//Una funcion anonima es cuando se hace solo una accion sin nombre

