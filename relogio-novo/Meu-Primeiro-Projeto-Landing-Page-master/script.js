setInterval(function relog() {
    let rel = document.getElementById('relogio')
    let data = new Date()
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()

    if (h < 10) {
        h = `0${h}`
    }

    if (m < 10) {
        m = `0${m}`
    }

    if (s < 10) {
        s = `0${s}`
    }

    rel.innerHTML = `${h}:${m}:${s}`


}, 1000)



let rel = document.getElementById('dia')
let dt = new Date()
let diasem = dt.getDay();
let dia = dt.getDate()
let mes = dt.getMonth()
let ano = dt.getFullYear()


let meses = new Array("Dezembro", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Julho", "Agosto", "Setembro", "Outubro", "Novembro")
let semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")

document.write(semanas[diasem] + ", " + dia + " de " + meses[mes] + " de " + ano);




setInterval(function relog2() {
    let rel = document.getElementById('relogio2');
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds()+ 10;
   
  
    if (s > 59 ) {
        s  = '0'{s};  
    }


    if (h < 10) {
        h = `0${h}`
    }

    if (m < 10) {
        m = `0${m}`
    }

    if (s < 10) {
        s = `0${s}`
    }

    if (s < 10) {
        s = `0${s}`
    }
        
    rel.innerHTML = `${h}:${m}:${s}`
 


}, 1000)

setInterval(function relog3() {
    let rel = document.getElementById('relogio3')
    let data = new Date()
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()

    if (h < 10) {
        h = `0${h}`
    }

    if (m < 10) {
        m = `0${m}`
    }

    if (s < 10) {
        s = `0${s}`
    }

    rel.innerHTML = `${h}:${m}:${s}`

}, 1000)

setInterval(function relog4() {
    let rel = document.getElementById('relogio4')
    let data = new Date()
    let h = data.getHours() - 2
    let m = data.getMinutes()
    let s = data.getSeconds()

    if (h < 10) {
        h = `0${h}`
    }

    if (m < 10) {
        m = `0${m}`
    }

    if (s < 10) {
        s = `0${s}`
    }

    rel.innerHTML = `${h}:${m}:${s}`
}, 1000)

// função que fará o refresh na página
function recarregarPagina() {
    // intancio Date()
    let date = new Date();
    // condição que verifica se é a hora e minuto correto
    // se for executa a ação (20:30)
    if (date.getHours() === 09 && date.getMinutes() === 59) {
        location.reload();
    }
}
// a cada 60.000s = 1min chamo a função
setInterval(function() { recarregarPagina(); }, 1);
// chamada da função
recarregarPagina();