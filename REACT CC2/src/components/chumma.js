import React, { useState } from 'react'

const Chumma = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const[nameerror,setNameerror]=useState(false);
  const[emailerror,setEmailerror]=useState(false);
  const[passworderror,setPassworderror]=useState(false);


  const emailReg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const handlename=(e)=>{
    setName(e.target.value)
  }
  const handleemail=(e)=>{
    setEmail(e.target.value)
  }
  const handlepassword=(e)=>{
    setPassword(e.target.value)
  }

  const handlebtn=(e)=>{
    e.preventDefault();
    setNameerror(false);
    setPassworderror(false);
    setEmailerror(false);


    if(name==="" && email==="" && password===""){
      alert("it can't be empty");
    }
    else if(name.length<5)
    {
        setNameerror(true);
    }
    else if(password.length<8)
        {
            setPassworderror(true);
        }
    else if(!emailReg.test(email)){
        setEmailerror(true);
    }
  }
  return (
    <div>
      <center>
        <form>
          <label>Username:</label>
          <input onChange={handlename}></input>
          {nameerror && <p>The username must be 5 characters.</p>}
          <label>Email:</label>
          <input onChange={handleemail}></input>
          {emailerror && <p>indhu</p>}

          <label>Password:</label>
          <input onChange={handlepassword}></input>
          {passworderror && <p>The password must be 5 characters.</p>}
          <button onClick={handlebtn}>Submit</button>
        </form>
      </center>
    </div>
  )
}

export default Chumma;