/* ----------| Seleção de elementos |---------------------------------------- */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)

/* ----------| Criar elementos |--------------------------------------------- */
const _el = document.createElement.bind(document)
const _ = (newElement) => {
    const elementCreate = newElement.includes('.') ?  newElement.split('.')[0] : newElement
    
    return document.createElement.bind(elementCreate)
}

/* ----------| Seleciona elementos no DOM |---------------------------------- */
const html = {
    head: $('head'),
    body: $('body'),
    main: $('#main'),
    scripts: Array.from($$('script'))
}

const createApp = (element) => {
    html.main.appendChild(element);
}

/* ----------| Função automatiza requisição |-------------------------------- */
function require(fileAddres) {

    const fileExt = fileAddres.replace(/\.\.\//g, '').replace(/\.\//g, '').split('.')

    let fileFullName = '../src/' + fileAddres;

    if (fileExt.length !== 2) {
        fileFullName = fileFullName + '.js';
        fileExt[1] = 'js';
    }

    switch (fileExt[1]) {
        case 'js':importJs(fileFullName);
            break;

        case 'css': importCss(fileFullName);
            break;

        default: console.log('ERRO: Arquivo não suportado.')
    }
}

/* Require JavaScript */
function importJs(fileAddres) {
    const newScript = _el('script');
    newScript.type = 'text/javascript'
    newScript.src = fileAddres

    html.body.appendChild(newScript)
}

/* Require Style */
function importCss(fileAddres) {
    const newStyle = _el('link');

    newStyle.rel = 'stylesheet';
    newStyle.href = fileAddres;

    html.head.appendChild(newStyle)
}

/* ----------| Função Principal |-------------------------------------------- */
(function () {
    require('index')
})()

