const toggle=document.querySelector('.toggle');
const timeEl=document.querySelector('.time');
const dateEl=document.querySelector('.date');
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

toggle.addEventListener('click',(e)=>{
    const html=document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML='Dark mode';
    }else{
        html.classList.add('dark');
        e.target.innerHTML='Light mode';
    }
})

function setTime(){
    const time=new Date();
    const mon=time.toLocaleString('en-US',{month:'short'});
    const day=time.getDay();
    const date=time.getDate();
    const hh=time.getHours();
    const clockhh=hh%12;
    const ampm=hh>12?'PM.':'AM.';
    const mm=time.getMinutes();
    const ss=time.getSeconds();

    timeEl.innerHTML=((clockhh<10)?('0'+clockhh):clockhh)+':'+((mm<10)?('0'+mm):mm)+':'+((ss<10)?('0'+ss):ss)+' '+ampm;
    dateEl.innerHTML=days[day]+', '+mon+'<span class="circle">'+date+'</span>';

    if(ss==59){
        secondEl.style.transition='none';
    }else if(ss==1){
        secondEl.style.transition='all 0.1s ease-in';
    }
    if(mm==59){
        minuteEl.style.transition='none';
    }else if(ss==1){
        minuteEl.style.transition='all 0.1s ease-in';
    }
    if(hh==11){
        hourEl.style.transition='none';
    }else if(hh==1){
        hourEl.style.transition='all 0.1s ease-in';
    }

    secondEl.style.transform=`translateX(-50%) rotate(${scale(ss,0,60,-180,180)}deg)`;
    minuteEl.style.transform=`translateX(-50%) rotate(${scale(mm+ss/60.0,0,60,-180,180)}deg)`;
    hourEl.style.transform=`translateX(-50%) rotate(${scale(hh%12+mm/60.0,0,12,-180,180)}deg)`;
}
function scale(num, in_min, in_max, out_min, out_max){
    return (num-in_min)/(in_max-in_min)*(out_max-out_min)+out_min;
}

setTime();

setInterval(setTime,1000);