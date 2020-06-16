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
      <Button type="primary" href={"https://ant.design/components/button-cn/"}>
        Ant Design
      </Button>
    </>
  );
};

export default App;
