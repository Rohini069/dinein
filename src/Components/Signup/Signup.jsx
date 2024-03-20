import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import { api_uri } from '../../config';
const Signup = () => {
  const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');

  const Register = async(e)=>{
    e.preventDefault();
      const response = await fetch(`${api_uri}/api/auth/register`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({
          name:name,
          email:email,
          phone:phone,
          password:password
        })
      })
      const data = await response.json();
      console.log(data);

  }
  return (
    <>
    <div className="signup_container">
      <div className="sigup_main">
        <div className="signup_grid"><h1>Signup</h1></div>
        <div className="signup_text">
          <p>Already a Member? <Link to='/login'>Login Here</Link></p>
        </div>
        <div className="signup_form">
          <form onSubmit={Register}>
              {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className='form-label'>Enter Name:</label>
            <input type="text" id='name' className='form-control' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          

          {/* email */}
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Enter email:</label>
            <input type="email" id='email' className='form-control' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div> 


          {/* phone */}
          <div className="mb-3">
            <label htmlFor="phone" className='form-label'>Enter phone:</label>
            <input type="number" id='phone' className='form-control' placeholder='Enter phone' value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className='form-label'>Enter password:</label>
            <input type="password" id='password' className='form-control' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div> 
          
          <button className='btn_signup'>Register</button>

          </form>
        </div>

        </div>
      </div>
    
    </>
  )
}

export default Signup