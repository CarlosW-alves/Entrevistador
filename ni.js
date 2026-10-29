function submit(){
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value

    var mensagem
        
      if(age === "" || name.trim() === ""){
           mensagem = `please write.`
       }

      else{
    var mensagemidade = age >= 18 ? 'an adult': 'a minor';
        mensagem =  document.getElementById("result").innerText = `Hello, ${name}! You are ${age} years old and you are ${mensagemidade}`
  }
}


function bmenu(){
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
}

   if(bmenu.style.display === "none"){

      bmenu.style.display = "block"
      bmenu.style.opacity = "1"

   }
   else{

     bmenu.style.display = "none"
     bmenu.style.opacity = "0"

   }

function tcor(){

    var b = document.body;
    document.body.classList.toggle("escuro");

}