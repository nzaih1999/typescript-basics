interface Fruit {
    name:string,
    sweetness:number
 }

 interface Vegetable  {
    name:string
    hasSeeds:boolean
 }

 type edibleThings = Fruit | Vegetable;
 function checkForSeeds (food:edibleThings):string {
 const k = food.name
 console.log(k);
 return k
 
 }