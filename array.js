var cloors = ['red', 'blue', 'orange'];
var numbers = [1, 2, 3.2];
numbers.push(10);
console.log(numbers);
var valeur;
valeur = [
    'bonjour',
    true,
    500,
    {
        member: true,
        hobbies: ['peinture , Youtube , Guitare']
    }
];
var strnumbool = ['red', true, 10];
strnumbool.push(10, 12.2, "nabil");
//console.log(strnumbool);
//TYPLE TYPE ===> DEFINE TYPE AND LONGEUR
var x;
x = ["hello", 1];
// x=["hello",1,"nabil"]
// => probleme on a un typle 
x.push("nabil");
console.log(x);
x[0].substring(1);
console.log(x[0].substring(1));
console.log(typeof x[1]);
var member = {
    level: ['admin', 1]
};
member.level[0] = "nabil";
console.log(member.level);
///objet
var car = {
    color: 'red',
    date: 2020,
    speed: 255
};
console.log(car.color);
