/* Abre e fecha menu mobile */
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')
menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x") : menuMobile.classList.replace("bi-x", "bi-list")
    body.classList.toggle('menu-nav-active')
})

/* Fecha o menu quando clica em algum item*/

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if(body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})

/* Animação de scroll*/

const item = document.querySelectorAll("[data-anime]")

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85     /* pageyoffset verifica a distância no eixo y do topo da tela*/

    item.forEach((element) => {
        if(windowTop > element.offsetTop){     /* Verifica a distância do topo até o elemento data-anime (elemento) */
            element.classList.add("animate")
        }else{
            element.classList.remove("animate")
        }
    })
}
animeScroll()

window.addEventListener("scroll", () =>{
    animeScroll()
})

// Ativar carregamento do botão enviar do formulário de contato

const btnEnviar = document.querySelector("#btn-enviar")
const btnEnviarLoader = document.querySelector("#btn-enviar-loader")

btnEnviar.addEventListener("click", () => {
    btnEnviarLoader.style.display = "block"
    btnEnviar.style.display = "none"
})