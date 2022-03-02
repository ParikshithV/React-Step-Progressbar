import { useState } from "react";
import "./stepProgress.css";
import tick from "./tick.png";

function StepProgress() {
  const stepNums = [1, 2, 3];
  const [tickMark, setTickMark] = useState([0,0,0]);
  const [progressCss, setProgressCss] = useState("line");

  // var tickUrl = "https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png";

  function handleProgress(num) {
    // setProgressCss("line fifty");
    console.log(num);
    if (num === 1) {
        setProgressCss("line fifty");
        setTickMark([1,0,0]);
    }
    else if (num === 2) {
        setProgressCss("line hundred");
        setTickMark([1,1,0]);
    }
    else if (num === 3) {
        setProgressCss("line hundred");
        setTickMark([1,1,1]);
    }
  }

  return (
    <div className="parentDiv">
      <div className={progressCss} style={{ progressCss }}>
        {stepNums.map((num) => (
            <div className="counterNumbers" onClick={() => handleProgress(num)}>
                {tickMark[num-1] === 1 && <img className="image" src={tick} alt="tick"/>}
                {console.log(tickMark)}
                {tickMark[num-1] !== 1 && num}
            </div>
        ))}
      </div>
    </div>
  );
}

export default StepProgress;
