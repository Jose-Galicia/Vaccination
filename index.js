const navToggle=document.querySelector(".nav-toggle"); //Recibe el documento de .nav-toggle
const navMenu=document.querySelector(".nav-menu");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible"); //Si esta la clase la elimina, y si no esta la anade (hace funcional el boton)

    //Si tenemos la clase navmenu visible le ponemos el aria-label en cerrar menu, de lo contrario en abrir menu
    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menu");
    }
    else{
        navToggle.setAttribute("aria-label", "Abrir menu");
    }
});

const bloque=document.querySelectorAll('.bloque');
const h2=document.querySelectorAll('.h2');

//Cuando click en h2
//Quita la clase activo de todos los bloques
//Vamos a anadir la clase activo al bloque con la posicion del h2

//Recorrer todos los h2
h2.forEach( (cadaH2, i)=>{
    //Asignando un click a cada h2
    h2[i].addEventListener('click', ()=>{

        //Recorremos todos los bloques
        bloque.forEach((cadaBloque, i)=>{
            //Quitamos la clase activo de todos los bloques
            bloque[i].classList.remove('activo')
        })
        //Anadiendo la clase activo al bloque cuya posicion sea igual al del h2
        //Linea no 12
        bloque[i].classList.add('activo')
    })
})