const $ = document

const galleryContainer = $.querySelector('.gallery')

let backBtn = $.querySelector('#backBtn')
let nextBtn = $.querySelector('#nextBtn')

galleryContainer.addEventListener('wheel' , e =>{
    e.preventDefault()
    galleryContainer.scrollLeft += e.deltaY
    galleryContainer.style.scrollBehavior = 'auto'
})

backBtn.addEventListener('click' , () => {
    galleryContainer.style.scrollBehavior = 'smooth'
    galleryContainer.scrollLeft -= 900
})


nextBtn.addEventListener('click' , () => {
    galleryContainer.style.scrollBehavior = 'smooth'
    galleryContainer.scrollLeft += 900
})