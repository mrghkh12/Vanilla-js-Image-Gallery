const $ = document

const galleryContainer = $.querySelector('.gallery')

let backBtn = $.querySelector('#backBtn')
let nextBtn = $.querySelector('#nextBtn')

galleryContainer.addEventListener('wheel' , e =>{
    e.preventDefault()
    galleryContainer.scrollLeft += e.deltaY
})

backBtn.addEventListener('click' , () => {
    galleryContainer.scrollLeft -= 900
})


nextBtn.addEventListener('click' , () => {
    console.log('f');
    galleryContainer.scrollLeft += 900
})