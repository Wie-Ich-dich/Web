const APIURL='https://api.github.com/users/';
const search=document.getElementById('search');
const form=document.getElementById('form');
const main=document.getElementById('main');

form.addEventListener('submit',(e)=>{
     //这里如果不阻止默认行为，那么因为你前面没有给它设置form提交的网址，所以会没有反应；
    e.preventDefault();    
    const user=search.value;

    if(user){
        getUser(user);  //获取用户信息，并且构建节点来显示取到的信息；
        search.value='';
    }
    // console.log(user);
})

async function getUser(username){
    try{
        const {data}=await axios(APIURL+username);
        // console.log(data);
        createUserCard(data);
        getRepos(username);
    }catch(err){
        createErrorCard('No profile with this username');
        // console.log('error');
    }
}
async function getRepos(username){
    try{
        const {data}=await axios(APIURL+username+'/repos?sort=created');
        addReposToCard(data);  
        console.log(data);
    }catch(err){
        createErrorCard('Problem fetching repos');
        // console.log('error!');
    }
}

//取回数据之后构建节点的函数
function createUserCard(user){
    const cardHTML=`
    <div class="card">
        <div>
            <a href="${user.html_url}"><img src="${user.avatar_url}" alt="${user.name}" class="avatar"></a>
        </div>
        <div class="user-info">
            <h2>${user.login}</h2>
            <p>${user.bio?user.bio:'this man is weird!'}</p>
            <ul>
                <li>
                    ${user.followers}
                    <strong>Followers</strong>
                </li>
                <li>
                    ${user.following}
                    <strong>Following</strong>
                </li>
                <li>
                    ${user.public_repos}
                    <strong>Repos</strong>
                </li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>`;
    main.innerHTML=cardHTML;
}
function createErrorCard(msg){
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>`;
    main.innerHTML = cardHTML;
}
function addReposToCard(repos){
    const reposEl=document.getElementById('repos');
    //最多展现5个repos
    repos.slice(0,5).forEach(repo => {
        const repoEl=document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href=repo.html_url;
        repoEl.target='_blank';
        repoEl.innerText=repo.name;

        reposEl.appendChild(repoEl);
    });
    if(true){
        const tempEl=document.createElement('a');
        tempEl.href='';
        tempEl.target='_blank';
        tempEl.innerText='...';
        tempEl.style.cssText="font-size: 0.7rem; padding: 0.25rem 0.25rem; margin-right: 0.5rem; display: inline-block; text-decoration: none;";
        reposEl.appendChild(tempEl);
    }
}