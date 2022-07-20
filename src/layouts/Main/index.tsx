import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// import Header from "./Header";
import styles from "./styles.module.less";
// import ScrollToTop from "react-scroll-up";
import ScrollToTop from "react-scroll-to-top";
const Main = () => {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.mainContainer}>
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop smooth color="#2154cf"/>
      
      {/* <a className="scroll-to-top" href="#root">
        <span className="fas fa-angle-double-up"></span>
      </a> */}
      
    </>
  );
};

export default Main;
