import {pages}from '../controllers/index'

let content = document.getElementById('app');


const router = async (route) =>{
    content.innerHTML='';
    switch(route){
        case '#/':
            {
                return content.appendChild(pages.home());
            }
        case '#/posts':
            return content.appendChild(await pages.posts());
        case '#/about':
            return content.appendChild(pages.notFound());
        default:
            return content.appendChild(pages.notFound());
    }
}

export {router}