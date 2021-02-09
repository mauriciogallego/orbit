import React, { Suspense } from "react";
import Spinner from "~/components/spinner/index";
import { Route, Switch } from "wouter";

const Filter = React.lazy(() => import("~/page/filter/index"));
const Home = React.lazy(() => import("~/page/home/index"));
const Router = () => (
  <Switch>
    <Suspense fallback={<Spinner />}>
      <Route path="/" component={Home} />
      <Route path="/filter" component={Filter} />
    </Suspense>
  </Switch>
);

export default Router;
