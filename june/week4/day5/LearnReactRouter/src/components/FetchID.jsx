import React from 'react'
import { useParams } from 'react-router'

function FetchID() {
    let {id}=useParams();
  return (
    <div>
      <h1>This is my Fetching Page</h1>
      <h2>ID is:{id}</h2>
    </div>
  )
}

export default FetchID
