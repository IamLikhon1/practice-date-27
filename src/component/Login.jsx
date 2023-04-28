import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextApi } from '../provider/AuthProvider';
import { FaEye,FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const{signIn}=useContext(ContextApi)
  const [show, setShow]=useState(false)

  const location=useLocation();
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || '/'

  const handleLogin=(e)=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
  
 

    signIn(email,password)
    
    .then(result=>{
      const user=result.user;
      console.log(user)
    navigate(from,{replace:true})

    })
    .catch(error=>{
      console.log(error)
    })
    form.reset()
  }
  
    return (
        <form onSubmit={handleLogin} >
          <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-yellow-400 ">Login!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label> 
                <input type={show?'text':'password'} name='password' placeholder="password" className="input input-bordered" />
                <p className='relative bottom-8 text-xl left-44' onClick={()=>setShow(!show)}>
                {
                  show?<FaEyeSlash></FaEyeSlash>: <FaEye></FaEye>
                }
                </p>
               
                <label className="label">
                  <p><small>New Here? Go To <Link to='/register' className=' link font-medium text-warning'>Register</Link></small></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </form>
    );
};

export default Login;