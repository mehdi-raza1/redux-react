import React from "react";
import Hoc from "./Hoc";

const ComponentHoc = (props) => {
  return (
    <div>
      <h2>Students</h2>
      <h3 className="text-lg">{props.num}</h3>
      <button className="btn bg-red-700 rounded-lg p-3" onClick={props.handleEvent}>Increase Number</button>
    </div>
  );
}

export default Hoc(ComponentHoc);
