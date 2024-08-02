import React, {useState, useEffect} from "react";
import "./index.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },6000)
  }, [])
  return (
    <>
    {
      loading ? <div> <Loader/> </div> : <div className="App">
    
      <Navbar />
      <Home />
      <About />
      </div>
    }
    </>
  );
}

export default App;
