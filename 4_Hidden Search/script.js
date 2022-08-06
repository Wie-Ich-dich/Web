/*
    给按钮添加一个点击事件，点击后会给search类的div再加上一个active类名
*/
const btn=document.getElementById('btn');
const search=document.querySelector('.search');
const input=document.querySelector('.input');

btn.addEventListener('click',()=>{
    // if(search.classList.contains('active')){
    //     console.log('正在搜索......');
    //     search.classList.remove('active');
    // }else{
    //     search.classList.add('active');
    // }
    // 以上代码可用下面一行代替
    search.classList.toggle('active');
    input.focus();
})