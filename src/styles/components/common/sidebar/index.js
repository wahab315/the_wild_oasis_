import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarStyle = styled.div`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  /* 
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem; */
  text-align: center;
  & > * {
    &:not(:first-child, :last-child) {
      margin-bottom: 0.8rem;
    }
  }
`;

export const SidebarItemStyle = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export const Logo = styled.img`
  height: 9.6rem;
  width: 9.6rem;
  background-color: green;
  margin-bottom: 3.2rem;
`;
