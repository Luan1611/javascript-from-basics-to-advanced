let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let secondPlayer

// contador de jogadas
let player1 = 0
let player2 = 0

// adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {

    // quando alguém clica na caixa
    boxes[i].addEventListener('click', function() {

        let el = checkEl(player1, player2)

        // verifica se já tem x ou o
        if (this.childNodes.length === 0) {

            let cloneEl = el.cloneNode(true)

            this.appendChild(cloneEl)
    
            // computar jogada
            if (player1 === player2) {

                player1++

                if (secondPlayer === 'ai-player') {

                    //funcao para executar jogada
                    computerPlay()
                    player2++
                }
            } else {
                player2++
            }

            // checa quem venceu
            checkWinCondicion()
        }

    })
}

// evento para saber se é 2 players ou IA
for(let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function() {

        secondPlayer = this.children[1].id

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'
        }

        setTimeout(function() {
            let container = document.querySelector('#container')
            container.classList.remove('hide')
        }, 500)
    })
}

// vê quem vai jogar
function checkEl(player1, player2) {
    if(player1 === player2) {
        // x
        el = x
    } else {
        // o
        el = o
    }

    return el
}

//  ve quem ganhou
function checkWinCondicion() {
    let b1 = document.querySelector('#block-1')
    let b2 = document.querySelector('#block-2')
    let b3 = document.querySelector('#block-3')
    let b4 = document.querySelector('#block-4')
    let b5 = document.querySelector('#block-5')
    let b6 = document.querySelector('#block-6')
    let b7 = document.querySelector('#block-7')
    let b8 = document.querySelector('#block-8')
    let b9 = document.querySelector('#block-9')

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if (b1Child === 'x' && b2Child === 'x' && b3Child === 'x') {
            declareWinner('x')
        } else if (b1Child === 'o' && b2Child === 'o' && b3Child === 'o') {
            declareWinner('o')
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if (b4Child === 'x' && b5Child === 'x' && b6Child === 'x') {
            declareWinner('x')
        } else if (b4Child === 'o' && b5Child === 'o' && b6Child === 'o') {
            declareWinner('o')
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b7Child === 'x' && b8Child === 'x' && b9Child === 'x') {
            declareWinner('x')
        } else if (b7Child === 'o' && b8Child === 'o' && b9Child === 'o') {
            declareWinner('o')
        }
    }

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b1Child === 'x' && b4Child === 'x' && b7Child === 'x') {
            declareWinner('x')
        } else if (b1Child === 'o' && b4Child === 'o' && b7Child === 'o') {
            declareWinner('o')
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if (b2Child === 'x' && b5Child === 'x' && b8Child === 'x') {
            declareWinner('x')
        } else if (b2Child === 'o' && b5Child === 'o' && b8Child === 'o') {
            declareWinner('o')
        }
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b3Child === 'x' && b6Child === 'x' && b9Child === 'x') {
            declareWinner('x')
        } else if (b3Child === 'o' && b6Child === 'o' && b9Child === 'o') {
            declareWinner('o')
        }
    }

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b1Child === 'x' && b5Child === 'x' && b9Child === 'x') {
            declareWinner('x')
        } else if (b1Child === 'o' && b5Child === 'o' && b9Child === 'o') {
            declareWinner('o')
        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b3Child === 'x' && b5Child === 'x' && b7Child === 'x') {
            declareWinner('x')
        } else if (b3Child === 'o' && b5Child === 'o' && b7Child === 'o') {
            declareWinner('o')
        }
    }

    // deu velha
    let counter = 0

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++
        }
    }

    if (counter === 9) {
        declareWinner('deu velha')
    }

}

// limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {
    let scoreBoardX = document.querySelector('#scoreboard-1')
    let scoreBoardO = document.querySelector('#scoreboard-2')
    let msg = ''

    if (winner === 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1
        msg = 'O jogador 1 venceu!'
    } else if(winner === 'o') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1
        msg = 'O jogador 2 venceu!'
    } else {
        msg = 'Deu velha!'
    }

    // exibe a msg
    messageText.textContent = msg
    messageContainer.classList.remove('hide')

    // esconde a msg
    setTimeout(function() {
        messageContainer.classList.add('hide')
    }, 3000)

    // zerar as jogadas
    player1 = 0
    player2 = 0

    // remove 'x' e o 'o'
    let boxesToRemove = document.querySelectorAll('.box div')

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }

}

// executar a lógica da jogada do CPU
function computerPlay() {
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0

    // só preencher se estiver vazio o filho
    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5)

        if (boxes[i].childNodes[0] === undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO)
                counter++
                break
            }
            // checagem de quantas estão preenchidas
        } else {
            filled++
        }
    }

    if (counter == 0 && filled < 9) {
        computerPlay()
    }
}
