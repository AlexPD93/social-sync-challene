import { useState, useEffect } from "react";
import { createCalendar } from "../helper";
import "./Hatch.css";

export default function Hatch({ date }) {
  const dateNum = date.slice(0, 2);
  const month = date.slice(3, 5);

  const [calendar, setCalendar] = useState(createCalendar);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("doors"));
    if (local) {
      setCalendar(local);
    } else return;
  }, []);

  function handleClick(e) {
    // If door number is not in the future. Open it when clicked on.
    // Check month is 12 and door number isn't greater than date

    const newArray = calendar.map((door) => {
      if (
        e.target.className.includes(10) &&
        door.nr === 10 &&
        Number(month) === 11
      ) {
        return { ...door, open: true };
      }
      return door;
    });
    setCalendar(newArray);
    localStorage.setItem("doors", JSON.stringify(newArray));
  }

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

            {obj.backFile.includes("youtube") ? (
              <iframe
                className={obj.open ? "opened" : `${obj.nr}, back-img-tag`}
                src={obj.backFile}
                title="YouTube video player"
                allow="autoplay; encrypted-media;"
              ></iframe>
            ) : (
              <img
                className={obj.open ? "opened" : `${obj.nr}, back-img-tag`}
                src={obj.backFile}
                alt=""
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
