import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid  mt-0 ">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
