import React from "react";
import './Range.css'

export const Range =(props) =>{

    const low = props.low;
    const high = props.high;
    const current = props.current;
    const cal =((current - low)*100)/ high;
    const per = Math.ceil(cal)*2 + 20;
    let percent = per.toString();
    console.log(percent);
    return(
        <div className="range-toolbar">
              <div className="writing">
              <h5 className="pos1">{low}</h5>
              <h5 className="pos2">{high}</h5>
            </div>
            <div className="range">
              <span className="low">L</span>
              <span className="dot" style={{left:per}}></span>
              <hr></hr>
              <span className="high">H</span>
            </div>
        </div>
    );
}