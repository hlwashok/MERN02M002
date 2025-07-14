// import { createContext } from 'react'
import { useState } from 'react';
import './App.css'
import ChildA from './component/ChildA';
// let nameContext=createContext();
// let colorContext=createContext();

function App() {
  // to create a context object
  // step-1:create a context object by using a method createContext()
  // step-2: give a provider to the context object
  // step-3: give the value to the context object provider
  // step-4: export the context object

  // how to access inside the child components
  // by using useContext() hook we can get the value from the context object


  // let obj={
  //   name:"xyz",
  //   age:20,
  //   arr:[10,20,30,40,50]
  // }
  // let arr1=[1,2,3,4,5]

  let [count,setCount]=useState(0)

  return (
    <>
    {/* { <nameContext.Provider value={obj}>
      <ChildA/>
    </nameContext.Provider>

    <colorContext.Provider value={"Red"}>
    <ChildA/>
    </colorContext.Provider> } */}

    <h1>Count: {count}</h1>
    <br />
    <button onClick={()=>setCount(count+1)}>Increment</button>

    </>
  )
}

// export {nameContext, colorContext}
export default App
