import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompanyChart } from "../companyChart/company-chart.component";
import { Set_Current_Company_Name } from "../../store/companydata/companydata.action";
export const AdvanceChart = () => {
  const dispatch = useDispatch();
  const [CompanyName, SetCompanyName] = useState("relianceData");

  const getCompanyName = () => {

    if (CompanyName === "ashokleyData") {
      return "Ashok Leyland"
    } else if (CompanyName === "eichermotData") {
      return "Eicher Motors"
    } else if (CompanyName === "ciplaData") {
      return "Cipla"
    } else if (CompanyName === "relianceData") {
      return "Reliance"
    } else if (CompanyName === "tatasteelData") {
      return "Tata Steel"
    }
  }

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
        <h1 class="font-weight-bold text-capitalize pt-5">Advanced Chart</h1>
        <hr class="w-100 mx-auto pt-2" />
        <div class="container">
          <h5>{getCompanyName()}   NSE</h5>
          <div class="row">
            <ul class="nav nav-tabs ">
              <li class="active ml-3 font-weight-bold dropdown">
                <span
                  class="dropdown-toggle text-decoration-none"
                  data-toggle="dropdown"
                >
                  {getCompanyName()}
                  <span class="caret"></span>
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
                  <span class="text-decoration-none">1h</span>
                </li>
                <li class="ml-2">
                  <span>7h</span>
                </li>

                <li class="ml-2">
                  <span>12h</span>
                </li>
                <li class="ml-2">
                  <span>20h</span>
                </li>
              </div>

              <div class="row ml-3">
                <li class="ml-2">
                  <span onClick={CompanyChangeToTata}>TATA</span>
                </li>
                <li class="ml-2">
                  <a href="#">Menu 3</a>
                </li>

                <li class="ml-2">
                  <a href="#">Menu 2</a>
                </li>

                <li class="dropdown ml-2">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    Menu 1 <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <span onClick={CompanyChangeToTata}>TATA</span>
                    <li>
                      <a href="#">Submenu 1-2</a>
                    </li>
                    <li>
                      <a href="#">Submenu 1-3</a>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>

            <div class="ml-5">
              <button type="button" class="btn btn-outline-dark mx-2 mb-2">
                SQL
              </button>
              <button type="button" class="btn btn-outline-dark mx-2 mb-2">
                SQL
              </button>
              <button type="button" class="btn btn-outline-dark mx-2 mb-2">
                SQL
              </button>
              <button type="button" class="btn btn-outline-dark mx-2 mb-2">
                SQL
              </button>
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
