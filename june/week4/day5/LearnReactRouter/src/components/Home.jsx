import React from 'react'
import { useNavigate } from 'react-router'
import { FaGreaterThan } from "react-icons/fa";

function Home() {
    let navigate=useNavigate()

    function handleClick(){
        navigate('/about')
    }
  return (
    <div>
      <h1>This is my home page
        <button onClick={handleClick}><FaGreaterThan /></button>
      </h1>
    </div>
  )
}

export default Home
