import { createCalendar } from "../helper";
import "./Hatch.css";
export default function Hatch({ date }) {
  function handleClick(e) {
    console.log(date, e.target);
  }
  return (
    <div>
      {createCalendar.map((num, index) => {
        return (
          <div className="hatch-container" key={index}>
            <div className={num.nr} onClick={handleClick}>
              <p>{num.nr}</p>
              <img width={120} src={num.img} alt="" />
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
