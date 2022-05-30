import React,{useState, useEffect} from 'react'
export const Circle = ({circleData}) => {
    const[data, setData]= useState(circleData)
    // const[d]
    useEffect(()=>{
        setData(circleData)
    },[])

const removeContainer=(id)=>{
    console.log("removed item : ", id)
}
  return (
    <div>
      Circle
      {data.map((item, index) => {
        return (
          <>
            <button
             key={index}
            onClick={()=>{removeContainer(item.id)}}
            className="circle"
            style={{ backgroundColor: `${item.color}` }}
            ></button>
          </>
        );
      })}
    </div>
  );
};
