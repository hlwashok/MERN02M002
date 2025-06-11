console.log("hello array")
let a=20;
console.log("the value is :",a)
console.log(`the value of a is :${a+2}`)


// const obj={
//     nmae:"xyz"
// }

// console.log(obj.name)
// obj.name="y"
// console.log(obj.name)

let str="welcome"
console.log(str[1])
str[0]="D";
console.log(str)

console.log(str.length)

//console.log(str.toLowerCase())
const newstr=str.toLowerCase();
console.log(newstr)
console.log(str.toUpperCase())

console.log("After trim :",str.trim().length);
console.log("here trim not applicable",str.length);

console.log(str.charAt(0));
console.log(str.concat("Qlith").concat("Innovation"))

const newString=str.replace("w","D")
console.log(newString)

console.log(str.slice(0,str.length));
console.log(str.slice(-2))
console.log(str.slice(2))

// Type-1
// let name = prompt("Enter your name:")
// let username = "@" + name + name.length
// console.log("Your generated username is: " + username)

//Type-2
// let userName=prompt("enter the name")
// console.log("".concat("@").concat(userName).concat(userName.length))

// Array
let starr=["babul","peda","pedi","bakadi"]
// console.log(starr[0])

//  for(let e of starr){
//     console.log(e)
//  }

let numArr=[2,3,4,6,7]
let arr3=[10,11]
let sum=0
for (let e of numArr) {
    sum+=e;
}
console.log(sum/(numArr.length))
numArr.push(8,9,"Ashok",12.5,true)
console.log(numArr)
numArr.pop()
console.log(numArr)

console.log(numArr.toString())

console.log(numArr.concat(arr3))

numArr.unshift(0)
console.log(numArr)
numArr.shift()
console.log(numArr)

console.log(numArr.slice(2))

numArr.pop()
numArr.pop()
console.log(numArr)
numArr.splice(1,2,11)
console.log(numArr)

numArr.splice(4,1)
console.log(numArr)

console.log(numArr.includes(20))
console.log(numArr.includes(7))

console.log(numArr.reverse())

let newArr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log(newArr)
newArr.shift()
console.log(newArr)
newArr.splice(1,1,"Ola")
console.log(newArr)
newArr.push("Amazon")
console.log(newArr)