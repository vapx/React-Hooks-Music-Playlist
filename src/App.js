import React,{ useState, useEffect } from "react";
import Nav from "../src/components/Nav";
import axios from "axios";



function App() {

  const [ music,setMusic ] = useState("");
  useEffect(() => {
    getMusic();
  },[])


  return (
      <div>
        <Nav />
      </div>
  );
}

export default App;
