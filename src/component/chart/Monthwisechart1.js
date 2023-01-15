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
  var oneThirdYear = false;

  useEffect(() => {
    if (Data.length >= 400) {
      oneThirdYear = true;
    }
    BarUserHandler();
  }, [Data]);

  const [show_label_access, Set_show_label] = useState([]);
  const BarUserHandler = async () => {
    let NewLabel = [];
    let DateLabel = [];
    Data.forEach((x) => {
      const date = new Date(x.Date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      DateLabel = [...DateLabel, x.Date];
      if (Data.length < 70) {
        NewLabel.includes(x.Date) && (NewLabel = [...NewLabel, x.Date]);
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
      Set_show_label(DateLabel);
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
        console.log(CurrentShowLabel);
        console.log(NewLabel);
        Set_show_label(CurrentShowLabel);
      } else {
        Set_show_label(NewLabel);
      }
    }
    const NewBarUserData = {
      labels: DateLabel,
      datasets: [
        {
          type: "bar",
          // label : "Increase",
          borderColor: "#0000FF",
          data: Data.map(
            (y) =>
              Math.abs(y.Close - y.Open) + (Data.length > 400 ? 600 : 2000) + 50
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

    setBaruserData(NewBarUserData);
  };

  const color = ["#FF0000", "#006600"];

  const [BaruserData, setBaruserData] = useState({ label: [], datasets: [] });

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
        min: Data.length > 400 ? 600 : 2000,
        //   max :
        //   stepSize:
        position: "right",
      },
      x: {
        display: false,
      },
      secondXAxis: {
        axis: "x",
        labels: show_label_access,
      },
    },
  };

  return (
    <div>
      <h1>Charts in React</h1>
      <div className="advancechart">
        <Chart type="line" data={BaruserData} options={options}></Chart>
      </div>
    </div>
  );
};

export default Monthwisechart1;
