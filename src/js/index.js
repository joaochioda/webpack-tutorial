import '../css/styles.scss';
import img from '../assets/di.png';

const textComponent = () => {
    const elh1 = document.createElement('h1');
    elh1.innerHTML = 'Ola Mundo';
    elh1.classList.add('title');
    return elh1;
}

const imgComponent = () => {
    const eleImg = new Image(300, 300);
    eleImg.src = img;
    return eleImg;
}

document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());
