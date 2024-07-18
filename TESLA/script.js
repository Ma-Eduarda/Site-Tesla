let formulario = document.querySelector(".box")

function aparecerForm(event){
    formulario.style.opacity = "90%"
    event.preventDefault();
}

function desaparecerForm(event){
    formulario.style.opacity = "-100%"
    event.preventDefault();
}

