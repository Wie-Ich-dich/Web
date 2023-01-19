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
    const ampm=hh>12?'PM.':'AM.';
    const mm=time.getMinutes();
    const ss=time.getSeconds();

    timeEl.innerHTML=hh%12+':'+mm+':'+ss+' '+ampm;
    dateEl.innerHTML=days[day]+', '+mon+'<span class="circle">'+date+'</span>';
    secondEl.style.transform=`translateX(-50%) rotate(${scale(ss,0,59,-180,180)}deg)`;
    minuteEl.style.transform=`translateX(-50%) rotate(${scale(mm+ss/60.0,0,59,-180,180)}deg)`;
    hourEl.style.transform=`translateX(-50%) rotate(${scale(hh%12+mm/60.0,0,11,-180,180)}deg)`;
}
function scale(num, in_min, in_max, out_min, out_max){
    return (num-in_min)/(in_max-in_min)*(out_max-out_min)+out_min;
}

setTime();

setInterval(setTime,1000);