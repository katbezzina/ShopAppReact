import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./Style/App.css";
import Navigation from "./Components/Navbar";
import ProductModal from "./Components/ProductModal";
import ProtectedRoute from "./Components/ProtectedRoute";
// import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createContext, useState } from "react";

import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserAccount from "./Pages/UserAccount";

import { ProductsContextProvider } from "./Context/ProductsContext";
import { AuthProvider } from "./Context/AuthContext";
import { SwitchProvider } from "./Context/ThemeContext";

function App() {
  return (
    <Router>
      <SwitchProvider>
        {/* <div className="App" id="light"> */}
        <AuthProvider>
          <ProductsContextProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<ProductModal />} />
              <Route
                path="/Chat"
                element={
                  <ProtectedRoute>
                    <Chat />
                  </ProtectedRoute>
                }
              />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/UserAccount" element={<UserAccount />} />
            </Routes>
            {/* <Footer /> */}
          </ProductsContextProvider>
        </AuthProvider>
        {/* </div> */}
      </SwitchProvider>
    </Router>
  );
}

export default App;
