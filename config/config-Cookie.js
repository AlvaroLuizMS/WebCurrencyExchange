//Função que cria um cookie de acordo com a escolha de tema do usuario
function newCookieUserTheme() {
    //Verifica o tema selecionado no modo mobile
    const select = document.querySelector('.range-change-theme').addEventListener('change', el => {
        if (el.target.value == 0) {
            document.cookie = `data-theme=t-dark; path=/`;
        } else if (el.target.value == 1) {
            document.cookie = `data-theme=t-light; path=/`;
        }
    })

    const selectViewPc = document.querySelector('.btn-theme').addEventListener('click', event => {
        //Verifica o tema selecionado no modo pc
        let valueInputHide = document.querySelector('.input-hide')
        if (valueInputHide.value == 0) {
            document.cookie = `data-theme=t-dark; path=/`;
        } else if (valueInputHide.value == 1) {
            document.cookie = `data-theme=t-light; path=/`;
        }
    })

    //aplica como tema do site o tema que o usuario escolheu e esta armazenado em um cookie
    let newCookie = document.cookie.split(';')[0].split('=')[1]
    const by = document.querySelector('body').attributes['data-theme'].value = newCookie

    /* 
    Para o primeiro acesso do usuario define o tema padrão para dark 
    após ele realizar a escolha do tema de sua preferência o site 
    armazena a escolha em um cookie
    */

    if (newCookie == undefined) {
        document.querySelector('body').attributes['data-theme'].value = 't-dark'
    }
}

newCookieUserTheme()