import React, { useState } from 'react'

function Reactpage() {
    const myreact = "https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg"
 
 const [moreh,morehs]=useState("100px")
 const readmore =()=>{
    morehs("auto")


 }
 
    return (
    <div className='container-fluid bg-success' >
    <div className='row'>
        {/* <div className='col-sm-12 p-3' style={{height:500,overflow:'scroll'}}> */}
        <div className='col-sm-12 p-3' >
            <h1 className='border-bottom pb-3'>About Reactjs</h1>
            <img src={myreact} alt='sdfjkksdhf'/>
            <h5 className='text-white m-3'>MongoDB Atlas' document model enables developers to store data as JSON-like objects that resemble objects in application code. With MongoDB Atlas, use the tools and languages that you prefer. Manage your clusters with MongoDB CLI for Atlas, or IaC tools like Terraform or Cloudformation.</h5>
            <p style={{height:`${moreh}`,overflowY:"hidden"}}>MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time The document model maps to the objects in your application code, making data easy to work with Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use MongoDB is free to use. Versions released prior to October 16, 2018 are published under the AGPL. All versions released after October 16, 2018, including patch fixes for prior versions, are
            MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time The document model maps to the objects in your application code, making data easy to work with Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use MongoDB is free to use. Versions released prior to October 16, 2018 are published under the AGPL. All versions released after October 16, 2018, including patch fixes for prior versions, are
            MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time The document model maps to the objects in your application code, making data easy to work with Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use MongoDB is free to use. Versions released prior to October 16, 2018 are published under the AGPL. All versions released after October 16, 2018, including patch fixes for prior versions, are
            MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time The document model maps to the objects in your application code, making data easy to work with Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use MongoDB is free to use. Versions released prior to October 16, 2018 are published under the AGPL. All versions released after October 16, 2018, including patch fixes for prior versions, are
            </p>
            <input type='button' value="more" onClick={readmore}/>
        </div>

    </div>
</div>
  )
}

export default Reactpage