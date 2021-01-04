//xl - localização a partir da esquerda.
//xa = localização a partir de cima.
//l = largura do personagem
//a = altura do personagem
//O canvas está com 300 pixels de largura por 150 pixels de altura.  

/*
- O programa pega as variáveis.
- Inicia a função "inicio", e nela dá um alerta de "funcionando" e inicia a função "desenho".
- A função "desenho" insere no canvas a variável "cobra", que é resultado da função "personagem".
- A função "personagem" cria no contexto um quadrado preto com as coordenadas xl, xa, l e a.
- De volta à função "desenho" adiciona um evento que espera que se aperte uma tecla, e dispara a função "movimento".
- A função "movimento" muda as varáveis de localização e dispara a função "personagem".
*/

var canvas = document.getElementById('jogo')
var context = canvas.getContext('2d')
var xl = 150
var xa = 75
var l = 10
var a = 5
var listaxl = []
var listaxa = []
var listal = []
var listaa = []
var cobra = personagem()
var nivel = 250
var tamanho = 2
var int
var comidal = 10
var comidaa = 10
var cxl = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290]
var cxa = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145]
var pos = []
var pontos = 0
var contador = document.getElementById("pontos")
var dificuldade = 1

cxl.sort(randOrd)
cxa.sort(randOrd)
comidal = cxl[0]
comidaa = cxa[0]

function randOrd() {
    return (Math.round(Math.random())-0.5);
}

function inicio() {
    desenho()
    comida()
}

function desenho(){
    canvas.innerHTML = cobra
    window.addEventListener('keydown', movimento)
}

function personagem(){
    for(i=0; i<=tamanho; i++) {
    context.fillStyle = 'black'
    context.fillRect(listaxl[listaxl.length - i], listaxa[listaxa.length - i], listal[listal.length - i], listaa[listaa.length - i])
    }
}

function apagaTela(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function comida(){
    context.fillStyle = 'red'
    context.fillRect(comidal, comidaa, l, a)
}

function trocaComida(){
    while (pos.indexOf(`${comidal}, ${comidaa}`) != -1){
        cxl.sort(randOrd)
        cxa.sort(randOrd)
        comidal = cxl[0]
        comidaa = cxa[0]
        }
}

function aumentaDificuldade(){
    if (pontos % 5 == 0) {
        nivel = nivel-5
        dificuldade++
    }
}

function pegaFruta() {
    tamanho++
    pontos++
    contador.innerHTML = `<h2>Pontos: ${pontos}<br>
    Dificuldade: ${dificuldade}</h2>`
    aumentaDificuldade()
    cxl.sort(randOrd)
    cxa.sort(randOrd)
    comidal = cxl[0]
    comidaa = cxa[0]
    trocaComida()
    comida()
}

function movimento(evt) {

    function cima(){
        if (xa == comidaa+5 && xl == comidal) {
            pegaFruta()
            apagaTela()
            comida()
            local()
            xa = xa - a
            listaxl.push(xl)
            listaxa.push(xa)
            pos.push(`${xl}, ${xa}`)
            listal.push(l)
            listaa.push(a)
            personagem()
            } else if (xa >= 0 && xa <= 145 && xl >= 0 && xl <= 290) {
                apagaTela()
                comida()
                local()
                xa = xa - a
                listaxl.push(xl)
                listaxa.push(xa)
                pos.push(`${xl}, ${xa}`)
                listal.push(l)
                listaa.push(a)
                personagem()
                } else {
                    clearInterval(int)
                    alert(`Você perdeu... Tecle ENTER para reiniciar.`)
                    document.location.reload(true)
                    }
    }
    
    function baixo() {
        if (xa == comidaa-5 && xl == comidal) {
            pegaFruta()
            apagaTela()
            comida()
            local()
            xa = xa + a
            listaxl.push(xl)
            listaxa.push(xa)
            pos.push(`${xl}, ${xa}`)
            listal.push(l)
            listaa.push(a)
            personagem()    
            } else if (xa >= 0 && xa <= 145 && xl >= 0 && xl <= 290) {    
                apagaTela()
                comida()
                local()
                xa = xa + a
                listaxl.push(xl)
                listaxa.push(xa)
                pos.push(`${xl}, ${xa}`)
                listal.push(l)
                listaa.push(a)
                personagem()
                } else {
                    clearInterval(int)
                    alert(`Você perdeu... Tecle ENTER para reiniciar.`)
                    document.location.reload(true)
                    }
    }
    
    function esquerda(){
        if (xa == comidaa && xl == comidal+10) {
            pegaFruta()
            apagaTela()
            comida()
            local()
            xl = xl - l
            listaxl.push(xl)
            listaxa.push(xa)
            pos.push(`${xl}, ${xa}`)
            listal.push(l)
            listaa.push(a)
            personagem()
            } else if (xa >= 0 && xa <= 145 && xl >= 0 && xl <= 290) {
                apagaTela()
                comida()
                local()
                xl = xl - l
                listaxl.push(xl)
                listaxa.push(xa)
                pos.push(`${xl}, ${xa}`)
                listal.push(l)
                listaa.push(a)
                personagem()
                } else {
                    clearInterval(int)
                    alert(`Você perdeu... Tecle ENTER para reiniciar.`)
                    document.location.reload(true)
                    }
    }

    function direita(){
        if (xa == comidaa && xl == comidal-10) {
            pegaFruta()
            apagaTela()
            comida()
            local()
            xl = xl + l
            listaxl.push(xl)
            listaxa.push(xa)
            pos.push(`${xl}, ${xa}`)
            listal.push(l)
            listaa.push(a)
            personagem()
            } else if (xa >= 0 && xa <= 145 && xl >= 0 && xl <= 290) {
                apagaTela()
                comida()
                local()
                xl = xl + l
                listaxl.push(xl)
                listaxa.push(xa)
                pos.push(`${xl}, ${xa}`)
                listal.push(l)
                listaa.push(a)
                personagem()
                } else {
                    clearInterval(int)
                    alert(`Você perdeu... Tecle ENTER para reiniciar.`)
                    document.location.reload(true)
                    }
    }
        
        switch (evt.keyCode) {
            case 38:  /*seta para cima */
                clearInterval(int)
                lado = cima
                int = setInterval(lado, nivel)
                cima()
                break;
            case 40:  /*seta para baixo*/
                clearInterval(int)
                lado = baixo
                int = setInterval(lado, nivel)
                baixo()
                break;
            case 37:  /*seta para esquerda*/
                clearInterval(int)
                lado = esquerda
                int = setInterval(lado, nivel)
                esquerda()
                break;
            case 39:  /*seta para direita*/
                clearInterval(int)
                lado = direita
                int = setInterval(lado, nivel)
                direita()
                break;
            case 32:
                tamanho++
                break;
            case 16: 
                cxl.sort(randOrd)
                cxa.sort(randOrd)
                comidal = cxl[0]
                comidaa = cxa[0]
                comidapos = `${cxl}, ${cxa}`
                trocaComida()
                comida()
            case 18:
                nivel = nivel-5
            case 13:
                alert('Jogo pausado. Pressione ENTER.')
        }
}

function local(){
    if (pos.length == tamanho) {
        pos.shift()
        pos.shift()
    }

    if (pos.indexOf(`${xl}, ${xa}`) != pos.length-1) {
        alert(`Você perdeu... Tecle ENTER para reiniciar.`)
        document.location.reload(true)
    }
}



