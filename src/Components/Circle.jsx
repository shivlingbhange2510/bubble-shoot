import React from "react";
import { useSelector } from "react-redux";

export const Circle = () => {
  const data = useSelector((store) => store.circleData);
  console.log("data", data);

  return (
    <div>
      <h4 style={{ color: "#ee5701" }}>Circle</h4>
      <div className='circle-main'>
      {data?.map((item, index) => {
        return (
          
            <div
              key={item.id}
              className="circle"
              id="circle-area"
              style={{ backgroundColor: "" + item.color }}
            ></div>
        );
      })}
      </div>
    </div>
  );
};
