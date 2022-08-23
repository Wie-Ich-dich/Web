/*
    任务：不断修改counter的数值，直到data-target;
    实现方式：通过updateounter函数递归的形式完成；
*/
const counters=document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerText='0';
    
    const updateCounter=()=>{
        const current=+counter.innerText;
        // 分两百步完成；
        const target=+counter.getAttribute('data-target');
        const step=target/200;
        if(current<target){
            counter.innerText=`${Math.ceil(step+current)}`;
            setTimeout(updateCounter,1);
        }else{
            counter.innerText=target;
        }
    };
    updateCounter();
});