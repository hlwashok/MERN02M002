//operator
//Arithmatic operator
//1.addfition(+)

let a=5;
let b=30;
console.log(a+b);  //50
console.log(a-b); //-10
console.log(a*b); //600
console.log(a/b); //0.66


console.log(a%b);  //1
console.log(a**2);  //25

console.log(a++); //5
console.log(++a); //7

console.log(b--); //30
console.log(--b); //28

console.log("string"+30)
console.log(20+30+"string")

console.log(true+"string")
console.log("30")    //blue clr-number,white clr-string
console.log(+"text")
console.log(typeof typeof +"text")

let c=40;
c+=2;  //c=c+2
console.log(c)
c-=3;
console.log(c)    // similarly do *=,/= etc

//comparisopn operator
let st1="xyz";
let st2="xyz";
console.log(st1==st2);
console.log(st1===st2)


let n1="20";
let n2=20;
//normal comparison
console.log(n1==n2)
//strict comparison
console.log(n1===n2)

let f=3;
console.log((2>4) && (f++<5))  
//console.log(f)
console.log(!true) //convert true to false false to true
console.log((2>4) || (f++<5)) //if one true then true