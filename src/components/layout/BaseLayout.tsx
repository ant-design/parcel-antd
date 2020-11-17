import React from "react";
import Navigation from "../navigation/Navigation";

export interface BaseLayoutProps {}

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  console.log(props.children);
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default BaseLayout;
