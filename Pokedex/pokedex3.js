//Imagen
const pokeImg = document.getElementById("pokeImg");
//Lista de habilidades
const PokeMoves= document.getElementById("habilidades");

//Barras de progreso
const progress=document.getElementById('progress');
const progress2=document.getElementById('progress2');
const progress3=document.getElementById('progress3');
const progress4=document.getElementById('progress4');
const progress5=document.getElementById('progress5');
const progress6=document.getElementById('progress6');

//Datos
const nombre=document.getElementById("tipo");
const type=document.getElementById("type");                //Se pone el cero [0] cuando en la api lo muestra asi antes del valor
const peso=document.getElementById("peso");
const altura=document.getElementById("altura");
const special=document.getElementById("special");
const numero=document.getElementById("numero");

//Stats
const hp_base=document.getElementById("hp");
const atk_base=document.getElementById("atk");
const def_base=document.getElementById("def");
const satk_base=document.getElementById("satk");
const sdef_base=document.getElementById("sdef");
const spd_base=document.getElementById("spd");



const fetch2Pokemon = () =>{
    const pokeName=document.getElementById("pokeName"); //Lee en el documento el id que definas, este caso es el id del input
    let pokeInput = pokeName.value.toLowerCase();   //Declaramos una variable que contenga el valor del id de pokeName
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;   //Busca en la api el valor ingresado en el input

    //window.location.reload();

    

    fetch(url).then((res) =>{                              //fetch hace solicitud a una api y res es respuesta
        if(res.status!= "200"){                             //Status del error, si no se encuentra el pokemon ingresado te manda una imagen
            console.log(res);
            printPokeImg("./elements/sad.png");
            document.getElementById("tipo").innerHTML="N";
            document.getElementById("type").innerHTML="N";
            document.getElementById("peso").innerHTML="N";
            document.getElementById("altura").innerHTML="N";
            document.getElementById("special").innerHTML="N";
            /////////////////////////////////Stats///////////////////////
            document.getElementById("hp").innerHTML="N";
            document.getElementById("atk").innerHTML="N";
            document.getElementById("def").innerHTML="N";
            document.getElementById("satk").innerHTML="N";
            document.getElementById("sdef").innerHTML="N";
            document.getElementById("spd").innerHTML="N";
        }   
        else{
            return res.json(); //Nos regresa la respuesta de la api 
        }      
        
        
        //Aqui se imprime la informacion en los id
    }).then((data)=>{                                     
        console.log(data);

        printPokeImg(data.sprites.other.dream_world.front_default);
        printPokeFeatures(data);
        printPokeStats(data);
        printPokeBarras(data);
        printPokeMoves(data);

        /*let moves = data.moves;
        PokeMoves.innerHTML = "";

        for (let i = 0; i < moves.length; i++) {
            const move = document.createElement("li");
            PokeMoves.appendChild(move);

            move.innerText = moves[i].move.name;
        }*/



    })
    
}


//fetchPokemon();
const printPokeImg=(url)=>{
    //const pokeImg=document.getElementById("pokeImg");   //Asigna en una variable del documento el valor del id que definas
    pokeImg.src= url;                                   //Cambia del elemento con el id definido
}

const printPokeFeatures=(data)=>{
    //const pokeImg=document.getElementById("pokeImg");   //Asigna en una variable del documento el valor del id que definas
    //pokeImg.src= url;                                   //Cambia del elemento con el id definido
    nombre.innerText=data.species.name;
    type.innerText=data.types[0].type.name;
    altura.innerText=data.height/10;
    peso.innerText=data.weight/10;
    special.innerText=data.abilities[1].ability.name; 
    numero.innerText=data.id;
}

const printPokeStats=(data)=>{
    hp.innerText=data.stats[0].base_stat;
    atk.innerText=data.stats[1].base_stat;
    def.innerText=data.stats[2].base_stat;
    satk.innerText=data.stats[3].base_stat;
    sdef.innerText=data.stats[4].base_stat;
    spd.innerText=data.stats[5].base_stat;
}

const printPokeBarras=(data)=>{
    progress.style.width=(data.stats[0].base_stat*100/255) +'%'
    progress2.style.width=(data.stats[1].base_stat*100/190) +'%'
    progress3.style.width=(data.stats[2].base_stat*100/250) +'%'
    progress4.style.width=(data.stats[3].base_stat*100/194) +'%'
    progress5.style.width=(data.stats[4].base_stat*100/250) +'%'
    progress6.style.width=(data.stats[5].base_stat*100/200) +'%'
}

const printPokeMoves = (data) => {
    let moves = data.moves;
    PokeMoves.innerHTML = "";

    for (let i = 0; i < moves.length; i++) {
        const move = document.createElement("li");
        PokeMoves.appendChild(move);

        move.innerText = moves[i].move.name;
    }
}