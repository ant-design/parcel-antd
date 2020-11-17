import React from "react";

const Demo1: React.FC<{}> = (props) => {
  return (
    <div>
      <p>current number: </p>
      {props.children ? props.children : null}
    </div>
  );
};
export default Demo1;
