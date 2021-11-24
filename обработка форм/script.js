document.getElementById('main-form').addEventListener("submit",checkForm);
function checkForm(event){
  event.preventDefault();
  let el=document.getElementById('main-form');
  let name=el.name.value;
  let pass=el.pass.value;
  let repass=el.repass.value;
  let state=el.state.value;
  let error="";
  if(name=="" || pass=="" || state=="")
      error="Заполните все поля";
  else if(name.length <= 1 || name.length>50)
     error="Введите корректное имя";
  else if(pass!=repass)
    error="Пароли должны совпадать";
  else if(pass.split("&").length > 1)
     error="Некорректный пароль";
  
  if(error!="")
  {
    document.getElementById('error').innerHTML=error;

  }
  else{
    alert("Все данные корректно заполнены");
	window.location="https://vk.com/pobeditel_2";  
  }

}