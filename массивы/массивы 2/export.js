/*В массиве X=(x1,x2,…,xn) определить количество элементов, меньших среднего
арифметического значения. Не упорядочивая массив, удалить из него элементы,
расположенные между максимальным и минимальным. */

function massiv(mas){
    let worket="Массив:";
 for(let i=0;i<6;i++){
     let a=Math.round(Math.random()*20);
     mas.push(a);
      worket+=" "+ mas[i];
 }
 document.getElementById("Massiv").innerHTML=worket;

}
function countMiddle(mass){
    let sum=0;
    let middleMassiv=0;
    let count=0;
    for(let i=0;i<mass.length;i++){
        sum=sum+mass[i];
        middleMassiv=sum/mass[i].length;   
        if(mass[i]<middleMassiv){
                count++;
        }
      
    }
}

function removeMinAndMax(a){
    let min = a[0];
    let max = a[0];
    let str=" ";
    let imax,imin;
    for (let i = 0; i < a.Length; i++) {
        if (a[i] > max) {
            max = a[i];
            imax=i;
        }
    }
    for (let i = 0; i < a.Length; i++) {
        if (a[i] < min && a[i]<=-1)
        {
            min = a[i];
            imin=i;
        }
    }

    let b = [];
    if (imin < imax)
    {
        for (let j = 0; j <= imin; j++)
        {
            b.push(a[j]);
        }
        for (let j =  imax; j < a.Length; j++) 
            b.push(a[j]);
    }
    else
    {
        for (let j = 0; j <= imax; j++)
        {
            b.push(a[j]);
        }
        for (let j = imin; j < a.Length; j++) 
            b.push(a[j]);
    }
    for (let i=0;i<b.Length;i++) {
        if(b[i]!=0)
            str+=" "+b[i];
            console.log(str);
    }
  

}

export {countMiddle,massiv,removeMinAndMax};




