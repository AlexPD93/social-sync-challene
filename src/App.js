import React from "react";
import "./App.css";
import Doors from "./components/Doors";
import Date from "./helper";
function App() {
  return (
    <div className="App">
      <h1>Advent Calendar</h1>
      <h2>Today's date is : {Date}</h2>
      <Doors />
    </div>
  );
}

export default App;
