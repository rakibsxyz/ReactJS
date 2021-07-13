import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// import CascadingDropdown from "../conditional-render/cascading-dropdown.component";
// import Hooks from "../hooks/hooks.component";
// import JsonData from "../json/json-data.component";
// import MonsterMain from "../monster/monster-main";

import LeftNav from "./left-nav.component";
import PageNotFound from "../404";

const CascadingDropdown = lazy(
  () => import("../conditional-render/cascading-dropdown.component")
);
const Hooks = lazy(() => import("../hooks/hooks.component"));
const JsonData = lazy(() => import("../json/json-data.component"));
const MonsterMain = lazy(() => import("../monster/monster-main"));

const Body = (props: any) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <LeftNav />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Switch>
            <Redirect exact from={"/"} to={"/monster"} />
            <Suspense fallback={<p>loading...</p>}>
              <Route path="/(monster|user)" component={MonsterMain} />
              <Route path="/(json-data)" component={JsonData} />
              <Route path="/(hooks)" component={Hooks} />
              <Route
                path="/(cascading-dropdown)"
                component={CascadingDropdown}
              />
            </Suspense>

            <Route path="**" component={PageNotFound} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Body;
