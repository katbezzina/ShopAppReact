import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./Components/Navbar";
import ProductModal from "./Components/ProductModal";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserAccount from "./Pages/UserAccount";
import NotLogged from "./Pages/NotLogged";
import ProtectedRoute from "./Components/ProtectedRoute";

import { ProductsContextProvider } from "./Context/ProductsContext";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductsContextProvider>
          <Navbar />
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
            <Route
              path="/UserAccount"
              element={
                <ProtectedRoute>
                  <UserAccount />
                </ProtectedRoute>
              }
            />
            <Route path="/NotLogged" element={<NotLogged />} />
          </Routes>
          <Footer />
        </ProductsContextProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
