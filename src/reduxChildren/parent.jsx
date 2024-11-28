import Counter from "../Redux/counter/counter.jsx";
import React from "react";
import Ref1 from "../useref/Ref1.jsx";
import { Count } from "../conditionalRendering/count";

const Parent = () => {
  return (
    <>
      <Ref1/>
      <Counter></Counter>
      <Count></Count>
    </>
  );
};

export default Parent;
