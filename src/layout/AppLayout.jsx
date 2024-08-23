import React from "react";
import { AppLayoutStyle, Main, Container } from "../styles/layout";
import Sidebar from "../components/common/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <AppLayoutStyle>
        <Sidebar />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </AppLayoutStyle>
    </>
  );
};

export default AppLayout;
