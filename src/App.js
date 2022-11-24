import React from "react";
import "./App.css";
import Hatch from "./components/Hatch";
function App() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="App">
      <h1>Advent Calendar</h1>
      <h2>Today's date is : {date}</h2>
      <Hatch date={date} />
    </div>
  );
}

export default App;
