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
    galleryContainer.style.scrollBehavior = 'smooth'
    galleryContainer.scrollLeft -= 900

})

nextBtn.addEventListener('click' , () => {
    galleryContainer.style.scrollBehavior = 'smooth'
    console.log(galleryContainer.scrollLeft);
    galleryContainer.scrollLeft += 900
    scrollInfinity()
    console.log(galleryContainer.scrollLeft);
})

function scrollInfinity(){
    if(galleryContainer.offsetWidth + galleryContainer.scrollLeft >= galleryContainer.scrollWidth - 100){
        const rowImg = $.querySelector('.row')
        let clone = rowImg.cloneNode(true)
        let parent = rowImg.parentElement
        parent.appendChild(clone)    
        if(rowImg.scrollWidth < galleryContainer.scrollLeft){   
            galleryContainer.scrollLeft -= rowImg.scrollWidth
            parent.children[0].remove()
        }
    }
    if(galleryContainer.scrollLeft ==0){
        const rowImg = $.querySelector('.row')
        let clone = rowImg.cloneNode(true)
        let parent = rowImg.parentElement
        parent.insertBefore(clone, parent.firstChild)  
        parent.scrollTo(rowImg.scrollWidth,0)
        parent.lastElementChild.remove()
        // galleryContainer.scrollLeft = galleryContainer.scrollWidth - rowImg.scrollWidth
    }

}