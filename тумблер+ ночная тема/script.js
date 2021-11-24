let switchMode=document.getElementById("input");
switchMode.onclick=function(){
  let theme=document.getElementById("theme");
  if(theme.getAttribute("href")=="style.css"){
    theme.href="black-mode.css";
  }
  else{
    theme.href="style.css";
  }
}