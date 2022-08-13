const splitLeft=document.querySelector('.split.left');
const splitRight=document.querySelector('.split.right');
const container=document.querySelector('.container');

splitLeft.addEventListener('mouseenter',()=>container.classList.add('hover-left'));
splitLeft.addEventListener('mouseleave',()=>container.classList.remove('hover-left'));

splitRight.addEventListener('mouseenter',()=>container.classList.add('hover-right'));
splitRight.addEventListener('mouseleave',()=>container.classList.remove('hover-right'));
