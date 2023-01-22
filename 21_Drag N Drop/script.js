const empties=document.querySelectorAll('.empty');
const fill=document.querySelector('.fill');

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

for(const empty of empties){
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}

function dragStart(){
    this.classList.add('hold');
    setTimeout(()=>this.className='invisible',0);   
}
function dragEnd(){
    this.className='fill';
}

function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
    this.classList.add('hovered');
}
function dragLeave(e){
    e.preventDefault();
    this.classList.remove('hovered');
}
function dragDrop(e){
    e.preventDefault();
    this.classList.remove('hovered');
    this.append(fill);
}