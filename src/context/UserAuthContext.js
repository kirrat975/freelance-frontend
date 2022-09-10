import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  
} from "firebase/auth";
import { auth } from "../firebase.config";

const userAuthContext = createContext();



export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp (email, password) {
    return(
      createUserWithEmailAndPassword(auth, email, password).then(()=>{
          sendEmailVerification(auth.currentUser);
      })
    );
   
  };
  
 

 
  
  
  function logOut() {
    return signOut(auth);
  }
  
  function passwordReset(email){
    return sendPasswordResetEmail(auth,email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user,logIn,signUp, logOut, passwordReset }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}