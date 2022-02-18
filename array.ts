let cloors :Array<string>=[ 'red','blue','orange']
let numbers :number[]=[ 1,2,3.2];
numbers.push(10)
console.log(numbers);
let valeur :any [] ;
valeur =[
    'bonjour',
    true,
    500,
    {
        member:true,
        hobbies :['peinture , Youtube , Guitare']
    }
]
let strnumbool = ['red',true,10]
strnumbool.push(10,12.2,"nabil")
//console.log(strnumbool);
//TYPLE TYPE ===> DEFINE TYPE AND LONGEUR
let x :[string, number] 
x=["hello",1]
// x=["hello",1,"nabil"]
// => probleme on a un typle 
x.push("nabil")
console.log(x);
x[0].substring(1)
console.log(x[0].substring(1));
console.log(typeof x[1]);
const member :{
    level:[string, number] 
} ={
    level :['admin',1]
}
member.level[0]="nabil" ;
console.log(member.level);
///objet
let car :{
    color:string;
    date :number,
    speed:number 
}={
    color :'red',
    date :2020,
    speed:255 

}

console.log(car.color);