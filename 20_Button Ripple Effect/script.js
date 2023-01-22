const btns=document.querySelectorAll('.btn');

btns.forEach(btn=>{
    btn.addEventListener('click',function(e){
        const x=e.clientX-e.target.offsetLeft;
        const y=e.clientY-e.target.offsetTop;

        const span=document.createElement('span');
        span.classList.add('circle');
        span.style.left=x+'px';
        span.style.top=y+'px';
        this.appendChild(span);
        
        setTimeout(()=>{span.remove()}, 500);
    })
})