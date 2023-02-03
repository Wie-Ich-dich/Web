const btn=document.getElementById('button');
const toasts=document.getElementById('toasts');

const messages=[
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types=['success','info','error']

//这里必须使用箭头函数的形式来调用不然它会在还没点击的时候就执行函数，并且只执行一次
btn.addEventListener('click',()=>createNotification());

function createNotification(message=null,type=null){
    const toast=document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(type?type:getRandomType());
    toast.innerText=message?message:getRandomMessage();

    toasts.appendChild(toast);

    setTimeout(()=>toast.remove(),3000);
}

function getRandomType(){
    return types[Math.floor(Math.random()*types.length)];
}
function getRandomMessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}