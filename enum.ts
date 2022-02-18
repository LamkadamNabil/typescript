/*
ADMIN =0
MODERATOR= 1
SUPPORT =2
USER_READ_ONLY =3
*/
enum level {
    ADMIN ,
    MODERATOR=2,
    SUPPORT=6 ,
    USER_READ_ONLY 
}
const users ={
    pseudo :"batman" ,
    level :6,
    work :"SUPPORT"
}
if (users.level ===level.SUPPORT){
    console.log(
     `Bienvenue ${users.pseudo}
     vous travaillez au service 
     ${users.work}
     `

    );
}