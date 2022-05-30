import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  conatinerToQueue,
  removeFromContainer,
} from "../redux/action";
export const Container = () => {
  const data = useSelector((store) => store.container);
  const dispatch = useDispatch()
  const removeContainer = (val) => {
    const add = data.find((item, index) => item.id === +val);

    dispatch(removeFromContainer(val));
    dispatch(conatinerToQueue(add));
 
  };
  return (
    <div>
    
      <div id="container">
        {data?.map((item, index) => {
          return (
            <div>
              <div
                key={index}
                onClick={() => {
                  removeContainer(item.id);
                }}
                className="circle"
                style={{ backgroundColor: `${item?.color}` }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
