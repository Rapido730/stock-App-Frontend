import { useEffect, useState } from "react";
// import {Data} from './Data'
import "./Monthwisechart1style.scss";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
} from "chart.js";

import { Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController
);

const Monthwisechart1 = ({ Data }) => {
  const CompanyName = useSelector(
    (state) => state.CompanyStockData.CurrentCompany
  );
  const MonthLabels = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const getLimit = () =>
    Data.reduce((mini, currData) => {
      return Math.min(currData.Close, mini);
    }, 100000);

  console.log(Data.length);
  var oneThirdYear = false;

  useEffect(() => {
    if (Data.length >= 400) {
      oneThirdYear = true;
    }
  }, [Data, CompanyName]);

  const ShowLabelHandler = () => {
    let NewLabel = [];
    Data.forEach((x) => {
      const date = new Date(x.Date);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      if (Data.length < 70) {
        NewLabel = [
          ...NewLabel,
          day + " - " + MonthLabels[month] + " - " + year,
        ];
      } else if (Data.length < 140) {
        !NewLabel.includes(MonthLabels[month] + " " + year) &&
          (NewLabel = [...NewLabel, MonthLabels[month] + " " + year]);
      } else if (Data.length < 288) {
        !NewLabel.includes(MonthLabels[month] + " " + year) &&
          (NewLabel = [...NewLabel, MonthLabels[month] + " " + year]);
      } else {
        !NewLabel.includes(MonthLabels[month] + " " + year) &&
          (NewLabel = [...NewLabel, MonthLabels[month] + " " + year]);
      }
    });

    if (Data.length < 70) {
      return NewLabel;
    } else {
      let CurrentShowLabel = [];

      if (oneThirdYear === true) {
        var flag = true;
        for (let i = 0; i < NewLabel.length; i++) {
          if (flag) {
            flag = !flag;
          } else {
            flag = !flag;
            CurrentShowLabel = [...CurrentShowLabel, NewLabel[i]];
          }
        }
        return CurrentShowLabel;
      } else {
        return NewLabel;
      }
    }
  };

  const color = ["#FF0000", "#006600"];

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
    },
    scales: {
      y: {
        display: true,
        min: getLimit() / 2,
        //   max :
        //   stepSize:
        position: "right",
      },
      x: {
        display: false,
      },
      secondXAxis: {
        axis: "x",
        labels: ShowLabelHandler(),
      },
    },
  };

  const BarUserData = () => {
    console.log(
      Data.reduce((datelabel, data) => {
        datelabel = [...datelabel, data];
        return datelabel;
      }, [])
    );
    return {
      labels: Data.reduce((datelabel, data) => {
        datelabel = [...datelabel, data.Date];
        return datelabel;
      }, []),
      datasets: [
        {
          type: "bar",
          // label : "Increase",
          borderColor: "#0000FF",
          data: Data.map(
            (y) => Math.abs(y.Close - y.Open) + (2 * getLimit()) / 3
          ),
          backgroundColor: Data.map((val) => {
            if (val.Open > val.Close) {
              return color[0];
            } else {
              return color[1];
            }
          }),
        },
        {
          type: "line",
          // label : "Decrease",
          fill: {
            target: "origin",
            above: "#ccffff",
            below: "#ffffff",
          },
          borderColor: "#0000FF",
          backgroundColor: ["#0099ff"],
          pointRadius: Data.length < 62 && 5,
          tension: 0.1,
          data: Data.map((y) => y.Close),
        },
      ],
    };
  };

  return (
    
      <div className="advancechart" >
        <Chart className="chart" type="line" data={BarUserData()} options={options}></Chart>
      </div>
  
  );
};

export default Monthwisechart1;
