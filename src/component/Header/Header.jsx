import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-none">
          
        </div>
        <div className="flex-1">
          <Link  to='/' className="btn btn-ghost normal-case text-xl">MR.AL</Link>
          <div className='md:mx-auto'>
            <Link className='mx-3 text-xl font-medium'  to='/'>Home</Link>
            <Link className='mx-3 text-xl font-medium' to='/about'>About Us</Link>
            <Link className='mx-3 text-xl font-medium' to='/private'>Private</Link>
            <Link className='mx-3 text-xl font-medium' to='/login'>Login</Link>
            <Link className='mx-3 text-xl font-medium' to='/register'>Register</Link>
          </div>
        </div>
      </div>
    );
};

export default Header;