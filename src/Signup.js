import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import { click } from '@testing-library/user-event/dist/click';


function Signup() {
  return (
    <div className='a'>
      <div className='b'>
        <div>
          <img style={{height:"400px"}} src='https://img.freepik.com/free-photo/glowing-blue-sphere-held-by-human-hand-generated-by-ai_188544-41033.jpg'/>
        </div>
      </div>
      <form className='c'>
        <h3 style={{marginLeft:"50px",marginTop:"10px"}}>Sign Up</h3>
        <div className='d'>
          <label>Enter your Name</label><br/>
          <input className="e"required type='text'/>
        </div>
        <div className='d'>
          <label>Phone No</label><br/>
          <input className="e"required type='number'/>
        </div>
        <div className='d'>
          <label>Email Address</label><br/>
          <input className="e"required type='text'/>
        </div>
        <div className='d'>
          <label>Password</label><br/>
          <input className="e"required type='password'/>
        </div>
        <div className='d'>
          <button style={{background:"green"}} className="e">Continew</button>
          
        </div>
        <div className='d'>
        <Link style={{background:"gray"}} to='/'>
            <button className='e'>Login</button>
              </Link>
        </div>
       
        
      </form>
    </div>
  )
}

export default Signup







  