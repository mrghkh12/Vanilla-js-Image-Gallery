const $ = document

const galleryContainer = $.querySelector('.gallery')

let backBtn = $.querySelector('#backBtn')
let nextBtn = $.querySelector('#nextBtn')

galleryContainer.addEventListener('wheel' , e =>{
    scrollInfinity()
    galleryContainer.scrollLeft += e.deltaY
    galleryContainer.style.scrollBehavior = 'auto'
})

backBtn.addEventListener('click' , () => {
    galleryContainer.style.scrollBehavior = 'smooth'
    galleryContainer.scrollLeft -= 900
    scrollInfinity()
})


nextBtn.addEventListener('click' , () => {
    galleryContainer.style.scrollBehavior = 'smooth'
    galleryContainer.scrollLeft += 900
    scrollInfinity()
})

function scrollInfinity(){
    console.log(galleryContainer.scrollLeft);
    if(galleryContainer.offsetWidth + galleryContainer.scrollLeft >= galleryContainer.scrollWidth - 100){
        const rowImg = $.querySelector('.row')
        let clone = rowImg.cloneNode(true)
        let parent = rowImg.parentElement
        console.log(galleryContainer.offsetWidth);
        parent.appendChild(clone)    
        if(rowImg.scrollWidth < galleryContainer.scrollLeft){   
            galleryContainer.scrollLeft -= rowImg.scrollWidth
            parent.children[0].remove()
        }
    }

}