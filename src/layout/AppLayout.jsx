import React from "react";
import { AppLayoutStyle } from "../styles/layout";
import Sidebar from "../components/common/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <AppLayoutStyle>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </AppLayoutStyle>
    </>
  );
};

export default AppLayout;
