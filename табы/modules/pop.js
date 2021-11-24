const tabs=document.getElementById('tabs');
const content=document.querySelectorAll('.content');
import changeClass from './export.js'
tabs.addEventListener('click', e => {
     const currTab=e.target.dataset.btn;
     changeClass(e.target);
     for(let i=0;i<content.length;i++){
       content[i].classList.remove('active');
       if(content[i].dataset.content===currTab){
         content[i].classList.add ('active')
       }
     }
})
