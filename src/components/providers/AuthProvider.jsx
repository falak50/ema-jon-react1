import  { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../../firebase/firebase.config';

const auth =getAuth(app)
const AuthProvider = ({children}) => {
  
    const [user,setUser] = useState(null);
    const [loading ,setLoading] = useState(true);
   
    const createUser = (email,password) => {
        setLoading(true); /// with out it work proferly but for safe
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const singIn = (email,password) => {
        setLoading(true); /// with out it work proferly but for safe
        return signInWithEmailAndPassword(auth,email,password);
    } 
    const logOut = () => {
        return signOut(auth);
    }
    
    // observer user auth state
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });

        // stop observing while unmounting 
        return () =>{
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;