const topBar = document.querySelector('.topbar')


// ALTERAR A OPACIDADE  

window.addEventListener('scroll', ()=>{
    topBar.classList.add('transparent')
    if(window.scrollY > 80){
        topBar.classList.remove('transparent')
    }    
})


// VARIAVEL PARA ARMAZENAR A ALTURA DO TOPBAR
let topBarHeight = topBar.offsetHeight

const mainContent = document.querySelector('.main-content')
mainContent.style.paddingTop = `${topBarHeight + 20}px `


// BOTAO DE PLAY
const containerCentral = document.querySelectorAll('.card-concentracion')
const containerSpotifyPlaylists = document.querySelectorAll('.card-spotify-playlists')


// FUNCAO DE REPETIR 
const createButton = card =>{
    const button = document.createElement('button')
    button.innerHTML = '<i class="fa-solid fa-play"></i>'

    card.appendChild(button)

    // OCULTAR O BOTAO
    button.style.display = 'none';
	button.classList.add('btn-play'); 

    // EVENTO HOVER NO BOTAO QUANDO O MOUSE ENTAR EM Y
    card.addEventListener('mouseover', () =>{
        button.style.display = 'block'
    })

    card.addEventListener('mouseout', () =>{
        button.style.display = 'none'
    })
    
}

// USAR A FUNCAO NO CONTEUDO

containerCentral.forEach (card =>{
    createButton(card)

})

containerSpotifyPlaylists.forEach (card =>{
    createButton(card)

})

