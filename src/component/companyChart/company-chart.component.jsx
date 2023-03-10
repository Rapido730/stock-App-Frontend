import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Monthwisechart1 from "../chart/Monthwisechart1";

export const CompanyChart = () => {
  const CompanyName = useSelector(
    (state) => state.CompanyStockData.CurrentCompany
  );
  const CompanyChartData = useSelector(
    (state) => state.CompanyStockData[CompanyName]
  );
  const [ChartData, SetChartData] = useState(CompanyChartData);
  const [CurrentChartData, SetCurrentChartData] = useState(ChartData);

  useEffect(() => {
    SetChartData(CompanyChartData);
    SetCurrentChartData(CompanyChartData);
  }, [CompanyName]);

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

  return (
    <div className="Advance-chart">
      <Monthwisechart1 Data={CurrentChartData} />
      <button
        type="button"
        class="btn btn-outline-dark mx-2 mb-2"
        onClick={DayWiseDataChange1}
      >
        1D
      </button>
      <button
        type="button"
        class="btn btn-outline-dark mx-2 mb-2"
        onClick={DayWiseDataChange2}
      >
        5D
      </button>
      <button
        type="button"
        class="btn btn-outline-dark mx-2 mb-2"
        onClick={MonthWiseDataChange1}
      >
        1M
      </button>
      <button
        type="button"
        class="btn btn-outline-dark mx-2 mb-2"
        onClick={MonthWiseDataChange2}
      >
        3M
      </button>
      <button
        type="button"
        class="btn btn-outline-dark mx-2 mb-2"
        onClick={MonthWiseDataChange3}
      >
        6M
      </button>
      <button
        type="button"
        class="btn btn-outline-dark mx-2 mb-2"
        onClick={YearWiseDataChange1}
      >
        1Y
      </button>
      <button
        type="button"
        class="btn btn-outline-dark mx-2 mb-2"
        onClick={MaxData}
      >
        Max
      </button>
    </div>
  );
};
