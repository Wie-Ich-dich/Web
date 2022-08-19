const insert=document.getElementById('insert');

window.addEventListener('keydown',Event=>{
    insert.innerHTML=`
        <div class="key">
        <small>event.key</small>
        ${Event.key===' '?"space":Event.key}
        </div>

        <div class="key">
        <small>event.keyCode</small>
        ${Event.keyCode}
        </div>

        <div class="key">
        <small>event.code</small>
        ${Event.code}
        </div>
    `
});