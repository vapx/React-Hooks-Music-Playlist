import React,{ useState, useEffect } from "react";
import Nav from "../src/components/Nav";
import axios from "axios";



function App() {

  const [ music,setMusic ] = useState("");

  function getMusic(){
    axios.get("https://genius.p.rapidapi.com/artists/16775/songs")
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

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
