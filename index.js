/*
PokeApi
Implementación de una Api (pokeapi) con JS

Integrantes:
De la Cruz Yamahoka Daniela 19211624
García Arellano Aracely 19211642
*/

//Se traen los atributos del html a una constante para utilizarlos
// const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.card'); //es un tipo de atributo que deriva del css

//Al botón se le agrega un evento para usar la función traerPokemon
button.addEventListener('click', (e)=>{
    e.preventDefault();
    traerPerfil();
})
//Funcion para mostrar el cargador
function displayLoading(){
    var loder = document.querySelector('#loader');//Guardar el elemento html en una variable
    loder.style.display = 'block';//Cambiar el display a block para mostrarlo
    var card = document.querySelector('#card');//Guardar el elemento html en una variable
    card.style.display = 'none';//Cambiar el display a none para ocultarlo
}
//Funcion para mostrar el cargador
function hide_the_Loading(){
    var loder = document.querySelector('#loader');
    loder.style.display = 'none';
    var card = document.querySelector('#card');
    card.style.display = 'block';
}

//Función para traer los datos de los pokemones
function traerPerfil(){ //se le agrega un parámetro
    displayLoading();//Se llama al cargador
    fetch(`https://randomuser.me/api/?results=5000`)//se busca la url con el parametro del pokemon
    .then((res) => res.json())//se convierten los datos a un archivo json
    .then((data)=> { //se pone en una variable para utilizar los datos
        hide_the_Loading();//Cuando se obtienen los datos se llama al cerrar cargador
        crearPerfil(data);//se utiliza la función con los datos para elegir qué elementos usar
        console.log(data);//se imprimen los datos en la consola
    });
    
}

//Función para agregar los datos de los pokemones

function crearPerfil(data){
    for(var i=0; i <5000; i++){
        const img = document.getElementById('imagenpok');//se crea una constante para otorgar la imagen
        img.src=data.results[i].picture.large;//se busca la imagen en los datos del perfil

        //Se crea una constante para el nombre y se busca el nombre en los datos.
        const nombre= document.getElementById('nombre');
        nombre.textContent=data.results[i].name.first +" "+ data.results[i].name.last;

        //Se crea una constante para el tipo de pokemon y se busca en los datos.
        const email= document.getElementById('email');
        email.textContent=data.results[i].email;

        //Se crea una constante para la experiencia y se busca en los datos.
        const nat= document.getElementById('nat');
        nat.textContent=data.results[i].nat;

        //Se crea una constante para la defensa y se busca en los datos.
        const adress = document.getElementById('adrees');
        adress.textContent= "ADRESS: "+data.results[i].location.street.number +" "+data.results[i].location.street.name;

        //Se crea una constante para el ataque y se busca en los datos.
        const cell = document.getElementById('cell');
        cell.textContent= data.results[i].cell;

        //Se crea una constante para llos puntos de vida y se busca en los datos.
        const age = document.getElementById('age');
        age.textContent= data.results[i].dob.age;
    }

}
