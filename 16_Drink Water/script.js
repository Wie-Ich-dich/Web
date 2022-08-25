/*
    主要任务：
    1.给每个小水杯添加上点击事件
    2.小水杯点击之后显示full状态，其后面的也会自动为full，如果点击的这个水杯为最后一个，还要支持单个取消full
    3.更新大水杯的状态（这里为什么我一开始是把两个函数分开，后面不得不放一起，主要是为了满足小水杯为最后一个这一情况）

*/
const smallCups=document.querySelectorAll('.small-cup');
const percentage=document.getElementById('percentage');
const remained=document.getElementById('remained');
const liter=document.getElementById('liters');

smallCups.forEach((smallCup,idx)=>{
    smallCup.addEventListener('click',()=>{
        highlightCups(idx);
    });
});

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx+1].classList.contains('full'))
        idx--;
    smallCups.forEach((smallCup,id)=>{
        if(id<=idx){
            smallCup.classList.add('full');
        }else{
            smallCup.classList.remove('full');
        }
    });
    updateBigCup(idx);
}
function updateBigCup(idx){
    const totalCup=smallCups.length;
    percentage.style.height=`${(idx+1)/totalCup*100}%`;
    percentage.innerText=`${(idx+1)/totalCup*100}%`;
    liter.innerText=`${(totalCup-idx-1)/totalCup*2}L`;
    if(idx+1===totalCup){
        // 这里摒弃了原案例中的设置Visibility属性，而是采用overflow：hidden解决；
        remained.style.height=0;
    }else if(idx+1===0){
        percentage.style.height=0;
    }
}