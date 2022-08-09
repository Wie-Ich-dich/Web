/*
    监听scroll事件，只要滚动就会触发一个函数
    这个函数会根据滚动情况实时给boxes添加上show类名
*/
const boxes=document.querySelectorAll('.box'); //下标从0开始
window.addEventListener('scroll',checkBoxes);
const blForShow=window.innerHeight/5*4;

checkBoxes();

// 火狐浏览器的视窗高度没有包括了工具栏的高度；
function checkBoxes(){
    boxes.forEach(box=>{
        if(box.getBoundingClientRect().top < blForShow){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}
