import React, { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const redirectTo = useNavigate();
  const [updatedUserName, setUpdatedUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  function register(email, password) {
    console.log(email);
    console.log(password);
    //returning a promise
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userDocRef = doc(db, "favourites", user.uid);
        setDoc(userDocRef, { cartlist: [] });
        console.log(user);
        setUser(user);
        setIsLoggedIn(true);
        redirectTo("/UserAccount");
      })
      .catch((error) => {
        setUser(null);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoggedIn(true);
        redirectTo("/UserAccount");
      })
      .catch((error) => {
        setUser(null);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message);
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const logout = () => {
    setIsLoggedIn(false);
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userUpdate = (name) => {
    console.log("user updateFunction", user);
    updateProfile(user, {
      displayName: `${name}`,
    })
      .then(() => {
        setUpdatedUserName(name);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const deleteYourUser = async () => {
    try {
      const toDeleteUser = await user.delete();
    } catch (error) {
      setUser(null);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.id;
        setUser(user);
        setIsLoggedIn(true);
        redirectTo("/");
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        setUser,
        login,
        logout,
        userUpdate,
        updatedUserName,
        isLoggedIn,
        deleteYourUser,
        googleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
