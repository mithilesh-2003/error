import React, { useState } from 'react'
import './App.css';
import { Link, Navigate, useNavigate } from 'react-router-dom'


function Login() {
  const [emailLog ,setEmailLog]=useState("")
  const [password, setpassword]=useState("")
  const navigate = useNavigate();
  
  const onsubmit = ()=>{
    if(emailLog==="kumaryadavmithilesh861@gmail.com"& password==="12345"){
      navigate(`/Home?email=${emailLog}`)
    }
    else{
      // if the match ,navigate home page
      alert("some thing went wrong")
      navigate("/Login")
    }

  }
  return (
    <div className='a'>
      <div className='b'>
        <div>
          <img style={{height:"400px"}} src='https://img.freepik.com/free-photo/glowing-blue-sphere-held-by-human-hand-generated-by-ai_188544-41033.jpg'/>
        </div>
      </div>
      <form className='c'>
        <h3 style={{marginLeft:"50px",marginTop:"30px"}}>Sign In</h3>
        <div className='d'>
          <label>Email Address</label><br/>
          <input className="e"required type='text'onChange={(event)=>setEmailLog(event.target.value)}/>
        </div>
        <div className='d'>
          <label>Password</label><br/>
          <input className="e"required type='password'onChange={(event)=>setpassword(event.target.value)}/>
        </div>
        <div className='d'>
        {/* <Link to='/Home'> */}
            <button onClick={onsubmit} className='btn1'>Continue</button>
             {/* </Link> */}
          <Link style={{paddingLeft:"10px"}} to='/Forgetpassword'>
            <a href='Forgetpassword'>Forgotpassword</a>
              </Link>
        </div>
        <div className='d'>
        <Link to='/Signup'>
            <button className='e'>Signup</button>
              </Link>
        </div>
        <div className='d'>
          <button style={{background:"skyblue"}} className='e'> signin with Twiter</button>
        </div>
        <div className='d'>
          <button style={{background:"blue"}} className='e'> signin with facebook</button>
        </div>
      </form>
    </div>
  )
}

export default Login







  