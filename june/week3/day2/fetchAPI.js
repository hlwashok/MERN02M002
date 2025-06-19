console.log("Today fetch API.")

// function getData(userId,next) {
//     setTimeout(()=>{
//         console.log("User Id :",userId)
//         next()
//     },3000)
// }
// getData(1)
// getData(2)
// getData(3)

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })

// getData(1,()=>{
// getData(2,()=>{getData(3,()=>{getData(4)})})
// });

//normal promise object
 //let promise=new Promise((res,rej)=>{
    //setTimeout(()=>{
     //   res("success")
   // },3000)
 //})

 //console.log(promise)

//promises
// function getData(userId){

//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("User Id :",userId)
//             resolve("resolve ho gaya")
//             //reject("something is finish")
//       }, 3000)
//     })
// }

// getData(1).then((res)=>{
//     return getData(2).then(()=>{
//         return getData(3).then((res)=>{
//             console.log("result :",res)

//         })  
//     })
// }).catch((err)=>{
//     console.log("error is :",err)
// })

//async await

async function getData(){
    let response=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await response.json()
    // console.log(data)
    console.log(data[0].title)
    data?.forEach(element => {
        console.log(element.title)
    });
}
getData()