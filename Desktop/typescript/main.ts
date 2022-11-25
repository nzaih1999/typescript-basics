
// interface Car {
//     wheels:number; color:string
// }

// const car :Car = {wheels:4, color:'white'}

// interface Fruits {
// name:string;
// color:string;
// calories:string;
// [nutrients:string]:string
// }
// //extends additional properties


// const apple:Fruits = {name:'apple', color:'red', calories:'5'}

// apple.vitaminA="50mg"






//enums and tuples

enum Seasons {
    winter, 
    spring,
    summer,
    autumn
}

function seasonsGreetings (season:Seasons){
 if(season===Seasons.autumn) return ("Hello")
 if(season===Seasons.winter) return ("Hey")
 if(season===Seasons.spring) return ("Hellllo")
 if(season===Seasons.summer) return ("Summer is calling")
}

seasonsGreetings(Seasons.spring)

//unions
