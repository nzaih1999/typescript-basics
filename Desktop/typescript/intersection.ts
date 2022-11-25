//intersections combine ointerfaces or other object like types

interface Fruit {
name:string;
sweetness:number;
}


interface Vegetable {
    name:string;
    hasSeeds:boolean
}

type edibleThing = Fruit & Vegetable
let banana:edibleThing= {name:'EAST', hasSeeds:true, sweetness:4}
console.log(banana);


//intersecting primitives will show you a never type

type Primitives = string & number


