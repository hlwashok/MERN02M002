//this is function declaration
function print() {
    console.log("this is my function")
}
//this is function invocation/calling
print()
// console.log(print)

let printQlith=function() {
    console.log("this is my expression function")
}
printQlith()
// console.log(printQlith)

let add=function (a,b) {
    return a+b
}
let sum=add(10,20)
console.log(sum)
// console.log(add)

let sub=()=>{
    console.log("this is my arrow function")
}
sub()
// console.log(sub)

// higher order function
function hof(a,b,task){
    task(a,b)
}
let addNum=hof(10,20,(x,y)=>{
    return x+y
})
console.log(addNum)

// create a function using the "function" keyword that takes String as an argument and returns the number of vowels in a string.

// Type-1
// function countVowels(str) {
//   let count = 0;
//   const vowels = "aeiouAEIOU";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// const result = countVowels("Hello World");
// console.log("Number of vowels:", result); // Output: 3

// Type-2

// let newString=prompt("Enter some string:")
// function checkVowel(str) {
//     let newStr=str.toLowerCase()
//     let count=0
//     // for (let e of newStr) {
//     //     if(e==="a" || e==="e" || e==="i" || e==="o" || e==="u"){
//     //         count++
//     //     }
//     // }

//     for (let e of newStr) {
//         if ("aeiou".includes(e)) {
//             count++
//         }
//     }
//     return count
// }
// console.log("Number of vowels is:", checkVowel(newString));


let arr=[1,2,3,4,5,6,7,8]
let count=0
arr.forEach((v,idx,ar)=>{
    if (v%2==0) {
        count++
    }
})
console.log(count)

let strArr=["pagal","dasu","bakadi","choro","subhransu"]
let countStartWithS=0

strArr.forEach((v)=>{
    if (v.startsWith("s")) {
        countStartWithS++;
    }
})
console.log("ans is :",countStartWithS)

let numArr=[1,2,3,4,5]
let modifiedArr=numArr.map((v)=>{
    return v+1
})
console.log(modifiedArr)

//filter method
let filterData=numArr.filter((v)=>{
    //with if condition
    // if (v%2===0) {
    //     return v
    // }

    return v%2===0
})
console.log(filterData)

//this is reduce method
let sumOfNumber=numArr.reduce((accu,curr)=>{
    return accu+curr
},0)
console.log(sumOfNumber)

// Qn.1) We are given array of marks of students Filter our of the marks of students that scored 50+. 
let marks = [45, 67, 38, 90, 52, 49, 73];

let afterFilter = marks.filter((e)=> {
  return e >= 50;
});

console.log("Marks 50 or above:", afterFilter);

// Qn.2) Take a number n as input from user, Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.

let n=prompt("Enter a number")

let from1ToN=[]
for (let i = 1; i < n; i++) {
    from1ToN.push(i);
}
console.log(from1ToN)

let sumFrom1ToN=from1ToN.reduce((accu,curr)=>{
    return accu+curr
})

let multFrom1ToN=from1ToN.reduce((accu,curr)=>{
    return accu*curr
})
console.log("Summation is :",sumFrom1ToN)
console.log("Multiplication is :",multFrom1ToN)