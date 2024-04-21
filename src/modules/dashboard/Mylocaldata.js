import React, { useEffect, useState } from 'react'

function Mylocaldata() {
  const [a,b]=useState([])

const getmylocaldata = ()=>{
   const localdatas = JSON.parse(localStorage.getItem("userdata"));
    console.log(localdatas);
    b(localdatas);
}
useEffect(()=>{
    getmylocaldata();
},[]);


  
    return (
    <div className='container custop'>
        <div className='row'>
            <div className='col-12'>
                <h1>LocalStorage data</h1>
            
                {a.map((d)=>{
                    return(
                        
                        <div className="card text-bg-primary mb-3">
                        <div className="card-header">{d.useername}</div>
                        <div className="card-body">
                            <h5 className="card-title">{d.email}</h5>
                            <p className="card-text">{d.phone}</p>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Mylocaldata