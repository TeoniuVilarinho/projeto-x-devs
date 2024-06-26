const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0

btnAvancar.addEventListener('click', () => {
    if(cartaoAtual === cartoes.length - 1) return

    esconderCartaoSelecionado()
    cartaoAtual++
    mostrarCartaoSelecionado()
})

btnVoltar.addEventListener('click', () => {
    if(cartaoAtual === 0) return

    esconderCartaoSelecionado()
    cartaoAtual--
    mostrarCartaoSelecionado()
})

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado')
}

function mostrarCartaoSelecionado() {
    cartoes[cartaoAtual].classList.add('selecionado')
}