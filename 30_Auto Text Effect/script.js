const textEl=document.getElementById('text');
const speedEl=document.getElementById('speed');
const inputText=document.getElementById('inputText');

inputText.value='';
speedEl.value=1;
let text="We love Programming!";
let idx=1;
let speed=300/speedEl.value;

writeText();

function writeText(){
    // console.log('ok');
    textEl.innerText=text.slice(0,idx);
    idx++;
    if(idx>text.length){
        idx=1;
    }
    // 采用递归的形式实现循环显示
    setTimeout(writeText,speed);
}

//这里如果使用循环函数则后面的改速度事件就触发不了了
// setInterval(writeText,speed);

speedEl.addEventListener('input',(e)=>{speed=300/e.target.value;})
inputText.addEventListener('keydown',(e)=>{if(e.key==='Enter'){text=e.target.value;e.target.value='';}})
inputText.onmouseover=(e)=>{e.target.classList.remove('fold');e.target.classList.add('hover');e.target.focus();};
inputText.onmouseleave=(e)=>{e.target.classList.remove('hover');e.target.classList.add('fold');e.target.blur();};
