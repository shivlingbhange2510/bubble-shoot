import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { removeFromQueue, addCircleInConatiner } from "../redux/action";

export const ShootBtn = () => {
  const [val, setVal] = useState(0);
  const [error, setError] = useState(false);
  const data = useSelector((store) => store.circleData);
  const dispatch = useDispatch();
  const hadleShoot = () => {
    const updateData = data.filter((item, idx) => item.id !== +val);
    const conatinerItem = data.find((item, idx) => item.id === +val);
    const checkId = data.find((item, idx) => item.id === +val);

    if (checkId === undefined) {
      setError(!error);
    }
    if (checkId) {
      dispatch(removeFromQueue(updateData));
      dispatch(addCircleInConatiner(conatinerItem));
      setVal("");
    }
    console.log("conatinerItem ", conatinerItem);
  };
  useEffect(() => {
    setError(false);
  }, [val]);
  return (
    <>
    <div id="shoot-box">
      
        <input
          type="number"
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
        <button id='shoot-btn' onClick={hadleShoot}>shoot </button>
       

    </div>
     <p className="err-msg">
     {val <= 5 && val > 0 && error && "this number already shoot"}
     {val > 5 && `please enter number between 1 to 5`}
   </p>
   </>
  );
};
