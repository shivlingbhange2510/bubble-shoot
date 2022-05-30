import React from "react";
import { Circle } from "./Circle";
import { ShootBtn } from "./ShootBtn";
import { Container } from "./Container";
export const Index = () => {
  return (
    <div className="main">
      <div>
        <Container />
      </div>
      <div>
        <Circle />
      </div>
      <div>
        <ShootBtn />
      </div>
    </div>
  );
};
