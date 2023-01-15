import "./home.styles.scss";
import { NiftyStatus } from "../../component/nifty-status/nifty-status.component";
import { AdvanceChart } from "../../component/advancechart/advance-chart.component";
import { useEffect, useState } from "react";
import { getMethod } from "../../utils/backend/api";
export const Home = () => {
  const [NiftyIndexData, SetNiftyIndexData] = useState({});
  const [CompanyStockData,SetCompanyStockData] = useState({});

  const getNiftyIndexData = async () => {
    const NSEdata = await getMethod("/sensexApi/nse");
    const BSEdata = await getMethod("/sensexApi/bse");
    return { NSEdata:NSEdata.data, BSEdata:BSEdata.data };
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
      SetNiftyIndexData(await getNiftyIndexData());
      SetCompanyStockData(await getCompanyStockData());
    };

    getAllData();
  }, []);

  useEffect(()=>{

  },[NiftyIndexData,CompanyStockData])

  console.log(NiftyIndexData)
  return (
    <div className="home-container">
      <NiftyStatus NiftyData={NiftyIndexData}/>
      <AdvanceChart CompanyStockData={CompanyStockData} />
    </div>
  );
};
