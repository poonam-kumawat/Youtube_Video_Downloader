import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Youtube from "./component/youtube";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Youtube />
    </div>
  );
}

export default App;
