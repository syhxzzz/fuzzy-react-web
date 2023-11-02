import React, { memo } from "react";
import AppFooter from "../app-footer";
import AppHeader from "../app-header";

export default memo(function AppLayout({ children }) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
});
