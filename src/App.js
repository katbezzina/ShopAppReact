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
// import { ProductsContextProvider } from "./Context/ProductsContext";

function App() {
  return (
    // <ProductsContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductModal />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
    // </ProductsContextProvider>
  );
}

export default App;
