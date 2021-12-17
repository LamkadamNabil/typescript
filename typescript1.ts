const form1 =document.getElementById('signupForm') ;
const firstName1 =document.getElementById('firstName')as HTMLInputElement;
const Age1 =document.getElementById('age')as HTMLInputElement;
const gift =(x:number)=>(+x+3);
form1.addEventListener('submit',e =>{
    e.preventDefault();
   +Age1.value<18  ? console.log(`inscription refuse`):console.log(`
   Bienvenue ${firstName1.value}
   vous avez ${Age1.value}
   vous aurez droit a un cadeau quand vous aurez ${gift(+Age1.value)}ans
   `) ;
   
})

//pour dire a type script ne casse pas la tete je sais queln a un value ici
//on ajoute operateur ! 
//=>const Age1 =document.getElementById('age')!;

//si je fait 
//tsc typescript.ts -w =>nodemon 
//tsc type... => node

//const transforme en var