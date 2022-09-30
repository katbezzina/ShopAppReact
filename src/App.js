import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import ListDetails from "./Components/ListDetails";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./Pages/Chat";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ListDetails />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [fetchedData, setFetchedData] = useState([]);
  let api = `https://fakestoreapi.com/products`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((results) => results.json());
      setFetchedData(data);
    })();
    //watching the api
  }, [api]);

  return (
    <div>
      <Search page="/" details={fetchedData} />
      <Footer />
    </div>
  );
};

export default App;
