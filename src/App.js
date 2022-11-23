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
      <p>Today's date is : {date}</p>
      <Hatch date={date} />
    </div>
  );
}

export default App;
