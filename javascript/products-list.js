let left_btn=document.querySelector('#left-btn')
let rigth_btn=document.querySelector('#right-btn')
let div_products=document.querySelectorAll('div.product-cards')

left_btn.addEventListener('click',()=>{
    console.log('left')
    div_products.forEach((card,index)=>{
        if(card.classList.contains('active') && index >=1){
            
            //check if the left card is in the overflow
            card.classList.toggle('active')

            div_products[index-1].classList.toggle('active')

            if(div_products[index-1].offsetLeft<0){
                div_products.forEach(product=>{
                    product.style.transform='translateX(+100%)'

                })
            }    
            
            
        }
    })
})


document.querySelector('div.left').addEventListener('click',(e)=>{
    
    let width=document.querySelector('div.left div.product-cards').offsetWidth

    div_products.forEach((product,index)=>{
 

        if(e.clientX-product.offsetLeft>0 && product.offsetLeft+width-e.clientX && !product.classList.contains('active')){
            
            let active=document.querySelector('div.left div.product-cards.active')
            active.classList.remove('active')
            product.classList.add('active')
        }

    })

})

rigth_btn.addEventListener('click',()=>{
   
    let active=document.querySelector('div.products-container div.left div.product-cards.active')
    
    if(active.nextElementSibling){
        active.classList.remove('active')
        active.nextElementSibling.classList.add('active')
        
       
        active=document.querySelector('div.products-container div.left div.product-cards.active')
      
    
    
        let divviewport=(window.innerWidth*60)/100

        if(active.offsetLeft+active.offsetWidth>divviewport){
            let dist=active.offsetLeft+active.offsetWidth-divviewport+10
            div_products.forEach(product=>{
                product.style.transform='translateX(-'+dist+'px)'
            })
        }
    }
  
})