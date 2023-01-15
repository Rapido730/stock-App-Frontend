import { useEffect, useState } from "react";
import { Data } from "../../data.js";
import { CompanyChart } from "../companyChart/company-chart.component";

export const AdvanceChart = ({ CompanyStockData }) => {
  const [CompanyChartData, SetCompanyChartData] = useState(CompanyStockData);
  const [ChartData, SetChartData] = useState([]);
  const [CompanyName, SetCompanyName] = useState("relianceData");

  useEffect(() => {
    SetCompanyChartData(CompanyStockData);
  }, []);

  useEffect(() => {
    const ChartDataChangeHandler = () => {
      SetChartData(CompanyStockData[CompanyName]);
      console.log("called");
      // console.log(CompanyStockData["ashokleyData"])
      // console.log(ChartData)
    };

    ChartDataChangeHandler();
  }, [CompanyName,CompanyChartData]);

  const CompanyChangeToTata = () => {
    SetCompanyName("tatasteelData");
  };

  const CompanyChangeToReliance = () => {
    SetCompanyName("relianceData");
  };

  const CompanyChangeToCipla = () => {
    SetCompanyName("ciplaData");
  };

  const CompanyChangeToEiecher = () => {
    SetCompanyName("eichermotData");
  };

  const CompanyChangeToAshokley = () => {
    SetCompanyName("ashokleyData");
  };

  return (
    <div className="chart container">
      <div className="buttons">
        <button onClick={CompanyChangeToTata}>Tata Steel</button>
      </div>
      <div className="buttons">
        <button onClick={CompanyChangeToReliance}>Reliance</button>
      </div>
      <div className="buttons">
        <button onClick={CompanyChangeToCipla}>cipla</button>
      </div>
      <div className="buttons">
        <button onClick={CompanyChangeToEiecher}>eichermot</button>
      </div>
      <div className="buttons">
        <button onClick={CompanyChangeToAshokley}>ashokley</button>
      </div>
      <h2>{CompanyName}</h2>
      <CompanyChart data={ChartData} />
    </div>
  );
};
