let area=document.getElementById('area');
let buttonAgain=document.getElementById('reload');
let box=document.querySelectorAll(".box");
let move=0;
let scoreX=0;
let score0=0;
let score=0;
document.getElementById("xod").innerHTML="x";
area.addEventListener('click',e=>{
  if (e.target.innerHTML) return;
  if(e.target.className=='box'){
    if(move%2===0){
      e.target.innerHTML='x';
  
    }else{
      e.target.innerHTML='0';
    }
    move++;
    winner();
  }
    if(e.target.innerHTML=='x'){
      document.getElementById("xod").innerHTML="0"
    }
    else if(e.target.innerHTML=='0'){
      document.getElementById("xod").innerHTML="x"
    }

})
const winner=()=>{
  const step=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<step.length;i++){
  
    if(box[step[i][0]].innerHTML=="x" && box[step[i][1]].innerHTML=="x" && box[step[i][2]].innerHTML=="x"){
        scoreX++;
        document.getElementById('l').innerHTML=scoreX;
        box.forEach(item=>{
          item.classList.add('disabled')
        })
       
    }
    if(box[step[i][0]].innerHTML=="0" && box[step[i][1]].innerHTML=="0" && box[step[i][2]].innerHTML=="0"){
      score0++;
      document.getElementById('с').innerHTML=score0;
      box.forEach(item=>{
        item.classList.add('disabled')
      })
   
    }

   
  
    
  }
}
buttonAgain.addEventListener('click',()=>{
  for(let i=0;i<box.length;i++){
    box[i].innerHTML="";
    box[i].classList.remove('disabled');
  }

})



