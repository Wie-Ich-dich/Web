/*
    在点击导航栏开关按钮的时候，
    利用js代码给container容器添加一个show-nav类名，
    并为带show-nav类名的元素设置旋转属性
    相当于设置了两套html，通过加show-nav来进行切换；
    但还是有点bug的，比如旋转之后circle就不再固定在视窗上了；
*/
const container=document.querySelector('.container');
const open_btn=document.getElementById('open');
const close_btn=document.getElementById('close');

open_btn.addEventListener('click',()=>{
    container.classList.add('show-nav');
})
close_btn.addEventListener('click',()=>{
    container.classList.remove('show-nav');
})
