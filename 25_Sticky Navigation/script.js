const nav=document.querySelector('.nav');
window.addEventListener('scroll',fixNav);

function fixNav(){
    // nav.offsetHeight可以得到元素的高，比如这里的75px；
    if(window.scrollY > nav.offsetHeight+150){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
}