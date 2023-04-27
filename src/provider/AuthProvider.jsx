import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const ContextApi=createContext(null);
const auth=getAuth(app)

 const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        user,
        auth,
        createUser,
        signIn,
    }
    return (
        <ContextApi.Provider value={authInfo}>

            {children}
            
        </ContextApi.Provider>
    );
};

export default AuthProvider;