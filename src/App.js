import React from "react";
import "./App.css";
import Doors from "./components/Doors";
function App() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="App">
      <h1>Advent Calendar</h1>
      <h2>Today's date is : {date}</h2>
      <Doors date={date} />
    </div>
  );
}

export default App;
