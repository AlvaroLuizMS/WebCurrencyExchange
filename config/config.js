//Função para mudar o tema da pagina de pela preferência do usuario.
function mudarTema() {

    //Variavel para encontrar o button na pagina. 
    const button = document.querySelector('.btn-theme')

    //Variaveis para definir a troca do tema. 
    const themes = {
        't-dark': 't-light',
        't-light': 't-dark',
    }

    //Se o button existe, add o EventListener com a função click, e define a troca de tema.
    if (button) {
        button.addEventListener('click', event => {
            event.preventDefault()
            const currentTheme = document.body.dataset.theme
            document.body.setAttribute('data-theme', themes[currentTheme] || 't-light')
        })
    }
}

//Função para encontrar a cotação da moeda pesquisada
function searchCoin() {

    const button = document.getElementById('img1')
    const valueSearch = document.getElementById('input-search')

    button.addEventListener('click', el => {
        const search = valueSearch.value
        search

        fetch('https://economia.awesomeapi.com.br/last/' + search).then(r => {
            return r.json()
        }).then(results => {
            //aqui ele vai imprimir na tela a moeda pesquisada pelo usuario, ou o erro, caso a moeda nao exista.
            const searchFilter = search.toUpperCase() + 'BRL'
            const nameCoin = results[searchFilter].name
            const code = results[searchFilter].code
            const buy = results[searchFilter].bid
            const sell = results[searchFilter].ask
            const varBid = results[searchFilter].varBid
            const pctChang = results[searchFilter].pctChange
            const high = results[searchFilter].high
            const low = results[searchFilter].low

            const floatBuy = parseFloat(buy)
            const floatSell = parseFloat(sell)
            const floatLow = parseFloat(low)
            const floatHigh = parseFloat(high)
            const floatVarBid = parseFloat(varBid)
            const floatPctChang = parseFloat(pctChang)

            document.getElementById('span-coinSearch').innerHTML = nameCoin
            document.getElementById('code').innerHTML = code
            document.getElementById('compra').innerHTML = 'R$ ' + floatBuy.toFixed(2).replace('.', ',')
            document.getElementById('venda').innerHTML = 'R$ ' + floatSell.toFixed(2).replace('.', ',')
            document.getElementById('variacao').innerHTML = floatVarBid.toFixed(3).replace('.', ',')
            document.getElementById('porcentagemVariacao').innerHTML = floatPctChang.toFixed(2).replace('.', ',') + '%'
            document.getElementById('high').innerHTML = 'R$ ' + floatHigh.toFixed(2).replace('.', ',')
            document.getElementById('low').innerHTML = 'R$ ' + floatLow.toFixed(2).replace('.', ',')
        })
    })
}

function modal() {
    document.getElementById('modalSearch').style.display = 'block'
    document.getElementById('searchBox').style.position = 'relative'
    document.querySelector('.main').style.display = 'none'
}

function exitModal() {
    document.getElementById('modalSearch').style.display = 'none'
    document.querySelector('.main').style.display = 'grid'
}
mudarTema()
searchCoin()