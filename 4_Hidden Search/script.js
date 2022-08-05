/*
    给按钮添加一个点击事件，点击后会给search类的div再加上一个active类名
*/
const btn=document.getElementById('btn');
const search=document.querySelector('.search');

btn.addEventListener('click',()=>{
    if(search.classList.contains('active')){
        console.log('正在搜索......');
        search.classList.remove('active');
    }else{
        search.classList.add('active');
    }
})