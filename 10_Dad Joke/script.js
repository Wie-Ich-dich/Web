/*
    通过网址请求笑话：
    1.送异步请求；
    2.处理返回的response从中提取出需要的数据；
    3.绑定btn的click事件，每次点击的时候切换一个；
*/
const jokebtn=document.getElementById('jokebtn');
const joke=document.getElementById('joke');

jokebtn.addEventListener('click',generateJoke);

// async function generateJoke(){
//     const config={
//         headers:{
//             Accept:'application/json',
//         },
//     }
//     const res=await fetch("https://icanhazdadjoke.com",config);
//     const data=await res.json();
//     joke.innerText=data.joke;
// }

generateJoke();

// 另一种方式，通过Promise.then()函数
function generateJoke(){
    const config={
        headers:{
            Accept:'application/json',
        },
    }
    fetch("https://icanhazdadjoke.com",config)
    .then(res=>res.json())
    .then(data=>joke.innerText=data.joke);
}