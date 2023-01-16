import React from "react";
import './Niftyshow.css';

export const Niftyshow =(props) =>{

  return(

    <div class="outer">
    <div class="outer-div">
    <div class="inner-div">
        <div class="single-inner-div">
            <p class="left-child" >Open</p>
            <p >{props.CurrentNiftyValues.TodaysData.Open.toFixed(2)} </p>
         </div>
         <div class="single-inner-div">
            <p class="left-child">Previous Close</p>
            <p > {props.CurrentNiftyValues.TodaysData.Close.toFixed(2)}</p>
         </div>
         <div class="single-inner-div">
            <p class="left-child">Day High</p>
            <p >{props.CurrentNiftyValues.TodaysData.High.toFixed(2)}</p>
         </div>
    </div>
    <div class="inner-div">
        <div class="single-inner-div">
            <p class="left-child">Day Low</p>
            <p >{props.CurrentNiftyValues.TodaysData.Low.toFixed(2)}</p>
         </div>
         <div class="single-inner-div">
            <p class="left-child" >52 Week High</p>
            <p > {props.CurrentNiftyValues.YearHigh.toFixed(2)}</p>
         </div>
         <div class="single-inner-div">
            <p class="left-child">52 Week Low</p>
            <p >{props.CurrentNiftyValues.YearLow.toFixed(2)}</p>
         </div>
    </div>
 </div>
 </div>
  );
}