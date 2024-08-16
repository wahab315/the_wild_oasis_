import React from "react";
import { Logo, SidebarStyle } from "../../../styles/components/common/sidebar";
import SidebarItem from "./SidebarItem";
import routesData from "../../../data/routesData";

const Sidebar = () => {
  return (
    <>
      <SidebarStyle>
        <Logo src="logo.png" />
        {routesData.map((el) => (
          <SidebarItem
            to={el.link}
            icon={el.icon}
            name={el.name}
            key={el.name}
          />
        ))}
      </SidebarStyle>
    </>
  );
};

export default Sidebar;
