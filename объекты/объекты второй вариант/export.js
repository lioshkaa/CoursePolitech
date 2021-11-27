
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
export{checkForm}





