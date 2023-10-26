import React, { memo } from "react";
import { ReactDOM } from "react";
import { HashRouter } from "react-router-dom";
import { useRouter } from "react-router-dom";
import { routes } from "./router";

const App = memo((props) => {
  //
  return (
    <>
      <AppHeader />
      <div>{useRouter(routes)}</div>
      <AppFooter />
    </>
  );
});
export default App;
