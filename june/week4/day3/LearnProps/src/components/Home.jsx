import React from 'react'

function Home(props) {
  return (
    <div>
        value is:{props.a} <br />
        the string value is:{props.str}
        <br />
        The object value are 
        <br />
        name :{props.obj.name}
        <br />
        age :{props.obj.age}
        <br />
        Email :{props.obj.email} <br />

        The array elements are: {props.arr[1]}
      <h2>This is my Home page</h2>
    </div>
  )
}

export default Home
