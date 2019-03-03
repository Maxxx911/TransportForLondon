import React from "react";
import "./busStation.css";
import StopElement from "./StopElement/stopElement";
import {rerender} from "../../../../index.js";

const BusStation = (props) =>{
  const getCommonNameStation = (stop_data) =>{

    for(var i =0;i<stop_data.length;i++){
      if(stop_data[i].stopType==="NaptanPublicBusCoachTram" )
         props.addStopPointMethod(stop_data[i].commonName + "(" + stop_data[i].indicator + ")");
    }
  }

   let createdListStation = () =>{
     props.clearStopPointMethod();
     const api_url =  fetch(`https://api.tfl.gov.uk/line/${props.st.match.params.id}/stoppoints`).
     then(response => response.json()).
     then(data =>getCommonNameStation(data));
     debugger;
   }



  return(
    <div className="container">
        <buton className="btn btn-primary" onClick={createdListStation}>Show stop points </buton>
        <StopElement getStopPointsMethod = {props.getStopPointsMethod} />
    </div>
  );
}
export default BusStation;
