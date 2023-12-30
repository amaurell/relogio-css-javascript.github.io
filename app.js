
// Captura "class" dentro do index.html
pegaHora    = document.querySelector(".horas")
pegaMinuto  = document.querySelector(".minutos")
pegaSegundo = document.querySelector(".segundos")
pegaPeriodo = document.querySelector(".periodo")//Bom Dia/Tarde/Noite

function relogio(){

    // Pega hora Windows
    const data = new Date();
    const hora      = data.getHours();
    const minutos   = data.getMinutes();
    const segundos  = data.getSeconds();

    //Insere hora/minuto/segundo no index.html
    pegaHora.innerHTML      = (hora<10)?"0"+hora:hora
    pegaMinuto.innerHTML    = (minutos<10)?"0"+minutos:minutos
    pegaSegundo.innerHTML   = (segundos<10)?"0"+segundos:segundos
   
    mostraPeriodo(hora)//Verifica qual o período do dia e mostra no index.html
}
function mostraPeriodo(hora){
    if (hora >= 0 && hora < 12){
        pegaPeriodo.innerHTML = "Bom Dia!"
    }
    if (hora >= 12 && hora <18) {
        pegaPeriodo.innerHTML = "Boa Tarde!"
    }
    if (hora >=18 && hora < 24){
        pegaPeriodo.innerHTML = "Boa Noite!"
    }
  
}

setInterval(relogio,1000)