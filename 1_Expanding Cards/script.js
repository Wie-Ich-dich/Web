const panels=document.querySelectorAll(".panel");

/* 
foreach中的callback函数会自动接收到参数，value、index等，
所以这里就是相当于有一步把panels[0]赋值给了panel，然后panel又传到了箭头函数里面
*/
panels.forEach(panel =>{
    panel.addEventListener('click',() =>{
        removeActiveClass();
        panel.classList.add('active');
    })
})

function removeActiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}