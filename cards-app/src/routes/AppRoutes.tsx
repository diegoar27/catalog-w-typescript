import CardsProvider from "context/CardsProvider";
import CardsPage from "pages/Cards";
import Error from "pages/Error";
import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRoutes: React.FC<unknown> = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CardsProvider>
            <CardsPage />
          </CardsProvider>
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
