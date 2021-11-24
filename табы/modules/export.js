const changeClass=el=>{
    for(let i=0;i<tabs.children.length;i++){
          tabs.children[i].classList.remove('active');    
    }
    el.classList.add('active');
 }
 export default changeClass;
