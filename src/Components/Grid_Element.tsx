// --- IMPORTS --- //

// LIBRARIES
import React, { useState } from "react"
// STYLE 
import "./Grid_Element.css";
// COMPONENTS
import Cell_Element from "./Cell_Element";

// DATA
import LEVEL_0 from "../Data/LEVEL_0.json"
import LEVEL_1 from "../Data/LEVEL_1.json"

const Grid_Element = () => {

  const [LEVEL, setLEVEL] = useState(LEVEL_0)

  return (
    <section className="game_grid">
      {Object.entries(LEVEL.cells).map((cell) => {
        {return (
          <Cell_Element
            key={cell[0]}
            CELL={cell}
            LEVEL={LEVEL}
          />
        )}
      })}
    </section>
    
  );
}

export default Grid_Element;