import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut ,updateProfile } from "firebase/auth";
import app from '../Authentication/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);

    // create user
    const createUser = ((email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    })
    // const login
    const logIn = ((email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    })
    // Google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // github login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // logOut
    const logOut = () => {
        setLoading(true);
         return signOut(auth);

    }

 // observer

 useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth,loggedUser => {
        setUser(loggedUser);
        setLoading(false);
    })
    return ()=> {
        unsubscribe();
    }
},[]);
 // update user 
 const updateUser = (name,photo)=> {
    setLoading(true);
    updateProfile(auth.currentUser,{
         displayName:name,
         photoURL:photo
     })
 }
    const authInfo = {
        user,
        createUser,
        logIn,
        googleLogin,
        githubLogin,
        loading,
        logOut,
        updateUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;