import React, { useState } from 'react'

export default function Calculator() {


  const[x,setx]=useState(15)
  const[y,sety]=useState(3)
  const[a,seta]=useState(40)


  function handlex(event){

    const data = event.target.vallue 
    setx(parseInt(data))
  }
  function handley(event){

    const data = event.target.vallue 
    setx(parseInt(data))

  }
  function handlea(event){

    const data = event.target.vallue 
    seta(parseInt(data))

  }



  return (
    <div>
      <input type="number"value={x}onChange={handlex}/>
      <input type="number"value={y}onChange={handley}/>
      <input type="number"value={a}onChange={handlea}/> 

       <h2>Addition:{a}*{x}+{y}={x+y*a} </h2>J
      <h2>Subtraction:{a}+{x-y}={a+x-y} </h2>
      <h2>Multiplication:{a}- {x*y}={a-x*y} </h2>
      <h2>Division:{a}+ {x/y}={a+x/y} </h2>
      <h2>Remainder: {x%y} </h2>
      
    </div>
  )
}
