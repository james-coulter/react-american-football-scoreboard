import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [quarter, updateQuarter] = useState(1)
  const [down, downChange] = useState(1)



  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button onClick={() => downChange(down + 1)}>Next Down</button>
        <button onClick={() => downChange(down - 1)}>Back Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={() => updateQuarter(quarter + 1)}>Next Quarter</button>
        <button onClick={() => updateQuarter(quarter - 1)}>Back Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
