import {useContext, createContext, useState, useEffect} from 'react';
import {GoogleAuthProvider, signInWithPopup, 
    signOut, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase_setup/firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
        })
        return () => {unsubscribe()};
    }, [])

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth =()=> {
    return useContext(AuthContext);
}