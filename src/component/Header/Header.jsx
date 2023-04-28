import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../../provider/AuthProvider';

const Header = () => {
  const {user,logout}=useContext(ContextApi)
  const logoutHandle=()=>{
    logout()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
    return (
        <div className="navbar bg-base-100">
        <div className="flex-none">
          
        </div>
        <div className="flex-1">
          <Link  to='/' className="btn btn-ghost normal-case text-xl">MR.AL</Link>
          <div className='md:mx-auto'>
            <Link className='mx-3 text-xl font-medium'  to='/'>Home</Link>
            <Link className='mx-3 text-xl font-medium' to='/about'>About Us</Link>
            { user && <Link className='mx-3 text-xl font-medium' to='/private'>Private</Link>}
            <Link className='mx-3 text-xl font-medium' to='/login'>Login</Link>
            <Link className='mx-3 text-xl font-medium' to='/register'>Register</Link>
            {
              user ?<> <span>{user.email}</span>
              <span><button onClick={logoutHandle} className="btn btn-outline btn-secondary">Sign Out</button></span></>
              :<Link to='/login'>Login</Link>
            }
          </div>
        </div>
      </div>
    );
};

export default Header;