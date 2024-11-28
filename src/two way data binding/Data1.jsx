import React, { useState } from "react";

const Data1 = () => {
  let [x, setX] = useState(100);
  return (
    <div>
      <p>{x}</p>
      <button onClick={() => setX(200)}>➕</button>
      <br />
      <br />
      <input
        type="text"
        value={x}
        onChange={(e) => {
          let ele = e.target.value;
          setX(ele);
        }}
      />
    </div>
  );
};
export default Data1;
