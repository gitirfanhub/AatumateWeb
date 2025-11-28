import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinksWrapper = styled.div`
  margin: 0;
  padding: 0;
  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: flex;
      margin: 1rem;
    }
    a {
      padding: 0.5rem;
      color: ${({ theme }) => theme.colors.tertiary};
      font: ${({ theme }) => theme.fontAppearance.contentMedium};
      transition: all 0.5s ease;
      &:hover,
      &:active,
      .active {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.backgroundGrey};
        border-radius: 4px;
      }
    }
    .active {
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 4px;
    }
  }

  @media (min-width: 900px) {
    .nav-links {
      flex-direction: row;
    }

    .nav-links li {
      margin: 0 0.5rem;
    }

    .nav-links a {
      color: ${({ theme }) => theme.colors.tertiary};
      font: ${({ theme }) => theme.fontAppearance.contentMedium};
      text-decoration: none;
    }
  }
`;

const NavLinks = () => {
  const token = localStorage.getItem("jwt_token");
  return (
    <NavLinksWrapper>
      <ul className="nav-links">
        <li className="one">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="two">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="three">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li className="four">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to={token ? "/cart" : "/login"}
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </NavLinksWrapper>
  );
};

export default NavLinks;
