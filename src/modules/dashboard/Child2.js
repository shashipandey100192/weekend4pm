import React from 'react'

function Child2(props) {
  return (
    <div className='bg-info p-4'>
    <h2>child two</h2>
    <h1>this is second child component</h1>+
    <h1>age is: {props.age}</h1>
</div>
  )
}

export default Child2