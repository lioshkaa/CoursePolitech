
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
document.querySelector('.button').addEventListener('click',checkForm);
function checkForm(event){
    event.preventDefault();
    let el=document.getElementById('form');
    let name=el.name.value;
    let surname=el.surname.value;
    const lastName=el.lastName.value;
    const homeAdress=el.homeAdress.value;
    const numberMedCard=el.numberMedCard.value;
    const numberCard=el.numberCard.value;
    const pushMassiv={
        name:name,
        surname:surname,
        lastName:lastName,
        homeAdress:homeAdress,
        numberMedCard:numberMedCard,
        numberCard:numberCard   
    }
    
    patient.push(pushMassiv);
    patient.forEach(element=>{
        document.write(`Имя:${element.name}  Фамилия:${element.surname} `);
    })
}














