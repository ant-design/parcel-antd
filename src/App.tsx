import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Demo1 from "./routes/demo1/demo1";
import Demo2 from "./routes/demo2/demo2";

export interface AppProp {}

const App: React.FC<AppProp> = () => {
  return (
    <>
      <BrowserRouter basename="redisprodash">
        <Switch>
          <Route
            path="/"
            component={() => {
              return (
                <BaseLayout>
                  <Route path="/demo1" component={Demo1}></Route>
                  <Route path="/demo2" component={Demo2}></Route>
                </BaseLayout>
              );
            }}
          ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
