// ! Varibale Declaration
let a=1
let A=2

console.log(a)
console.log(A)

let _="Qlith";
console.log(_)

let $="Qlith Innovation";
console.log($)

let $name="xyz";
console.log($name)


let _name="y";
console.log(_name);

let nameOfStudent="bibek";
console.log(nameOfStudent)

let a=20;
console.log(a)
console.log(typeof a)

let name=`Qlith`;
console.log(name)
console.log(typeof name)

let isPass=true;
console.log(isPass)
console.log(typeof isPass)

let empty=undefined;
console.log(empty)
console.log(typeof empty)

let nullValue=null;
console.log(nullValue)
console.log(typeof nullValue)

let b;
console.log(b);

let c=30;
console.log(c);
console.log(typeof typeof c)

let d=30.5;
console.log( typeof d)

// * global declaration of the variable
var fullName="Qlith Innovation";
console.log(fullName)


{
    console.log(fullName)
}
function getName(){
    console.log(fullName)
}

getName()

// normal block
// THis is my block level decaration of variable
{
    var a=40;
    console.log("block level decaration of variable",a)
}

console.log("local access :",a)

function getA(){
    console.log("function level declaration",a)
}
getA();


function variableDeclare(){
    var r=50;
    console.log(r)
}
variableDeclare()

console.log(r)

// *This is the let variable declaration

// ! global declaration
let name="Innovation";
console.log(name)

{
    console.log(name)
}

function getName(){
    console.log(name)
}
getName()

// //! block level declaration
{
    let a=30;
    console.log(a)
}

console.log("local access :",a)

// ! function level declaration
function getA(){
    console.log("function level declaration",a)
    console.log(name)
}
getA()

// *This is the const  variable declaration

// global variable
const name="xyz";
console.log(name)
{
    console.log(name)
}

function getName(){
    console.log(name)
}

{
    const a=70;
    console.log(a);
}

console.log(a)


var a=60;
console.log(a)

a=40;
console.log(a)

a="y";
console.log(a)

var a=30;
console.log(a)

let a=60;
let a=50;
console.log(a)
a=80;
console.log(a)


const s="String";
console.log(s)
s="Rohon";
console.log(s)

const s="sdjfk";
console.log(first)


// ~ Differnece between var, let, const 

// redeclartion :
//    var =>possiable
//    let =>not possiable
//    const =>not

// ReInitialization
//    var =>possible
//    let =>possiable
//  const =>not possiable

// Only Declaraion possiable or not
//  var =>possiable
//  let =>possiable
//  const =>not possiable


//& way of declaration  and Access

// global declaration
//  var
// local access :var =>access
// block access :access
// function access :access

// let 
// local access : =>access
// block access :access
// function access :access

// const 
// local access : =>possiable
// block access :access
// function access :access


// Block level declaration
// var
// local access : =>possiable
// block access :access
// function access :access

// let 
// local access : =>not possiable
// block access :access
// function access :not access

// const 
// local access : => not possiable
// block access :access
// function access :not access


// function level declaratiotn
// var 
// local access : =>not possiable
// block access :not possiable
// function access :access

// let 
// local access : =>not possiable
// block access :not access
// function access :access

// const 
// local access : =>not possiable
// block access :not access
// function access :access