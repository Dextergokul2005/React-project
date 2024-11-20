import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Apii = () => {
    const[name,setName]=useState([]);
    const[user,setUser]=useState('');
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/7').then((res)=>{
            console.log(res.data)
            setName(res.data)
        })
    },[]);
    const handlechange=(e)=>{
        setUser(e.target.value)
    }
    const handlepost=()=>{
        axios.post('https://jsonplaceholder.typicode.com/users',{name:user}).then((a)=>{
            console.log(a.data);
            setName([...name,a.data])
        })
    }
    const handleput=()=>{
        axios.put('https://jsonplaceholder.typicode.com/users/7',{name:user}).then((a)=>{
            console.log(a.data);
            setName(a.data)
        })
    }
    const handledel=()=>{
        axios.delete('https://jsonplaceholder.typicode.com/users/7',{name:user}).then((a)=>{
            console.log(a.data);
            setName(a.data)
        })
    }
  return (
    <div>
        <div>
            <input type='text'
            placeholder='Enter ur name'
            value={user}
            onChange={handlechange}/>
            <button onClick={handlepost}>postman</button>
            <button onClick={handleput}>put</button>
            <button onClick={handledel}>delete</button>
            {name.name}
        </div>
        {/*<div>
            {
                name.map((val,index)=>(
                    <h1 key={index} >{val.name}</h1>
                )
                )
            }
        </div>*/}
    </div>
  )
}

export default Apii
