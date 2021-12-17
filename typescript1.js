var form1 = document.getElementById('signupForm');
var firstName1 = document.getElementById('firstName');
var Age1 = document.getElementById('age');
var gift = function (x) { return (+x + 3); };
form1.addEventListener('submit', function (e) {
    e.preventDefault();
    +Age1.value < 18 ? console.log("inscription refuse") 
    : console.log("\n   Bienvenue ".concat(firstName1.value, 
        "\n   vous avez ").concat(Age1.value, "\n   vous aurez droit a un cadeau quand vous aurez ").concat(gift(+Age1.value), "ans\n   "));
});
//pour dire a type script ne casse pas la tete je sais queln a un value ici
//on ajoute operateur ! 
//=>const Age1 =document.getElementById('age')!;
//si je fait 
//tsc typescript.ts -w =>nodemon 
//tsc type... => node
//const transforme en var
