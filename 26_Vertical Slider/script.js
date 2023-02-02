const leftSlide=document.querySelector('.left-slide');
const rightSlide=document.querySelector('.right-slide');
const upBtn=document.querySelector('.up-btn');
const downBtn=document.querySelector('.down-btn');

let leftN=leftSlide.querySelectorAll('div').length;
let rightN=rightSlide.querySelectorAll('div').length;
let slidesLength=leftN > rightN ? rightN:leftN;

let activeSlideIndex=0;//从0开始第一个滑块；

rightSlide.style.top='-'+(slidesLength-1)*100+'vh';

downBtn.addEventListener('click',()=>changeSlide('down'));
upBtn.addEventListener('click',()=>changeSlide('up'));

const changeSlide=(direction)=>{
    if(direction=='up'){
        activeSlideIndex--;
        if(activeSlideIndex<0)
            activeSlideIndex=slidesLength-1;
    }else if(direction=='down'){
        activeSlideIndex++;
        if(activeSlideIndex>slidesLength-1)
            activeSlideIndex=0;    
    }
    console.log(activeSlideIndex);
    leftSlide.style.top='-'+activeSlideIndex*100+'vh';
    rightSlide.style.top='-'+(slidesLength-activeSlideIndex-1)*100+'vh';

}
// 参考案例使用的方法是用transform来实现，而我这里是使用位置属性中的top值来实现，
// 所以这里其实有bug，原案例在窗口变化的时候会出现两个划片，这里在窗口变化的时候左边会莫名滚动一下；
