const $ = document

const galleryContainer = $.querySelector('.gallery')

let backBtn = $.querySelector('#backBtn')
let nextBtn = $.querySelector('#nextBtn')

galleryContainer.addEventListener('wheel' , e =>{
    galleryContainer.scrollLeft += e.deltaY
    galleryContainer.style.scrollBehavior = 'auto'
    scrollInfinity()
})

backBtn.addEventListener('click' , () => {
    const rowImg = $.querySelector('.row')
    console.log(galleryContainer.scrollLeft < 30);
    if(galleryContainer.scrollLeft < 30){
        galleryContainer.style.scrollBehavior = 'auto'
        galleryContainer.scrollTo(rowImg.scrollWidth,0)
        galleryContainer.style.scrollBehavior = 'smooth'
        galleryContainer.scrollLeft -= 500
    }else{
         galleryContainer.style.scrollBehavior = 'smooth'
        galleryContainer.scrollLeft -= 500
    }    
})

nextBtn.addEventListener('click' , () => {
    galleryContainer.style.scrollBehavior = 'smooth'
    console.log(galleryContainer.scrollLeft);
    const rowImg = $.querySelector('.row')
    galleryContainer.scrollLeft += rowImg.scrollWidth / 2
    scrollInfinity()
    console.log(galleryContainer.scrollLeft);
})

function scrollInfinity(){
    const rowImg = $.querySelector('.row')
    if(galleryContainer.offsetWidth + galleryContainer.scrollLeft >= galleryContainer.scrollWidth - 100){
        let clone = rowImg.cloneNode(true)
        let parent = rowImg.parentElement
        parent.appendChild(clone)    
        if(rowImg.scrollWidth < galleryContainer.scrollLeft){   
            galleryContainer.scrollLeft -= rowImg.scrollWidth
            parent.children[0].remove()
        }
    }
    if(galleryContainer.scrollLeft ==0){
        let clone = rowImg.cloneNode(true)
        let parent = rowImg.parentElement
        parent.insertBefore(clone, parent.firstChild)  
        parent.scrollTo(rowImg.scrollWidth ,0)
        parent.lastElementChild.remove()
        // galleryContainer.scrollLeft = galleryContainer.scrollWidth - rowImg.scrollWidth
    }

}