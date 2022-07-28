/* 
主要实现的功能：
1.点击Prev按钮会减小progress线的长度；点击Next则会增加；但都有一个limit；
2.点击Prev步骤被点亮的数量+1；Next则-1；同样有limit；
3.到达limit的时候，两个按钮btn都会显示disabled；

*/

// 首先拿到circle步骤、progress进度线、btn按钮这几个节点
var circles=document.querySelectorAll(".circle");
var prev_btn=document.getElementById("prev");
var next_btn=document.getElementById("next");
var progress=document.getElementById("progress");

// 定义全局变量flag来保留目前进度，默认为1；
var flag=1;

// 为两个按钮添加click事件
prev_btn.addEventListener('click',()=>{
    if(flag==1){
        return;
    }else{
        flag--;
        update();
    }
     console.log(flag);//调试用
})
next_btn.addEventListener('click',()=>{
    if(flag==circles.length){
        return;
    }else{
        flag++;
        update();
    }
     console.log(flag);//调试用
})

// 定义update函数用来在每次发生更改之后更新进度
/*
    根据flag值来为circles添加active（点亮进度）；
    根据flag值来disable按钮；
    根据flag值来决定progress的width属性；flag=1时，width=0%；(flag-1)/3
*/
function update(){
    // 以下几种方式都会使得disabled属性为true
    // prev_btn.disabled=true;
    // prev_btn.setAttribute('disabled','任意字符');不加引号也一样
    // prev_btn.setAttribute('disabled','');
    if(flag==1){
        prev_btn.disabled=true;
    }else if(flag==circles.length){
        next_btn.disabled=true;
    }else{
        next_btn.removeAttribute('disabled');
        prev_btn.removeAttribute('disabled');
        // next_btn.disabled=false;
        // prev_btn.disabled=false;
    }   
    progress.style.width=(flag-1)/3*100+'%';
    circles.forEach((circle,id)=>{
        if(id<flag){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })
}