import React, { useState } from 'react'


function Networkfetch() {
const [data,fdata]=useState([])
const mygetdata = ()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((d)=>{
       return d.json()
    }).then((abcd)=>{
        console.log(abcd);
        fdata(abcd);
    })
}


    return ( 
    <div className='container'>
        <div className='row'>
            <input type='button' value="fetchapi" onClick={mygetdata}/>
                {data.map((obj)=>{
                    return(
                        <section className='col-md-3'>
                        <div className='border p-2 bg-info m-2'>
                        <p>Id: {obj.id}</p>
                        <p>Name:{obj.name}</p>
                        <p>UserName: {obj.username}</p>
                        <p>Address</p>
                        <hr/>
                        <p>CIty: {obj.address.city}</p>
                    </div>
                    </section>

                    )
                })}
        </div>
    </div>
  )
}

export default Networkfetch