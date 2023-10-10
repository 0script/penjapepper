let button_menu=document.querySelector('a#menu-btn')
let icone_menu=document.querySelector('a#menu-btn i')
let mobile_menu=document.querySelector('div#mobile-nav')

button_menu.addEventListener('click',()=>{

    button_menu.classList.toggle('active')
    mobile_menu.classList.toggle('active')


    if(button_menu.classList.contains('active')){
        icone_menu.classList.remove('fa-bars')
        icone_menu.classList.add('fa-xmark')
    }else{
        icone_menu.classList.remove('fa-xmark')
        icone_menu.classList.add('fa-bars')
    }


})