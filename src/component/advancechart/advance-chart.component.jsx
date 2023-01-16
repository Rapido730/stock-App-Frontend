import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompanyChart } from "../companyChart/company-chart.component";
import { Set_Current_Company_Name } from "../../store/companydata/companydata.action";
export const AdvanceChart = () => {
  const dispatch = useDispatch();
  const [CompanyName, SetCompanyName] = useState("relianceData");

  useEffect(()=> {
    dispatch(Set_Current_Company_Name(CompanyName));
  },[CompanyName])

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
      <CompanyChart />
    </div>
  );
};
