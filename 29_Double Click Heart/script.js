const loveMe=document.querySelector('.loveMe');
const times=document.getElementById('times');

let clickTime=0;//点击持续时间
let timesClicked=0;//点击次数

//本来想直接用dbclick双击事件的，但好像没用；
//双击实现原理，第一次点击事件产生的时候开始计时，第二次的时候停止，如果两次的间隔小于某一个数值就认为它是双击事件；
loveMe.addEventListener('click',(e)=>{
    var time=new Date().getTime();
    if(time-clickTime<800){
        createHeart(e);

    }else{
        clickTime=time;
    }
    // console.log('ok');
})
//其实这里有一个bug，就是如果双击的太快，第二次双击形成的位置在第一次产生的红心上，那第二次的位置就会错；
//应该避免事件冒泡就可以解决；
createHeart=(e)=>{
    const heart=document.createElement('i');
    heart.classList.add('fa-solid');//这里注意一下，两个style类名不能同时添加，会报错
    heart.classList.add('fa-heart');
    heart.style.top=(e.clientY-e.target.offsetTop)+'px';
    heart.style.left=(e.clientX-e.target.offsetLeft)+'px';

    times.innerText=++timesClicked;
    loveMe.appendChild(heart);
    setTimeout(()=>{heart.remove()},1000);
}