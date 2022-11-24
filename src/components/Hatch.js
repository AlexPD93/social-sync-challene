import { createCalendar } from "../helper";
import "./Hatch.css";

export default function Hatch({ date }) {
  const dateNum = date.slice(0, 2);

  function handleClick(e) {
    if (e.target.className === dateNum) {
      e.target.style.backgroundColor = "red";
    }
  }
  return (
    <div className="board">
      {createCalendar.map((num, index) => {
        return (
          <div className="hatch-container" onClick={handleClick}>
            <p className={`${num.nr}, front-p-tag`}>{num.nr}</p>
            <img
              className={`${num.nr}, front-img-tag`}
              width={120}
              src={num.img}
              alt=""
            />
            <img
              className={`${num.nr}, back-img-tag`}
              src={num.backFile}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
