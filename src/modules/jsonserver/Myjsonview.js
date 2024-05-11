import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Myjsonview() {
    const {id}=useParams();
    const [singler,setsingler]=useState([])

    const Singlercord = ()=>{
        axios.get(`http://localhost:3333/students/${id}`).then((d)=>{
            console.log(d);
            setsingler(d.data)
        })
    }
    
    useEffect(()=>{
        Singlercord()
    },[]);
    


  return (
    <div className='container border custop'>
    <div className='row'>
        <div className='col-12'>
            <h1>List of Products  <Link to={'/jsonpage'} className='btn btn-info '>Back</Link></h1>
            <div className='card'>
                <h3>{singler.id}</h3>
                <h3>{singler.name}</h3>
                <h3>{singler.phone}</h3>
                <h3>{singler.email}</h3>
               
            </div>
        </div>
    </div>
</div>
  )
}

export default Myjsonview