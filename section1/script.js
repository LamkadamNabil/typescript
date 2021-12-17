
const form =document.getElementById('signupForm');
const firstName =document.getElementById('firstName');
var Age =document.getElementById('age');
const gift1 =(x)=>(+x+3);
form.addEventListener('submit',e =>{
    e.preventDefault();
   Age.value<18  ? console.log(`inscription refuse`):console.log(`
   Bienvenue ${firstName.value}
   vous avez ${Age.value}
   vous aurez droit a un cadeau quand vous aurez ${gift(Age.value)}ans
   `) ;
   
})

