import "./home.styles.scss";
import { NiftyStatus } from "../../component/nifty-status/nifty-status.component";
import { AdvanceChart } from "../../component/advancechart/advance-chart.component";
import { useEffect, useState } from "react";
import { getMethod } from "../../utils/backend/api";
import { useDispatch } from "react-redux";

import { Set_Company_data } from "../../store/companydata/companydata.action";
import { Set_Nifty_Index_Data } from "../../store/Niftydata/niftydata.action";

export const Home = () => {
  const dispatch = useDispatch();

  const getNiftyIndexData = async () => {
    const NSEdata = await getMethod("/sensexApi/nse");
    const BSEdata = await getMethod("/sensexApi/bse");
    return { NSEdata: NSEdata.data, BSEdata: BSEdata.data };
  };

  const getCompanyStockData = async () => {
    let ciplaData = await getMethod("/companyApi/cipla");
    const tatasteelData = await getMethod("/companyApi/tatasteel");
    const relianceData = await getMethod("/companyApi/reliance");
    const eichermotData = await getMethod("/companyApi/eichermot");
    const ashokleyData = await getMethod("/companyApi/ashokley");
    return {
      ciplaData: ciplaData.data,
      tatasteelData: tatasteelData.data,
      relianceData: relianceData.data,
      eichermotData: eichermotData.data,
      ashokleyData: ashokleyData.data,
    };
  };

  useEffect(() => {
    const getAllData = async () => {
      const NiftyIndexData = await getNiftyIndexData();
      const companyStockData = await getCompanyStockData();
      dispatch(Set_Company_data(companyStockData));
      dispatch(Set_Nifty_Index_Data(NiftyIndexData));
      console.log(companyStockData);
    };

    getAllData();
  }, []);

  return (
    <div className="home-container">
      <NiftyStatus />
      <AdvanceChart />
    </div>
  );
};
