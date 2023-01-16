import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const { NavLink } = require("react-router-dom");

const InitialNiftyValues = {
  TodaysData: { Open: 0, Low: 0, High: 0, Close: 0 },
  CurrentNiftyIndex: 0,
  CurrentNiftyProfit: 0,
  CurrentNiftyProfitPercentage: 0,
  YearHigh: 0,
  YearLow: 10000,
  DayHigh: 0,
  DayLow: 0,
};

export const NiftyStatus = () => {
  const NiftyData = useSelector((state) => state.NiftyData);

  const [CurrentNiftyValues, SetCurrentNiftyValues] =
    useState(InitialNiftyValues);

  useEffect(() => {
    const GetIndexData = () => {
      let data = NiftyData.BSEdata[0];
      let YearHigh = 0;
      let YearLow = 100000;
      NiftyData.BSEdata.filter((data) => {
        var d1 = new Date(data.Date);
        var d2 = new Date("2023-01-12");
        var diff = d2.getTime() - d1.getTime() + 1;
        var daydiff = (diff / (24 * 60 * 60 * 1000)).toFixed(0);
        return daydiff < 365;
      }).forEach((NiftyData) => {
        data.Date < NiftyData.Date ? (data = NiftyData) : (data = data);

        YearHigh = Math.max(YearHigh, NiftyData.High);
        YearLow = Math.min(YearLow, NiftyData.Low);
      });

      return { data, YearHigh, YearLow };
    };
    if (NiftyData.BSEdata.length !== 0) {
      const { data, YearHigh, YearLow } = GetIndexData();
      const Percentage = ((data.Close - data.Open) / data.Open) * 100;
      // console.log(data);
      SetCurrentNiftyValues({
        ...CurrentNiftyValues,
        TodaysData: data,
        CurrentNiftyIndex: data.Close,
        CurrentNiftyProfit: data.Close - data.Open,
        YearHigh,
        YearLow,
        DayHigh: data.High,
        DayLow: data.Low,
        CurrentNiftyProfitPercentage: Percentage,
      });
      // SetCurrentNiftyIndex(data.Close);
      // SetCurrentNiftyProfit(data.Close - data.Open);
    }
  }, [NiftyData]);

  return (
    <div>
      <div className="container">
        <ul className="nav nav-tabs ">
          <li className="active ml-3">
            <a href="/">NSE</a>
          </li>

          <li className="ml-3">
            <a href="/">Future</a>
          </li>
          <li className="ml-3">
            <a href="/">Options</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <h1>NIFTY 50</h1>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12  my-4">
            <h1>{CurrentNiftyValues.CurrentNiftyIndex.toFixed(2)}</h1>

            <h3 className="text-success">
              <i className="fa-solid fa-arrow-up"></i>
              {Math.abs(CurrentNiftyValues.CurrentNiftyProfit.toFixed(2))} (
              {Math.abs(
                CurrentNiftyValues.CurrentNiftyProfitPercentage.toFixed(2)
              )}
              %)
            </h3>
          </div>

          <div className="col-lg-4 col-md-4 col-12  my-4">
            <h3>DAY RANGE</h3>

            <h2>
              YearHigh = {CurrentNiftyValues.YearHigh.toFixed(2)} YearLow =
              {CurrentNiftyValues.YearLow.toFixed(2)}
            </h2>

            <h2>
              DayHigh = {CurrentNiftyValues.DayHigh.toFixed(2)} DayLow =
              {CurrentNiftyValues.DayLow.toFixed(2)}
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="nav nav-tabs ">
          <li className="active ml-3">
            <a href="/">OVERVIEW</a>
          </li>

          <li className="ml-3">
            <a href="/">CHART</a>
          </li>
          <li className="ml-3">
            <a href="/">TECHNICALS</a>
          </li>

          <li className="ml-3">
            <a href="/">NEWS</a>
          </li>
          <li className="ml-3">
            <a href="/">CONTRIBUTION</a>
          </li>

          <li className="ml-3">
            <a href="/">COMPONENTS</a>
          </li>
          <li className="ml-3">
            <a href="/">FORUM</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12  my-4">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-3  my-4  ">
                <h4>open</h4>
                <h4>open</h4>
                <h4>Day High</h4>
              </div>

              <div className="col-lg-3 col-md-3 col-3  my-4  ">
                <h4>{CurrentNiftyValues.TodaysData.Open.toFixed(2)}</h4>
                <h4>{CurrentNiftyValues.TodaysData.Open.toFixed(2)}</h4>
                <h4>{CurrentNiftyValues.TodaysData.High.toFixed(2)}</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12  my-4">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-3  my-4 ">
                <h4>DayLow</h4>
                <h4>52 Week High</h4>
                <h4>52 Week Low</h4>
              </div>
              <div className="col-lg-3 col-md-3 col-3  my-4  ">
                <h4>{CurrentNiftyValues.TodaysData.Low.toFixed(2)}</h4>
                <h4>{CurrentNiftyValues.YearHigh.toFixed(2)}</h4>
                <h4>{CurrentNiftyValues.YearLow.toFixed(2)}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
