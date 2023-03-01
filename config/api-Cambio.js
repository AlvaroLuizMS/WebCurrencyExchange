//Requisição da API com as cotações de cambio 

setInterval(() => {
    //Dolar
    fetch('https://economia.awesomeapi.com.br/last/USD').then(r => {
        return r.json()
    }).then(results => {
        const valueCoin = results.USDBRL.pctChange
        const moeda = results.USDBRL.name
        const nameCoin = results.USDBRL.code

        document.getElementById('span-Name1').innerHTML = nameCoin
        document.getElementById('span-Moeda1').innerHTML = moeda

        if (valueCoin == 0 || valueCoin > 0) {
            document.getElementById('span-Value').innerHTML = '+' + valueCoin + '%'
            document.getElementById('color-valueUSD').style.backgroundColor = "#0fef83"
            document.getElementById('span-Value').style.borderRadius = "5px"
            document.getElementById('span-Value').style.fontWeight = "bold"
            document.getElementById('span-Value').style.color = '#fff'
        } else {
            document.getElementById('span-Value').innerHTML = valueCoin + '%'
            document.getElementById('color-valueUSD').style.backgroundColor = "#d30d48"
            document.getElementById('span-Value').style.borderRadius = "5px"
            document.getElementById('span-Value').style.fontWeight = "bold"
            document.getElementById('span-Value').style.color = '#fff'
            document.getElementById('span-Value').style.width = "50px"
        }

    })

    //Euro
    fetch('https://economia.awesomeapi.com.br/last/EUR').then(r => {
        return r.json()
    }).then(results => {
        const valueCoin = results.EURBRL.pctChange
        const moeda = results.EURBRL.name
        const nameCoin = results.EURBRL.code


        document.getElementById('span-Name2').innerHTML = nameCoin
        document.getElementById('span-Moeda2').innerHTML = moeda

        if (valueCoin == 0 || valueCoin > 0) {
            document.getElementById('span-Value2').innerHTML = '+' + valueCoin + '%'
            document.getElementById('color-valueEUR').style.backgroundColor = "#0fef83"
            document.getElementById('span-Value2').style.borderRadius = "5px"
            document.getElementById('span-Value2').style.fontWeight = "bold"
            document.getElementById('span-Value2').style.color = '#fff'
        } else {
            document.getElementById('span-Value2').innerHTML = valueCoin + '%'
            document.getElementById('color-valueEUR').style.backgroundColor = "#d30d48"
            document.getElementById('span-Value2').style.borderRadius = "5px"
            document.getElementById('span-Value2').style.fontWeight = "bold"
            document.getElementById('span-Value2').style.color = '#fff'
        }

    })

    //Dolar Canadense
    fetch('https://economia.awesomeapi.com.br/last/CAD').then(r => {
        return r.json()
    }).then(results => {
        const valueCoin = results.CADBRL.pctChange
        const moeda = results.CADBRL.name
        const nameCoin = results.CADBRL.code


        document.getElementById('span-Name3').innerHTML = nameCoin
        document.getElementById('span-Moeda3').innerHTML = moeda

        if (valueCoin == 0 || valueCoin > 0) {
            document.getElementById('span-Value3').innerHTML = '+' + valueCoin + '%'
            document.getElementById('color-valueCAD').style.backgroundColor = "#0fef83"
            document.getElementById('span-Value3').style.borderRadius = "5px"
            document.getElementById('span-Value3').style.fontWeight = "bold"
            document.getElementById('span-Value3').style.color = '#fff'
        } else {
            document.getElementById('span-Value3').innerHTML = valueCoin + '%'
            document.getElementById('color-valueCAD').style.backgroundColor = "#d30d48"
            document.getElementById('span-Value3').style.borderRadius = "5px"
            document.getElementById('span-Value3').style.fontWeight = "bold"
            document.getElementById('span-Value3').style.color = '#fff'
        }

    })


    //Peso Argentino 
    fetch('https://economia.awesomeapi.com.br/last/ARS').then(r => {
        return r.json()
    }).then(results => {
        const valueCoin = results.ARSBRL.pctChange
        const moeda = results.ARSBRL.name
        const nameCoin = results.ARSBRL.code


        document.getElementById('span-Name4').innerHTML = nameCoin
        document.getElementById('span-Moeda4').innerHTML = moeda

        if (valueCoin == 0 || valueCoin > 0) {
            document.getElementById('span-Value4').innerHTML = '+' + valueCoin + '%'
            document.getElementById('color-valueARS').style.backgroundColor = "#0fef83"
            document.getElementById('span-Value4').style.borderRadius = "5px"
            document.getElementById('span-Value4').style.fontWeight = "bold"
            document.getElementById('span-Value4').style.color = '#fff'
        } else {
            document.getElementById('span-Value4').innerHTML = valueCoin + '%'
            document.getElementById('color-valueARS').style.backgroundColor = "#d30d48"
            document.getElementById('span-Value4').style.borderRadius = "5px"
            document.getElementById('span-Value4').style.fontWeight = "bold"
            document.getElementById('span-Value4').style.color = '#fff'
        }

    })

    //Peso Chileno
    fetch('https://economia.awesomeapi.com.br/last/CLP').then(r => {
        return r.json()
    }).then(results => {
        const valueCoin = results.CLPBRL.pctChange
        const moeda = results.CLPBRL.name
        const nameCoin = results.CLPBRL.code


        document.getElementById('span-Name5').innerHTML = nameCoin
        document.getElementById('span-Moeda5').innerHTML = moeda

        if (valueCoin == 0 || valueCoin > 0) {
            document.getElementById('span-Value5').innerHTML = '+' + valueCoin + '%'
            document.getElementById('color-valueCLP').style.backgroundColor = "#0fef83"
            document.getElementById('span-Value5').style.borderRadius = "5px"
            document.getElementById('span-Value5').style.fontWeight = "bold"
            document.getElementById('span-Value5').style.color = '#fff'
        } else {
            document.getElementById('span-Value5').innerHTML = valueCoin + '%'
            document.getElementById('color-valueCLP').style.backgroundColor = "#d30d48"
            document.getElementById('span-Value5').style.borderRadius = "5px"
            document.getElementById('span-Value5').style.fontWeight = "bold"
            document.getElementById('span-Value5').style.color = '#fff'
        }

    })

    //Yuan Chinês
    fetch('https://economia.awesomeapi.com.br/last/CNY').then(r => {
        return r.json()
    }).then(results => {
        const valueCoin = results.CNYBRL.pctChange
        const moeda = results.CNYBRL.name
        const nameCoin = results.CNYBRL.code


        document.getElementById('span-Name6').innerHTML = nameCoin
        document.getElementById('span-Moeda6').innerHTML = moeda

        if (valueCoin == 0 || valueCoin > 0) {
            document.getElementById('span-Value6').innerHTML = '+' + valueCoin + '%'
            document.getElementById('color-valueCNY').style.backgroundColor = "#0fef83"
            document.getElementById('span-Value6').style.borderRadius = "5px"
            document.getElementById('span-Value6').style.fontWeight = "bold"
            document.getElementById('span-Value6').style.color = '#fff'
        } else {
            document.getElementById('span-Value6').innerHTML = valueCoin + '%'
            document.getElementById('color-valueCNY').style.backgroundColor = "#d30d48"
            document.getElementById('span-Value6').style.borderRadius = "5px"
            document.getElementById('span-Value6').style.fontWeight = "bold"
            document.getElementById('span-Value6').style.color = '#fff'
        }

    })

    //Libra Esterlina
    fetch('https://economia.awesomeapi.com.br/last/GBP').then(r => {
        return r.json()
    }).then(results => {
        const valueCoin = results.GBPBRL.pctChange
        const moeda = results.GBPBRL.name
        const nameCoin = results.GBPBRL.code


        document.getElementById('span-Name7').innerHTML = nameCoin
        document.getElementById('span-Moeda7').innerHTML = moeda

        if (valueCoin == 0 || valueCoin > 0) {
            document.getElementById('span-Value7').innerHTML = '+' + valueCoin + '%'
            document.getElementById('color-valueGBP').style.backgroundColor = "#0fef83"
            document.getElementById('span-Value7').style.borderRadius = "5px"
            document.getElementById('span-Value7').style.fontWeight = "bold"
            document.getElementById('span-Value7').style.color = '#fff'
        } else {
            document.getElementById('span-Value7').innerHTML = valueCoin + '%'
            document.getElementById('color-valueGBP').style.backgroundColor = "#d30d48"
            document.getElementById('span-Value7').style.borderRadius = "5px"
            document.getElementById('span-Value7').style.fontWeight = "bold"
            document.getElementById('span-Value7').style.color = '#fff'
        }

    })

    //Iene Japonês
    fetch('https://economia.awesomeapi.com.br/last/JPY').then(r => {
        return r.json()
    }).then(results => {

        //Request Name e Porcentagem das moedas do OBJ.JSON
        const valueCoin = results.JPYBRL.pctChange
        const moeda = results.JPYBRL.name
        const nameCoin = results.JPYBRL.code

        //Colocando os dados no HTML
        document.getElementById('span-Name8').innerHTML = nameCoin
        document.getElementById('span-Moeda8').innerHTML = moeda

        //Verificando se a variação da moeda é negativa ou positiva para mudar a cor da DIV
        if (valueCoin == 0 || valueCoin > 0) {
            document.getElementById('span-Value8').innerHTML = '+' + valueCoin + '%'
            document.getElementById('color-valueJPY').style.backgroundColor = "#0fef83"
            document.getElementById('span-Value8').style.borderRadius = "5px"
            document.getElementById('span-Value8').style.fontWeight = "bold"
            document.getElementById('span-Value8').style.color = '#fff'
        } else {
            document.getElementById('span-Value8').innerHTML = valueCoin + '%'
            document.getElementById('color-valueJPY').style.backgroundColor = "#d30d48"
            document.getElementById('span-Value8').style.borderRadius = "5px"
            document.getElementById('span-Value8').style.fontWeight = "bold"
            document.getElementById('span-Value8').style.color = '#fff'
        }

    })

    //Request API-câmbio
    fetch('https://economia.awesomeapi.com.br/last/USD,EUR,CAD,ARS,CLP,CNY,GBP,JPY').then(r => {
        return r.json()
    }).then(results => {

        //Request Name e Coin do OBJ.JSON - Alterando o valor de String para number
        const usdName = results.USDBRL.code
        const usdValueHigh = parseFloat(results.USDBRL.high)
        const usdValueLow = parseFloat(results.USDBRL.low)
        const eurName = results.EURBRL.code
        const eurValueHigh = parseFloat(results.EURBRL.high)
        const eurValueLow = parseFloat(results.EURBRL.low)
        const cadName = results.CADBRL.code
        const cadValueHigh = parseFloat(results.CADBRL.high)
        const cadValueLow = parseFloat(results.CADBRL.low)
        const arsName = results.ARSBRL.code
        const arsValueHigh = parseFloat(results.ARSBRL.high)
        const arsValueLow = parseFloat(results.ARSBRL.low)
        const clpName = results.CLPBRL.code
        const clpValueHigh = parseFloat(results.CLPBRL.high)
        const clpValueLow = parseFloat(results.CLPBRL.low)
        const cnyName = results.CNYBRL.code
        const cnyValueHigh = parseFloat(results.CNYBRL.high)
        const cnyValueLow = parseFloat(results.CNYBRL.low)
        const gbpName = results.GBPBRL.code
        const gbpValueHigh = parseFloat(results.GBPBRL.high)
        const gbpValueLow = parseFloat(results.GBPBRL.low)
        const jpyName = results.JPYBRL.code
        const jpyValueHigh = parseFloat(results.JPYBRL.high)
        const jpyValueLow = parseFloat(results.JPYBRL.low)


        //Array de obj para receber os dados e ordena-los
        const cotacoesDay = [
            { name: usdName, value: usdValueHigh.toFixed(2).replace('.', ','), valueLow: usdValueLow.toFixed(2).replace('.', ',') },
            { name: eurName, value: eurValueHigh.toFixed(2).replace('.', ','), valueLow: eurValueLow.toFixed(2).replace('.', ',') },
            { name: cadName, value: cadValueHigh.toFixed(2).replace('.', ','), valueLow: cadValueLow.toFixed(2).replace('.', ',') },
            { name: arsName, value: arsValueHigh.toFixed(2).replace('.', ','), valueLow: arsValueLow.toFixed(2).replace('.', ',') },
            { name: clpName, value: clpValueHigh.toFixed(2).replace('.', ','), valueLow: clpValueLow.toFixed(2).replace('.', ',') },
            { name: cnyName, value: cnyValueHigh.toFixed(2).replace('.', ','), valueLow: cnyValueLow.toFixed(2).replace('.', ',') },
            { name: gbpName, value: gbpValueHigh.toFixed(2).replace('.', ','), valueLow: gbpValueLow.toFixed(2).replace('.', ',') },
            { name: jpyName, value: jpyValueHigh.toFixed(2).replace('.', ','), valueLow: jpyValueLow.toFixed(2).replace('.', ',') }
        ]

        //Função para ordenar o array de objetos pelo valor da moeda
        function ordenar(a, b) {
            if (a.value < b.value && a.valueLow < b.valueLow)
                return -1
            if (a.value > b.value && a.valueLow < b.valueLow)
                return 1
            return 0
        }

        //Ordenando array
        const highDayCoins = cotacoesDay.sort(ordenar)

        //Incluindo nome das moedas em alta no HTML
        document.getElementById('nameAlta1').innerHTML = highDayCoins[7].name
        document.getElementById('nameAlta2').innerHTML = highDayCoins[6].name
        document.getElementById('nameAlta3').innerHTML = highDayCoins[5].name
        document.getElementById('nameAlta4').innerHTML = highDayCoins[4].name
        document.getElementById('nameAlta5').innerHTML = highDayCoins[3].name
        document.getElementById('nameAlta6').innerHTML = highDayCoins[2].name
        document.getElementById('nameAlta7').innerHTML = highDayCoins[1].name
        document.getElementById('nameAlta8').innerHTML = highDayCoins[0].name

        //Incluindo value das moedas em alta no HTML
        document.getElementById('coinAlta1').innerHTML = 'R$ ' + highDayCoins[7].value
        document.getElementById('coinAlta2').innerHTML = 'R$ ' + highDayCoins[6].value
        document.getElementById('coinAlta3').innerHTML = 'R$ ' + highDayCoins[5].value
        document.getElementById('coinAlta4').innerHTML = 'R$ ' + highDayCoins[4].value
        document.getElementById('coinAlta5').innerHTML = 'R$ ' + highDayCoins[3].value
        document.getElementById('coinAlta6').innerHTML = 'R$ ' + highDayCoins[2].value
        document.getElementById('coinAlta7').innerHTML = 'R$ ' + highDayCoins[1].value
        document.getElementById('coinAlta8').innerHTML = 'R$ ' + highDayCoins[0].value

        //Incluindo nome das moedas em baixa no HTML
        document.getElementById('nameBaixa1').innerHTML = highDayCoins[7].name
        document.getElementById('nameBaixa2').innerHTML = highDayCoins[6].name
        document.getElementById('nameBaixa3').innerHTML = highDayCoins[5].name
        document.getElementById('nameBaixa4').innerHTML = highDayCoins[4].name
        document.getElementById('nameBaixa5').innerHTML = highDayCoins[3].name
        document.getElementById('nameBaixa6').innerHTML = highDayCoins[2].name
        document.getElementById('nameBaixa7').innerHTML = highDayCoins[1].name
        document.getElementById('nameBaixa8').innerHTML = highDayCoins[0].name

        //Incluindo value das moedas em baixa no HTML
        document.getElementById('coinBaixa1').innerHTML = 'R$ ' + highDayCoins[7].valueLow
        document.getElementById('coinBaixa2').innerHTML = 'R$ ' + highDayCoins[6].valueLow
        document.getElementById('coinBaixa3').innerHTML = 'R$ ' + highDayCoins[5].valueLow
        document.getElementById('coinBaixa4').innerHTML = 'R$ ' + highDayCoins[4].valueLow
        document.getElementById('coinBaixa5').innerHTML = 'R$ ' + highDayCoins[3].valueLow
        document.getElementById('coinBaixa6').innerHTML = 'R$ ' + highDayCoins[2].valueLow
        document.getElementById('coinBaixa7').innerHTML = 'R$ ' + highDayCoins[1].valueLow
        document.getElementById('coinBaixa8').innerHTML = 'R$ ' + highDayCoins[0].valueLow
    })
}, 1000)