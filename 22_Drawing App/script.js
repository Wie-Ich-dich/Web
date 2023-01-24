const canvas=document.getElementById('canvas');
const increaseBtn=document.getElementById('increase');
const decreaseBtn=document.getElementById('decrease');
const sizeEl=document.getElementById('size');
const clearBtn=document.getElementById('clear');
const colorEl=document.getElementById('color');

const ctx=canvas.getContext('2d');

let isPressed=false;
let size=10;
let color='black';
let x;
let y;

canvas.addEventListener('mousedown',(e)=>{
    isPressed=true;
    x=e.offsetX;
    y=e.offsetY;
    drawCircle(x,y);
})
canvas.addEventListener('mouseup',(e)=>{
    isPressed=false;
})
canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        let x2=e.offsetX;
        let y2=e.offsetY;
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x=x2;
        y=y2;
    }
})

increaseBtn.addEventListener('click',(e)=>{
    if(size==50)
        return;
    size+=5;
    updateSizeOnScreen();
})
decreaseBtn.addEventListener('click',(e)=>{
    if(size==5)
        return;
    size-=5;
    updateSizeOnScreen();
})
clearBtn.addEventListener('click',(e)=>{
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);//这里用clientWidth和width都可以；
})
colorEl.addEventListener('change',(e)=>{color=e.target.value;})

function updateSizeOnScreen(){
    sizeEl.innerText=size;
}
function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,2*Math.PI);
    ctx.fillStyle=color;
    ctx.fill();
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.lineWidth=size*2;
    ctx.stroke();
}

