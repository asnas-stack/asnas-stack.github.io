

// var messages=document.getElementById("message");
// console.log(message.value);

var submit=document.querySelector('#submit');
submit.addEventListener('click',function(){
   if(document.querySelector('#name').value.length<4){
      alert("name should be more than 4 character");
   }
   else if(document.querySelector('#message').value.length<20){
      alert("message should be more than 20 character");
   }else{
      alert("message sent");
   }
   function validateEmail(email){
      var atSymbol=email.indexOf("@");
      if(atsymbol < 1)return false;
      var dot =email.indexOf(".");
      if(dot <= atSymbol + 2)return false;
      if (dot ===email.length - 1)return false;
      
         return true;
      }
   
})