import { useState } from "react";
import "./nifty-index.styles.scss";

export const NiftyIndex = () => {
  const date = new Date().toDateString();
  const [DropdownItem, SetDropdownItem] = useState("YTD");

  return (
    <div className="container">
      <div className="nifty-index-info">
        <h1 className="display-5">NIFTY 50</h1>

        <div className="nifty-index-status">
          <div className="nifty-current">
            <h1 class="display-3">17,972.15</h1>
            <h1 class="display-4">113.95(0.64%)</h1>
            
            <span className="date-time">As on {date}</span>
          </div>
          <div className="nifty-index-range">
            <span>Day Range</span>
            <span>52 week Range</span>
            <span>Returns</span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
              >
                {DropdownItem}
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">
                  YTD
                </a>
                <a class="dropdown-item" href="/">
                  MTD
                </a>
              </div>

              <span>3.55%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
