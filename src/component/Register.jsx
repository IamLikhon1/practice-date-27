import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
    const [error,setError]=useState('')
    const {auth,createUser}=useContext(ContextApi)

    const googleProvider = new GoogleAuthProvider();

    const handleGoogol=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value
        const name=form.name.value;

        if(password.length<8){
          setError('Please Provide longer than 8 digit')
          return
        }
        
        else if(!/(?=.*[A-Z])/.test(password)){
          setError('Add One Capital letter')
          return
        }
        else{
          setError('')
          toast.success('SuccessFully Register')
        }

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
        console.log(name,email,password)
        form.reset()
    }



    return (
      <form onSubmit={handleSubmit} >
          <div className="hero min-h-screen bg-base-200 mb-0">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold"> <span className='text-blue-700'>Register</span> now!</h1>
         
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body mt-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder=" Enter Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder=" Enter Email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder=" Enter Password" className="input input-bordered" required />
               <p><small className='text-red-500'>{error}</small></p>
                <label className="label">
                  <p>Already Have Account!<Link className='link text-blue-600' to='/login'>Login</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <button onClick={handleGoogol} className="btn btn-warning mt-5">Login With Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    );
};

export default Register;