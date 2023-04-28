import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const ContextApi=createContext(null);
const auth=getAuth(app)

 const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
    }
   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
        // console.log("auth change ",currentUser)
    });
    return()=>{
        unsubscribe()
    }
   },[])
    const authInfo={
        user,
        auth,
        createUser,
        signIn,
        logout,
        loading
    }
    return (
        <ContextApi.Provider value={authInfo}>

            {children}
            
        </ContextApi.Provider>
    );
};

export default AuthProvider;