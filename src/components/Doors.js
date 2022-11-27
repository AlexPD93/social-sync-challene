import { useState, useEffect } from "react";
import { createCalendar } from "../helper";
import Date from "../helper";
import "./Doors.css";

export default function Doors() {
  const date = Date.slice(0, 2);
  const month = Date.slice(3, 5);
  // If you would like to see the advent calendar working before December use these variables instead of 12 in line 27 and date in line 28.

  // const fakeDate = 10;
  // const fakeMonth = 11;
  const [calendar, setCalendar] = useState(createCalendar);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("doors"));
    if (local) {
      setCalendar(local);
    } else return;
  }, []);

  function handleClick(e) {
    const doorNumber = Number(e.target.parentNode.id);

    const newArray = calendar.map((door) => {
      if (
        // check date is not in the future
        Number(month) === 12 && //change to 12
        doorNumber <= date && //change to date
        // Only open door that is clicked
        door.nr === doorNumber
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
          <div
            id={obj.nr}
            className="door-container"
            onClick={handleClick}
            key={index}
          >
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
                frameBorder="0"
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
