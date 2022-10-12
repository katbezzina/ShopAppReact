import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const redirectTo = useNavigate();
  const [updatedUserName, setUpdatedUserName] = useState("");

  function register(email, password) {
    console.log(email);
    console.log(password);
    //returning a promise
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
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

  const checkIfUserIsLogged = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        redirectTo("/");
      } else {
        setUser(null);
      }
    });
  };

  const logout = () => {
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
    checkIfUserIsLogged();
  }, []);

  // //only runs once
  // useEffect(() => {
  //   //unsubscribe to unsubscribe/reverse
  //   //firebaase's way to set user, setting current user to current user
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     //set user before set
  //     setUser(user);
  //     // setLoading(false);
  //   });
  //   return unsubscribe;
  // }, []);

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
        deleteYourUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
