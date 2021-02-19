import '../css/styles.scss'
import img from '../assets/wp.png'

const textComponent = () => {
    const elH1 = document.createElement('h1');
    elH1.classList.add('title')
    elH1.innerHTML = "Welcome to Webpackc Class"
    return elH1;
}

const imgComponent=()=>{
    const elImg = new Image(300,300);
    elImg.classList.add('imagem')
    elImg.src=img;
    return elImg;
}

document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());

