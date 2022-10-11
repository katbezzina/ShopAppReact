import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

//function to useContext
export function useAuth() {
  return useContext(AuthContext);
}

//function to Provider
export function AuthProvider({ children }) {
  //handling current user with state, by default no user (hence empty)
  const [currentUser, setCurrentUser] = useState();
  //did the verification to see if there is a user
  const [loading, setLoading] = useState(true);

  function register(email, password) {
    //returning a promise
    return auth.signInWithEmailAndPassword(email, password);
  }
  //only runs once
  useEffect(() => {
    //unsubscribe to unsubscribe/reverse
    //firebaase's way to set user, setting current user to current user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      //set user before set
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, register };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
