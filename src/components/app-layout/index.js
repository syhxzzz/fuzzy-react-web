import React, { memo } from "react";
import AppFooter from "../app-footer";
import AppHeader from "../app-header";
import PlayBar from "../play-bar";

export default memo(function AppLayout({ children }) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
      <PlayBar />
    </>
  );
});
