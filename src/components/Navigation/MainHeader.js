import React from "react";
import styled from "styled-components";

const MainHeaderWrapper = styled.header`
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 5rem;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
    padding: 0 3rem;
    z-index: 5;
    box-sizing: border-box;
  }
  main {
    margin-top: 5rem;
  }
  @media (max-width: 1040px) {
    .main-header {
      justify-content: space-between;
      padding: 0 1rem;
    }
  }
`;

const MainHeader = (props) => {
  return (
    <MainHeaderWrapper>
      <header className="main-header">{props.children}</header>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
