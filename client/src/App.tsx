import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Youtube from "./component/youtube";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="h-screen">        
        <Youtube />
      </div>
    </div>
  );
}

export default App;
