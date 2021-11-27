import * as say from './export.js';

const patient=[
 PatientOne={
    surname:'Хирный',
    name:'Алексей',
    lastName:'Владиславович',
    homeAdress:'Фурманова 58',
    numberMedCard:12,
    numberCard:14
},
 PatientTwo={
    surname:'Дунников',
    name:'Алексей',
    lastName:'Викторович',
    homeAdress:'Кабяка 12',
    numberMedCard:25,
    numberCard:10
},
 PatientThree={
    surname:'Мулярчик',
    name:'Максим',
    lastName:'Владимирович',
    homeAdress:'Зельвянка',
    numberMedCard:19,
    numberCard:4
}
]

const a=prompt("В нашей базе присуствуют пациенты, укажите номер для удаления пациента");
patient.forEach(element=>{
  if(element.numberCard<a){
   patient.pop();
  }
})
document.querySelector('.button').addEventListener('click',say.checkForm);













