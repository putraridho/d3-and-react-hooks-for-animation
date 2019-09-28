import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Axis = ({ scale, orientation, transform }) => {
  let ref = useRef(null);

  useEffect(() => draw(), []);

  const draw = () => {
    let axisFunction;
    switch (orientation) {
      case "Bottom":
        axisFunction = d3.axisBottom;
        break;
      case "Left":
        axisFunction = d3.axisLeft;
        break;
      case "Right":
        axisFunction = d3.axisRight;
        break;
      case "Top":
        axisFunction = d3.axisTop;
        break;
      default:
        break;
    }

    d3.select(ref.current)
      .attr("transform", transform)
      .call(axisFunction(scale));
  };

  return <g ref={ref} />;
};

export default Axis;