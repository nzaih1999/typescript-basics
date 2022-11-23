
let fruitNames = ["Apple", "Bananas"]
//specifying the parameter types
function alternateUppercase(name:string, index:number) {
    if(index % 2===0) {
        return name.toUpperCase()
    }
    return name

}

//return types
const alternateNames = fruitNames.map(alternateUppercase)

function headsOrTails ():boolean {
return Math.random() > 0.5
}
//fetch example
async function getFruits() {
    const res = await fetch('https://api.github.com/users')
    const userList:string[] = await res.json()
    return userList
}

function mapNumbersToNumbers (list:number[], callback:(item:number)=>number) {
return list.map(callback)
}

const double = mapNumbersToNumbers([1,2,4],(num)=>num*2 )


//second parameter

function logOutput (message:string, yell?:boolean) {
if(yell) {
    console.log(message.toUpperCase());
}
console.log(message);
}

logOutput('John')