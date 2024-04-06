import React from 'react'
import Networkfetch from './Networkfetch';
import Networkaxios from './Networkaxios';




function Contactuspage() {

const mydata = [
  {name:'ravi',age:10,height:'5ft'},
  {name:'mohan',age:10,height:'5ft'},
  {name:'ravi',age:10,height:'5ft'},
  {name:'ravi',age:10,height:'5ft'},
  {name:'ravi',age:10,height:'5ft'},
  {name:'ravi',age:10,height:'5ft'},
  {name:'ravi',age:10,height:'5ft'},
  {name:'ravi',age:10,height:'5ft'}
];


  return (
    <main style={{marginTop:'100px'}} className='border p-3'>

      <div className='container'>
        <div className='row'>
          {mydata.map((d)=>{
            return(
              <div className='col-md-3 border'>
                <h1>Name: {d.name}</h1>
                <h1>Age: {d.age}</h1>
                <h1>Height: {d.height}</h1>
              </div>
            )
          })}
      </div>
      </div>
      <Networkfetch/>
      <Networkaxios/>
    </main>
  )
}

export default Contactuspage