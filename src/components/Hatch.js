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
    <div>
      {createCalendar.map((num, index) => {
        return (
          <div className="hatch-container" key={index}>
            <div className={num.nr} onClick={handleClick}>
              <p className={num.nr}>{num.nr}</p>
              <img className={num.nr} width={120} src={num.img} alt="" />
            </div>
            <div className="back">
              <img width={120} src={num.backFile} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
