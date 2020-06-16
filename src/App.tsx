import React from "react";
import { Button } from "antd";

import "./style/index.less";

interface IApp {
  title: string;
}

const App: React.FC<IApp> = ({ title }) => {
  return (
    <>
      <p className={"foo"}>Hi! {title}</p>
      <Button type="primary" href={"https://ant.design/index-cn"}>
        Antd Docs
      </Button>
      &nbsp;
      <Button type="primary" href={"https://parceljs.org/"}>
        Parcel Docs
      </Button>
    </>
  );
};

export default App;
