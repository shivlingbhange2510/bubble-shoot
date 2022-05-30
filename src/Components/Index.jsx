import React from "react";
import { Buble } from "./Bubble";
import { ShootBtn } from "./ShootBtn";
import { Container } from "./Container";
export const Index = () => {
  return (
    <div className="main">
      <div>
        <Container />
      </div>
      <div>
        <Buble />
      </div>
      <div>
        <ShootBtn />
      </div>
    </div>
  );
};
