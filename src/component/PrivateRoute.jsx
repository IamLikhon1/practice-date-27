import React, { useContext } from 'react';
import { ContextApi } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(ContextApi)
    const location=useLocation();
    if(user){
        return children
    }
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    return (
        <Navigate to='/login' state={{from:location}} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;