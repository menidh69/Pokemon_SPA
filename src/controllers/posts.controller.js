import view from '../views/posts.html'



const getPosts = async () =>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
    return await response.json();
}

const getPokemon = async (url) =>{
    const response = await fetch(url);
    return response.json();
}

export default async () =>{
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    const postElement = divElement.querySelector('#posts');
    const totalPokemon = divElement.querySelector('#total');


    const posts = await getPosts();
    totalPokemon.innerHTML = posts.results.length;
    posts.results.forEach(async post =>{
        let pokemon = await getPokemon(post.url)
        postElement.innerHTML += `
        <li style='flex-basis:300px'>
            <h4>${post.name}</h4>
            <img src=${pokemon.sprites.front_default}>
        </li>
        `
    })



    return divElement;
}