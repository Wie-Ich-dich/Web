const bgImageUrls=[
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
]
initialImages();

const slides=document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const body=document.body;

let activeSlide = 0;

leftBtn.addEventListener('click',()=>{
    activeSlide--;
    if(activeSlide<0){
        activeSlide=slides.length-1;
    }
    setActiveSlide();
    setBgToBody();
})
rightBtn.addEventListener('click',()=>{
    activeSlide++;
    if(activeSlide>slides.length-1){
        activeSlide=0;
    }
    setActiveSlide();
    setBgToBody();
})
setActiveSlide();
setBgToBody();

function initialImages(){
    const slider_containers=document.getElementsByClassName('slider-container');
    bgImageUrls.forEach(bgImageUrl=>{
        const slide=document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage=`url(${bgImageUrl})`;
        slider_containers[0].appendChild(slide);
    }) 
}
function setActiveSlide(){
    slides.forEach(slide=>{slide.classList.remove('active');})
    slides[activeSlide].classList.add('active');    
}
function setBgToBody(){
    body.style.backgroundImage =slides[activeSlide].style.backgroundImage;
}
