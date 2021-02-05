import CardsProvider from "context/CardsProvider";
import Layout from "layout/Layout";
import CardsPage from "pages/Cards";
import Error from "pages/Error";
import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRoutes: React.FC<unknown> = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <CardsProvider>
              <CardsPage />
            </CardsProvider>
          </Layout>
        </Route>
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
