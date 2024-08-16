import React from "react";
import { SidebarItemStyle } from "../../../styles/components/common/sidebar";

const SidebarItem = (props) => {
  return (
    <SidebarItemStyle to={props.to}>
      {<props.icon />}
      <span>{props.name}</span>
    </SidebarItemStyle>
  );
};

export default SidebarItem;
