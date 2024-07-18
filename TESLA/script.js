let formulario = document.querySelector(".box")

function aparecerForm(){
    formulario.style.opacity = "90%"
}

function desaparecerForm(event){
    formulario.style.opacity = "-100%"
    event.preventDefault();
}

