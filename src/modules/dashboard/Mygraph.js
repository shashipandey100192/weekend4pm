import React, { useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import App from './Mychildgraph.tsx';
import Child1 from './Child1.js';

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

const students=[
    {
        name:"kumar",
        fees:8000,
        paid:3000,
        balance:5000,
    },
    {
        name:"ravi",
        fees:8000,
        paid:4000,
        balance:4000,
    },
    {
        name:"mohan",
        fees:8000,
        paid:4000,
        balance:4000,
    },
    {
        name:"rich",
        fees:8000,
        paid:4000,
        balance:4000,
    },
    {
        name:"priya",
        fees:10000,
        paid:2000,
        balance:8000,
    },
    {
        name:"mohit",
        fees:8000,
        paid:4000,
        balance:4000,
    }
];


function Mygraph() {
    const [drop ,setdrop]=useState('abc');
    const myfun = (myelement)=>{
        setdrop(myelement.target.value);

    }

  return (
    <div className='container custop'>
        <div className='row'>
            <div className='col-md-3 p-3'>
                <select className='form-control' onChange={myfun}>
                    {students.map((d)=>{
                        return(
                            <option>{d.name}</option>
                        )
                    })}    
                </select>
                {/* <h2>{drop==="kumar" ? `<h1>this is ${drop} </h1>`: drop}</h2> */}
                <h2>{drop==="kumar" ?  <Child1/>: drop}</h2>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-8 p-2 bg-dark'>
                <h1>graph</h1>
                <BarChart
                    width={700}
                    height={300}
                    data={students}
                    >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="fees" fill="orange" />
                <Bar dataKey="paid" fill="green" />
                <Bar dataKey="balance" fill="red" />
                </BarChart>
            </div>
            <div className='col-md-4 p-3 bg-dark'>
                <App/>
            </div>
        </div>

    </div>
  )
}

export default Mygraph