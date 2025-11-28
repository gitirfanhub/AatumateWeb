import React from "react";
import MainNavigation from "./Navigation/MainNavigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
