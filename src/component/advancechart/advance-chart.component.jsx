import { useState } from "react";
import { Data } from "../../data";
import Monthwisechart1 from "../chart/Monthwisechart1";

export const AdvanceChart = () => {
  const [ChartData, SetChartData] = useState(Data);
  const [CurrentChartData, SetCurrentChartData] = useState(ChartData);

  const DayWiseDataChange1 = () => {
    const newData = ChartData.filter((data) => {
      var d1 = new Date(data.Date);
      var d2 = new Date("2023-01-12");
      var diff = d2.getTime() - d1.getTime() + 1;
      var daydiff = (diff / (24 * 60 * 60 * 1000)).toFixed(0);
      return daydiff < 1;
    });

    SetCurrentChartData(newData);
  };
  const DayWiseDataChange2 = () => {
    const newData = ChartData.filter((data) => {
      var d1 = new Date(data.Date);
      var d2 = new Date("2023-01-12");
      var diff = d2.getTime() - d1.getTime() + 1;
      var daydiff = (diff / (24 * 60 * 60 * 1000)).toFixed(0);
      return daydiff < 5;
    });

    SetCurrentChartData(newData);
  };

  const MonthWiseDataChange1 = () => {
    const newData = ChartData.filter((data) => {
      var d1 = new Date(data.Date);
      var d2 = new Date("2023-01-12");
      var diff = d2.getTime() - d1.getTime() + 1;
      var daydiff = (diff / (24 * 60 * 60 * 1000)).toFixed(0);
      return daydiff < 30;
    });

    SetCurrentChartData(newData);
  };

  const MonthWiseDataChange2 = () => {
    const newData = ChartData.filter((data) => {
      var d1 = new Date(data.Date);
      var d2 = new Date("2023-01-12");
      var diff = d2.getTime() - d1.getTime() + 1;
      var daydiff = (diff / (24 * 60 * 60 * 1000)).toFixed(0);
      return daydiff < 90;
    });

    SetCurrentChartData(newData);
  };

  const MonthWiseDataChange3 = () => {
    const newData = ChartData.filter((data) => {
      var d1 = new Date(data.Date);
      var d2 = new Date("2023-01-12");
      var diff = d2.getTime() - d1.getTime() + 1;
      var daydiff = (diff / (24 * 60 * 60 * 1000)).toFixed(0);
      return daydiff < 180;
    });

    SetCurrentChartData(newData);
  };

  const YearWiseDataChange1 = () => {
    const newData = ChartData.filter((data) => {
      var d1 = new Date(data.Date);
      var d2 = new Date("2023-01-12");
      var diff = d2.getTime() - d1.getTime() + 1;
      var daydiff = (diff / (24 * 60 * 60 * 1000)).toFixed(0);
      return daydiff < 365;
    });

    SetCurrentChartData(newData);
  };

  const MaxData = () => {
    const newData = ChartData;

    SetCurrentChartData(newData);
  };

  console.log(CurrentChartData);
  return (
    <div className="Advance-chart">
      <div className="button container">
        <button onClick={DayWiseDataChange1}>1D</button>
        <button onClick={DayWiseDataChange2}>5D</button>
        <button onClick={MonthWiseDataChange1}>1M</button>
        <button onClick={MonthWiseDataChange2}>3M</button>
        <button onClick={MonthWiseDataChange3}>6M</button>
        <button onClick={YearWiseDataChange1}>1Y</button>
        <button onClick={MaxData}>Max</button>
      </div>
      <Monthwisechart1 Data={CurrentChartData} />
    </div>
  );
};
