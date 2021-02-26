import React from "react";
import Titletext from "../src/components/common/Titletext";
import Nav from "../src/components/Nav";



function App() {
  return (
      <header>
        <Nav>
          <Titletext variant="h4" color="primary" text="Book Music & Comedy Events anywhere in New York"/>
        </Nav>
      </header>
  );
}

export default App;
