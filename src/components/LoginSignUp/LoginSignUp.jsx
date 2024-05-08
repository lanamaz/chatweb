import React, { useState } from 'react'
import './LoginSignUp.css';
import { Link } from 'react-router-dom';  

import personImage from'../../asset/user.png';
import passwordImage from '../../asset/padlock (1).png';
import emailImage from '../../asset/email.png';
const LoginSignUp = () => {
    const[action , setAction] = useState("Sign Up")
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
    <div className='inputs'>
    <div className='input'>
        <img src= { personImage }  alt=""  className="imgpoint" width={30} height={30} />
        <input type="text" placeholder='Name' />
    </div>
        <div className='input '>
        <img src= { emailImage } alt=""   className="imgpoint" width={30} height={30} />
        <input type="email" placeholder='Email' />
    </div>
        <div className='input '>
        <img src= { passwordImage }  alt=""   className="imgpoint" width={30} height={30} />
        <input type="password" placeholder='password' className='passww'/>
    </div>
    <div className='forget_password'> Lost Password ? <span> Click Here</span></div>
    <div className='submit_container'>
        <Link to='/home' className='lana'><div className={action==="logIn"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up</div></Link>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("logIn")}}>log In</div>
        </div>
    </div>
    </div>
  );
};

export default LoginSignUp
