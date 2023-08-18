import React from "react";
import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// components
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="FadeLoader">
          <FadeLoader
            color={"#f87765"}
            loading={loading}
            height={100}
            margin={10}
          />
        </div>
      ) : 
        <> 
           <Navbar />
           <Routes>
            <Route path='/' element={<Home/>}/>
           </Routes>
        </>
      }
      
    </>
  );
};

export default App;
