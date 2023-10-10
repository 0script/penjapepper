let button=document.querySelector('button.section-button')

button.addEventListener('click',(e)=>{
    console.log('click')
    console.log(e.currentTarget.previousElementSibling)
    // console.log(e.currentTarget.previousElementSibling.classList.toggle('active'))
    if(e.currentTarget.innerText==='Read More'){
        e.currentTarget.innerText='Read Less'
    }else{
        e.currentTarget.innerText='Read More'
    }
    e.currentTarget.previousElementSibling.classList.toggle('active')
})