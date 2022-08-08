/*
    主要通过修改filter属性中的blur函数传入的数值达到模糊的效果；
    在不断清晰的同时中间的text要实时变化，而且透明度也不断变化，直到100%；
    这里用了scale函数将0-30px、0-1的值转换到了0-100,
*/

const bg=document.querySelector('.bg');
const loading_text=document.querySelector('.loading-text');

var load=0;

let interv=setInterval(blurring, 30); //每30ms调用一次blurring函数

function blurring(){
    load++;
    if(load>99){
        clearInterval(interv);
    }
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`;
    loading_text.style.opacity=scale(load,0,100,1,0);
    loading_text.innerHTML=`${load}%`;
}

const scale=(value,in_min,in_max,out_min,out_max)=>{
    if(value<in_min||value>in_max)
        return 0;
    return (value-in_min)*(out_max-out_min)/(in_max-in_min)+out_min;
};