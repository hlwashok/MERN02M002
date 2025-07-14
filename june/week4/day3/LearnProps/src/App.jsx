import './App.css'
import Card from './components/Card';
import Home from './components/Home'

function App(){

  let a=11;
  let str='Ashok'
  let obj={
    name:"xy",
    age:20,
    email:"xy@gmail.com"
  
  }
  let arr=[100,101,102,103]
  return(
    <>
    <h1>Hello welcome to react</h1>
    {/* <Home a={a} str={str} obj={obj} arr={arr}/> */}
    <div>
    <Card/>
    </div>
    </>
  )
}

export default App