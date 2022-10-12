//Dependencia a XMLHttpRequest
const http = require("xmlhttprequest").XMLHttpRequest

const url = "https://pokeapi.co/api/v2/type"

function exito(data){
    const tipos = JSON.parse(data).results
    //Recorrer el arreglo de tipos
    tipos.forEach(function (element) {
        console.log(`Tipo: ${element.name}`)
        console.log(`---------------------`)
    })
}

function fallo(status){
    cosole.log(status)
}


//Funcion para conectarnos a una API publica
function get_data(endpoint , exito , fallo){
    //1. Crear el objeto de conexion
    const h = new http()
    //2. Abrir una conexion a la API
    h.open('GET' , endpoint)
    //3. Enviar la Request definida
    h.send()
    //4. Una vez, recibida la Response,
    //      tratar la informacion
    h.onload = function(){
        exito(h.responseText)
    }
}

//Invocar get_data
get_data(url ,  exito, fallo)