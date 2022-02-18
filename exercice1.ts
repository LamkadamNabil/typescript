let names:string ;
let speed:number=25 ;
let isLoading:boolean ;
let age :string | number ;//pour accepte les string ou number
let colors :Array<string> ;
colors.push("red");
console.log(colors);

let infos :(string | number |boolean)[]=[];
infos.push("red");
infos.push(12);
infos.push(true);


let number :{ 
firstName :string ,
age :number,
isLoading :boolean
    
} =
    { firstName :"Nabil" ,
    age :20,
    isLoading :true}
 ;
let membessr ={ firstName :"Nabil" ,
age :20,
isLoading :true}

let arrayObjet :Array<object> ;

let infos1 :[string ,number ] ;