import React from "react";
import { Link, Redirect, Route, Switch, withRouter } from "react-router-dom";
import UseCallbackComponent from "./useCallBack/useCallback.component";
import UseMemoComponent from "./useMemo/useMemo.component";

const Hooks = (props: any) => {
  const { match } = props;
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <ul className="nav bg-green">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={`/hooks/callback`}>
                CallBack
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/hooks/memo`}>
                Memo
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <Switch>
            <Redirect
              exact
              from={`${match.path}`}
              to={`${match.path}/callback`}
            />
            <Route
              path={`${match.path}/(callback)`}
              component={UseCallbackComponent}
            />
            <Route path={`${match.path}/(memo)`} component={UseMemoComponent} />
          </Switch>
        </div>
      </div>
      {/* <UseCallbackComponent /> */}
      {/* <UseMemoComponent /> */}
    </React.Fragment>
  );
};

export default withRouter(Hooks);
