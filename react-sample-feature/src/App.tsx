import React from "react";
import "./App.css";
import Body from "./components/layout/body.component";
import Header from "./components/layout/header.component";

import MonsterMain from "./components/monster/monster-main";
// import CascadingDropdown from "./components/conditional-render/cascading-dropdown.component";
// import Hooks from "./components/hooks/hooks.component";
import JsonData from "./components/json/json-data.component";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
    // <div className="App">
    //  {/* <MonsterMain /> */}
    //  {/* <JsonData/> */}
    //  {/* <Hooks /> */}
    //  {/* <CascadingDropdown/> */}
    // </div>
  );
}

export default App;
