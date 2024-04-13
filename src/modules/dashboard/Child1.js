import React from 'react'
import Thirdchild from './Thirdchild'

function Child1(props) {
  return (
    <div className='bg-info p-4'>
        <h2>child one</h2>
        <h1>this is first child component</h1>
        <h3> name is : {props.abc}</h3>
        <input type='button' value="show alert" onClick={props.func}/>
        <Thirdchild myfunc={props.func}/>
    </div>
  )
}

export default Child1