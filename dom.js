
let imagem = document.querySelector('#foto')
let tela = document.querySelector('main')
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')
let btnPink = document.querySelector('#btpink')
let btnBlue = document.querySelector('#btblue')
let btnYellow = document.querySelector('#btyellow')
let btnGreen = document.querySelector('#btgreen')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnLight.addEventListener('click', modoLight)
btnPink.addEventListener('click', modoPink)
btnBlue.addEventListener('click', modoBlue)
btnYellow.addEventListener('click', modoYellow)
btnGreen.addEventListener('click', modoGreen)



function modoLight(){
  imagem.setAttribute('src', 'https://assets.jatimnetwork.com/crop/0x0:0x0/750x500/webp/photo/2022/12/16/2208436594.png');
  tela.setAttribute('class', 'light');
}

function modoDark(){
  imagem.setAttribute('src', 'https://1.bp.blogspot.com/-cwrR090hNsk/YVGxEsu5zcI/AAAAAAAAGT8/wCk9zy1gSCUGtGGcHLI3zk2jlXNe7R_5ACLcBGAsYHQ/s600/Azazel%2BAmeri.jpg');
  tela.setAttribute('class', 'dark');
}


function modoPink(){
  imagem.setAttribute('src', 'https://i.pinimg.com/736x/5b/9d/be/5b9dbecd45d92b72da84f0a983364783.jpg');
  tela.setAttribute('class', 'pink');
}

function modoBlue(){
  imagem.setAttribute('src', 'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/02/iruma-kun-destacada.jpg?fit=774%2C489&ssl=1');
  tela.setAttribute('class', 'blue');
}

function modoYellow(){
  imagem.setAttribute('src', 'https://1.bp.blogspot.com/-UYD8ltX3ikw/YQSBoTCN1JI/AAAAAAAA6Og/IO4EEJxehpAPmbJwhQkghTjXjPtkWGi3QCLcBGAsYHQ/s1280/Sabnock%2BSabro%2BPersonagens%2Bde%2BMairimashita%2BIruma-kun.png');
  tela.setAttribute('class', 'yellow');
}

function modoGreen(){
  imagem.setAttribute('src', 'https://lostinanime.com/wp-content/uploads/2021/06/Mairimashita-Iruma-kun-2-11-45.jpg');
  tela.setAttribute('class', 'green');
}