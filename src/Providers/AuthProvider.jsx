import React, { createContext } from 'react';
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
import app from '../Authentication/firebase.config';

export const AuthContext = createContext(null);
const auth= getAuth(app);

const AuthProvider = ({children}) => {

    const user ={}
    // create user
    const createUser =((email,password)=> {
      return createUserWithEmailAndPassword(auth, email, password)
    })
    const authInfo = {
        user,
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;