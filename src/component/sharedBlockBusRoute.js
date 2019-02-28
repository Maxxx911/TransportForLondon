import React from "react";
import SharedTableElements from "./sharedTableElements";

const SharedBlockBusRoute = (props) =>{

  let BusElements = props.numberProps.map( el =>
  {
    return (
      <button class="btn btn-primary btn-block" name = {el} >{el}</button>
    );
  });

  return (
    <div ClassName="container">
        {BusElements}
    </div>
  );
}


export default SharedBlockBusRoute;
