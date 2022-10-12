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
function get_data(endpoint){
    let promise = new Promise(function (resolve , rejected){
        //1. Crear el objeto de conexion
        const h = new http()
        //2. Abrir una conexion a la API
        h.open('GET' , endpoint)
        //3. Enviar la Request definida
        h.send()
        //4. Una vez, recibida la Response,
        //      tratar la informacion
        h.onload = function(){
            if(h.status === 200){
                resolve(h.responseText)
            }else{
                rejected(h.status)
            }
        }
    })
    return promise
}

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

get_data(url).then(function(data) {
    exito(data)
})