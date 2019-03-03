import React from "react";
import {Route, NavLink} from "react-router-dom";
import BusStation from "./busStationPage/busStation";
import "./listNumber.css";

const ListNumbers=(props)=>{
  let NumberBlock = props.testArray.map((el)=>{
    return (
        <NavLink className="btn btn-primary numberBlock text-white" to = {`timetables/stoppoints/${el}`} >{el}</NavLink>
      );
  });
  return (
    <div>
    <br/>
      {NumberBlock}

    </div>
  );
}
export default ListNumbers;
