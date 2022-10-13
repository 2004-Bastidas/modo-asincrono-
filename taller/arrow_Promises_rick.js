const axios = require('axios')

const url = "https://rickandmortyapi.com/api/character"

//Configuracion de request 
let config = {
    url : url,
    method: 'get'
}

//Realizar la oprecaion async
axios (config)
    .then (response => response.data.results) 
    .then(data => {
        data.forEach(function(tipo){
            console.log(`Personaje: ${tipo.name} Especie: ${tipo.species}`)
            console.log(`******************`)
            })
    })
    .catch((error) => {
        console.log(Error(`Error : $error`))
    })