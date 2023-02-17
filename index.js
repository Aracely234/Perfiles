/*
PokeApi
Implementación de una Api (pokeapi) con JS

Integrantes:
De la Cruz Yamahoka Daniela 19211624
García Arellano Aracely 19211642
*/

//Se traen los atributos del html a una constante para utilizarlos
const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.card'); //es un tipo de atributo que deriva del css

//Al botón se le agrega un evento para usar la función traerPokemon
button.addEventListener('click', (e)=>{
    e.preventDefault();
    traerPerfil(input.value);
})

//Función para traer los datos de los pokemones
function traerPerfil(name){ //se le agrega un parámetro
    fetch(`https://randomuser.me/api/?results=5000`)//se busca la url con el parametro del pokemon
    .then((res) => res.json())//se convierten los datos a un archivo json
    .then((data)=> { //se pone en una variable para utilizar los datos
        crearPerfil(data);//se utiliza la función con los datos para elegir qué elementos usar
        console.log(data);//se imprimen los datos en la consola
    });
    
}

//Función para agregar los datos de los pokemones
function crearPerfil(data){
const img = document.getElementById('imagenpok');//se crea una constante para otorgar la imagen
img.src=data.results.picture;//se busca la imagen en los datos del perfil
/*
//Se crea una constante para el nombre y se busca el nombre en los datos.
const nombre= document.getElementById('nombre');
nombre.textContent=pokemon.n

//Se crea una constante para la experiencia y se busca en los datos.
const experiencia= document.getElementById('exp');
experiencia.textContent=pokemon.base_experience;

//Se crea una constante para el tipo de pokemon y se busca en los datos.
const tipo= document.getElementById('tipo');
tipo.textContent="Type:"+pokemon.types[0].type.name;

//Se crea una constante para la defensa y se busca en los datos.
const defensa = document.getElementById('defensa');
defensa.textContent= pokemon.stats[2].base_stat;

//Se crea una constante para el ataque y se busca en los datos.
const ataque = document.getElementById('ataque');
ataque.textContent= pokemon.stats[1].base_stat;

//Se crea una constante para llos puntos de vida y se busca en los datos.
const puntosvida = document.getElementById('hp');
puntosvida.textContent= pokemon.stats[0].base_stat;

//Se crea una constante para crear un espacio para poner cada elemento en el html
const card = document.getElementsByClassName('card');
*/
}
