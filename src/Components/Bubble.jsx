import React from "react";
import { useSelector } from "react-redux";

export const Buble = () => {
  const data = useSelector((store) => store.circleData);

  return (
    <div>
      <h4 style={{ color: "#ee5701" }}>Bubble</h4>
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
