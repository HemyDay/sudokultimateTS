// --- IMPORTS --- //

// LIBRARIES
import React from "react";
// STYLE 
import "./Cell_Element.css";
// FUNCTIONS
import generateValueDisplay from "../Functions/generateValueDisplay";     // Generates the value displayed inside the cell

// --- COMPONENT --- //
const Cell_Element = (props:any) => {

  // RETURN
  return (
    <div 
      className="cell"
      data-col={parseInt(props.CELL[0][1])}
      data-row={parseInt(props.CELL[0][0])}
    >
      {generateValueDisplay(props.CELL[1])}
    </div>
  );
}

export default Cell_Element;
