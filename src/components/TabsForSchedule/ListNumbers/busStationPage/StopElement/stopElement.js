import React from "react";


const StopElement = (props) =>{
  var data = props.getStopPointsMethod();
  let StopList = data.map((el)=>{
    return (
        <li>{el}</li>
    );
  });

  return(
    <div>
      <ol className="list-counter-circle">
        {StopList}
      </ol>
    </div>
  );
}
export default StopElement;
