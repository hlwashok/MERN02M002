console.log("Hello")
// window.document.write("Qlith")
// console.error("This is error.")
// let heading1=document.getElementById("heading1")
// heading1.innerText="Bye Bye"
// console.log(heading1)

// let div=document.getElementsByClassName("box")
// console.log(div)

// let seconddiv=document.getElementsByClassName("box")[1]
// console.log(seconddiv)
// let h2Coll=seconddiv.children
// // console.log(h2[0])
// console.log(h2Coll[1])
// h2Coll[1].innerHTML="<i>This is Italic</i>"
// console.log(h2Coll[1])

// let para=document.getElementsByTagName("p")
// console.log(para)

// // let h1=document.querySelector("#heading1")
// // console.log(h1)

// let box=document.querySelectorAll(".box")
// console.log(box[1])

// let box1Data=box[1].children
// console.log(box1Data[0].innerText)
// console.log(box1Data[0].textContent)

// console.log(box1Data[0].getAttribute("style"))
// box1Data[0].setAttribute("style","visibility: none")
// console.log(box1Data[0])

// h2Coll[1].style="color:red;background:aqua"


let inputs=document.querySelectorAll("input")


let btn=document.querySelector("button")
console.log(btn)

btn.addEventListener('click',()=>{
  console.log(inputs[0].value)
console.log(inputs[1].value)  


let userObj={
    fullName:inputs[0].value,
    age:inputs[1].value
}

localStorage.setItem("user",JSON.stringify(userObj));
})

let div=document.querySelector("#createEle")

let p=document.createElement("p")
p.innerText="This is my paragraph"

div.appendChild(p)
console.log(div)