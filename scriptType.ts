//type inference
let firstname:any //type any accept toute les valeurs
firstname=true
firstname='nabil'
let lastname 
lastname='nabil'
//type assignation
let nbr:number=1;


const sum =(v1:number,v2:number)=>{
  return v1+v2 
}
//sum('n',15) =>Nan
sum(15,16);//ok