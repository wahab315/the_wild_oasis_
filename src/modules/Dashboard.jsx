import React from "react";
import Row from "../components/common/Row";
import Heading from "../components/common/Heading";
import DashboardFilter from "../components/ui/Dashboard/DashboardFilter";

const Dashboard = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
    </>
  );
};

export default Dashboard;
