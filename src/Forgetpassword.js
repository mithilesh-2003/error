
import React from 'react'
import './App.css';


function Forgetpassword() {
  return (
    <div className='A'>
    <img className='A1' src='https://t4.ftcdn.net/jpg/06/21/38/09/240_F_621380970_R7J1LVl5jj0opdCWhU8QTGo8KU56G03x.jpg'/>


    <div className=''>
    <h3 className='A2'><u>Forgotpassword</u></h3>
    <form className='A3'>
          <label>Email Address</label><br/>
          <input className="" type='text'required/><br/>
          <p style={{textAlign:"center"}}>or</p>
          <label>Phone</label><br/>
          <input className="" type='Number'/><br/><br></br>
        <button className="btn1">Send Otp</button>
        </form>
    </div>

    </div>
  )
}

export default Forgetpassword
