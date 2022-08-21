/*
    主要任务是
    1.处理textarea输入的文本，拆分、过滤；
    2.构建tag元素;(这里它是属于实时显示选项)
    3.响应回车按键，在按下回车的时候执行随机算法，给出一个随机数；
    4.给随机选中的tag元素添加上highlight类名；
*/

const tagContainer=document.getElementById('tag-container');
const textarea=document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup',e=>{
    creatTags(e.target.value);
    if(e.key==='Enter'){
        setTimeout(()=>e.target.value='',10);
        randomSelect();
    }
});

function creatTags(input){
    // 按照','进行分割，并过滤掉为空的元素，最后去掉字符串首尾的空格；
    const tagTexts=input.split(',').filter(tagText=>tagText.trim()!=='').map(tagText=>tagText.trim());
    tagContainer.innerHTML='';
    tagTexts.forEach(tagText => {
        const tag=document.createElement('span');
        tag.classList.add('tag');
        tag.innerText=tagText;
        tagContainer.appendChild(tag);
    });
}

/* 通过pickRandomTag函数选到一个tag元素，然后highlight 100ms之后熄灭，
在重新选一个，重复30次，最后再选一次作为最终结果；*/
function randomSelect(){
    const times=30;
    const intv=setInterval(() => {
        const tempTag=pickRandomTag();
        highlightTag(tempTag);
        setTimeout(()=>{
            unHighlightTag(tempTag);
        },100);
    }, 100);
    setTimeout(()=>{
        clearInterval(intv);
        setTimeout(()=>{
            const tag=pickRandomTag();
            highlightTag(tag);
        },100);
    },times*100);
}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
}

// 点亮和熄灭的函数
function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
