const sounds=["applause","boo","gasp","tada","victory","wrong"];

sounds.forEach(sound=>{
    const btn=document.createElement('button');
    btn.classList.add('btn');
    btn.innerText=sound;
    btn.addEventListener('click',()=>{
        stopAllAudio();
        document.getElementById(sound).play();
    });
    document.getElementById('buttons').appendChild(btn);
    // 注意以下为什么不能用，getElementsByClass函数，因为它返回的是一个Collection数组
});

function stopAllAudio(){
    sounds.forEach(sound=>{
        const song=document.getElementById(sound);
        song.pause();
        song.currentTime=0;
    });
}