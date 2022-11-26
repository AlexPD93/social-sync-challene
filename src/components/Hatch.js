import { useState, useEffect } from "react";
import { createCalendar } from "../helper";
import "./Hatch.css";

export default function Hatch({ date }) {
  const dateNum = date.slice(0, 2);
  const month = date.slice(3, 5);

  const [doors, setDoors] = useState([]);
  const [calendar, setCalendar] = useState(createCalendar);

  function handleClick(e) {
    const newArray = calendar.map((door) => {
      if (door.nr === 25) {
        return { ...door, open: true };
      }
      return door;
    });
    setCalendar(newArray);
  }
  console.log(calendar);
  return (
    <div className="board">
      {calendar.map((obj, index) => {
        return (
          <div className="hatch-container" onClick={handleClick} key={index}>
            <h3 className={`${obj.nr}, front-h3-tag`}>{obj.nr}</h3>
            <img
              className={`${obj.nr}, front-img-tag`}
              width={120}
              src={obj.img}
              alt=""
            />
            <img
              className={obj.open ? "opened" : `${obj.nr}, back-img-tag`}
              src={obj.backFile}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}

// Number(dateNum)
