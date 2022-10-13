//Dependencia a XMLHttpRequest
const http = require("xmlhttprequest").XMLHttpRequest

const url = "https://goweather.herokuapp.com/weather/Curitiba"

const exito = data => {
    const tipos = JSON.parse(data).forecast
    //Recorrer el arreglo de tipos
    tipos.forEach(function (element) {
        console.log(`Temperatura : ${element.temperature} Dia: ${element.day}`)
        console.log(`---------------------`)
    })
}

const fallo = (status) => {
    console.log(status)
}


//Funcion para conectarnos a una API publica
const get_data = (endpoint , exito , fallo) => {
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
            exito(h.responseText)
        }else{
            fallo(http.status)
        }
    }
}

//Invocar get_data
get_data(url ,  exito, fallo)