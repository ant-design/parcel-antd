import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";

export interface AppProp {}

const App: React.FC<AppProp> = () => {
  return (
    <>
      <BrowserRouter basename="redisprodash">
        <Switch>{recursionRoutes(routes)}</Switch>
      </BrowserRouter>
    </>
  );
};

const recursionRoutes = (routes: any) => {
  return routes.map((route: any, index: any) => {
    if (!route.children) {
      return (
        <Route
          key={index}
          path={route.path}
          component={route.component}
        ></Route>
      );
    } else {
      const Comp = route.component;
      return (
        <Route
          key={index}
          path={route.path}
          children={() => {
            return (
              <Switch>
                <Comp>{recursionRoutes(route.children)}</Comp>
              </Switch>
            );
          }}
        ></Route>
      );
    }
  });
};

export default App;
