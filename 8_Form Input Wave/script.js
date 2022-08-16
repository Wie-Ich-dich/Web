/*
    Js代码的任务就是把Email和Password这两个单词拆分，为每个字符增加上一个<span>标签
*/

const labels=document.querySelectorAll('.form-control label');

labels.forEach((label)=>{
    label.innerHTML=label.innerText.split('').map((letter,idx)=>`<span style="transition-delay:${idx*50}ms;">${letter}</span>`).join('');
});

/*
    其实这个 项目可以算是全用css和html完成的，js不同于之前的添加类名，这次是添加标签
    而这个标签设置了各种动画，比如focus和valid的时候添加向上平移的动画；
*/