import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompanyChart } from "../companyChart/company-chart.component";
import BarLogo from "../../assests/bar-logo.svg";
import Candle from "../../assests/candle.svg";
import Box from "../../assests/box.svg";
import Setting from "../../assests/setting.svg";
import Cloud from "../../assests/cloud.svg";
import Zoom from "../../assests/zoom.svg";
import Camera from "../../assests/camera.svg";
import LinkDirector from "../../assests/link.svg";

import "./advance-chart.style.scss";
import { Set_Current_Company_Name } from "../../store/companydata/companydata.action";
export const AdvanceChart = () => {
  const dispatch = useDispatch();
  const [CompanyName, SetCompanyName] = useState("relianceData");

  const getCompanyName = () => {
    if (CompanyName === "ashokleyData") {
      return "Ashok Leyland";
    } else if (CompanyName === "eichermotData") {
      return "Eicher Motors";
    } else if (CompanyName === "ciplaData") {
      return "Cipla";
    } else if (CompanyName === "relianceData") {
      return "Reliance";
    } else if (CompanyName === "tatasteelData") {
      return "Tata Steel";
    }
  };

  useEffect(() => {
    dispatch(Set_Current_Company_Name(CompanyName));
  }, [CompanyName]);

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
    <div className="chart container border border-dark">
      <div class="container">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-1 my-4 ">
            <img className="resize mt-5" src={BarLogo}></img>
          </div>
          <div className="col-lg-5 col-md-5 col-5  my-4 ">
            <h1 class="font-weight-bold text-capitalize pt-5">
              {" "}
              Advanced Chart
            </h1>
          </div>
        </div>
        <hr class="w-100 mx-auto pt-2" />
        <div class="container">
          <h4>{getCompanyName()} NSE</h4>
          <div class="row">
            <ul class="nav ">
              <li class="active ml-3 font-weight-bold dropdown">
                <span
                  class="dropdown-toggle text-decoration-none"
                  data-toggle="dropdown"
                >
                  <h3 className="font-weight-bold">
                    {getCompanyName()}
                    <span class="caret"></span>
                  </h3>
                </span>

                <ul class="dropdown-menu">
                  <li>
                    <span onClick={CompanyChangeToReliance}>Reliance</span>
                  </li>

                  <li>
                    <span onClick={CompanyChangeToTata}>TATA Steel</span>
                  </li>
                  <li>
                    <span onClick={CompanyChangeToAshokley}>Ashok Leyland</span>
                  </li>
                  <li>
                    <span onClick={CompanyChangeToCipla}>Cipla</span>
                  </li>

                  <li>
                    <span onClick={CompanyChangeToEiecher}>Eicher Motors</span>
                  </li>
                </ul>
              </li>

              <div class="row ml-2">
                <li class="ml-2">
                  <span class="text-decoration-none font-weight-bold ">
                    <h3>15m</h3>
                  </span>
                </li>
                <li class="ml-2">
                  <span class="text-decoration-none font-weight-bold ">
                    <h3>30m</h3>
                  </span>
                </li>

                <li class="ml-2">
                  <span class="text-decoration-none font-weight-bold ">
                    <h3>1h</h3>
                  </span>
                </li>
                <li class="ml-2">
                  <span class="text-decoration-none font-weight-bold ">
                    <h3>12h</h3>
                  </span>
                </li>
              </div>
            </ul>

            <div class="ml-auto">
              <div className="row ">
                <img className="resize ml-3" src={BarLogo}></img>

                <img className="resize ml-3" src={Candle}></img>

                <img className="resize ml-3" src={Box}></img>
                <img className="resize ml-3" src={Cloud}></img>
                <img className="resize ml-3" src={Setting}></img>
                <img className="resize ml-3" src={Zoom}></img>
                <img className="resize ml-3" src={Camera}></img>
                <img className="resize ml-3" src={LinkDirector}></img>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <CompanyChart />
        </div>
      </div>
    </div>
  );
};
