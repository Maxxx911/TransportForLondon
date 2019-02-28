import React from "react";

const SheredTableElements = (props)=>{

  let TableElement = props.arrayElements.map(el=>{
    return(
      <ul>
        <li>el</li>
      </ul>
    );
  });

  return(
  <div>
    {TableElement}
  </div>
  );
}
export default SheredTableElements;
