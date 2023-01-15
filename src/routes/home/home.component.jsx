import "./home.styles.scss";
import { NiftyOverview } from "../../component/nifty-overview/nifty-overview.component";
import { NiftyStatus } from "../../component/nifty-status/nifty-status.component";
import { NiftyIndex } from "../../component/nifty-index-container/nifty-index.component";
import { AdvanceChart } from "../../component/advancechart/advance-chart.component";
export const Home = () => {
  return (
    <div className="home-container">
      <NiftyStatus/>
      <AdvanceChart/>
    </div>
  );
};
