
function massiv(mas){
    let worket="Массив:";
 for(let i=0;i<20;i++){
     let a=Math.round(Math.random()*20)-5;
     mas.push(a);
      worket+=" "+ mas[i];
 }
 document.getElementById("Massiv").innerHTML=worket;

}
function max(mass){
    let Max=0;
    let worket="Максимальный элемент: ";
    for(let i=0;i<mass.length;i++){
        if(mass[i]>Max){
            Max=mass[i];
        }
        
    }
    worket+=Max;
    document.getElementById("Max").innerHTML=worket;
}
function kol(mass){
    let countNegative=0;
    let worket="Положительных больше";
    let countPositive=0;
    for(let i=0;i<mass.length;i++){
        if(mass[i]>0){
            countPositive++;
        }
        else{
            countNegative++;
        }
       
    }
    if(countNegative>countPositive){
        worket="Отрицательных больше"
        document.getElementById('answer').innerHTML=worket;
    }
    else{
        document.getElementById('answer').innerHTML=worket;

    }
  

}
export {max,massiv,kol};


