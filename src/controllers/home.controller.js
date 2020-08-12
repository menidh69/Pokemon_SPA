import views from '../views/home.html'

export default () =>{
    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    const btnClick = divElement.querySelector('#btnclick');
    btnClick.addEventListener('click', ()=>{
        alert('clicl')
    });

    return divElement;
};