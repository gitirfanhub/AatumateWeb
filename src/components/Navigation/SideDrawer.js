import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const SideDrawerWrapper = styled.div`
  .side-drawer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100vh;
    width: 60%;
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
  .slide-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .slide-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms, transform 500ms;
  }
  .slide-exit {
    opacity: 1;
  }
  .slide-exit-active {
    opacity: 1;
    transform: translateX(-100%);
    transition: opacity 500ms, transform 500ms;
  }
  .main-navigation__drawer-nav {
    height: 100%;
    .customer-location {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;
      position: relative;
      padding: 1rem;
      .location {
        font: ${({ theme }) => theme.fontAppearance.contentLight};
      }
    }
    .car-details {
      display: flex;
      align-items: center;
      gap: 10px;
      position: relative;
      padding: 1rem;

      &::after {
        content: "";
        position: absolute;
        top: 5px;
        width: 1px;
        height: 35px;
        background-color: ${({ theme }) => theme.colors.primary};
      }

      &::after {
        right: -5px;
      }
      img {
        width: 50px;
        height: auto;
      }
      .car-name {
        font: ${({ theme }) => theme.fontAppearance.contentLight};
        .car-model {
          font: ${({ theme }) => theme.fontAppearance.defaultLight};
        }
      }
    }
    .add-vehicle {
      font: ${({ theme }) => theme.fontAppearance.contentBold};
      cursor: pointer;
    }
  }
`;
const SideDrawer = (props) => {
  const drawerRef = useRef(null);
  const content = (
    <SideDrawerWrapper>
      <CSSTransition
        nodeRef={drawerRef}
        in={props.show}
        timeout={200}
        classNames="slide"
        mountOnEnter
        unmountOnExit
      >
        <aside className="side-drawer" ref={drawerRef} onClick={props.onClick}>
          {props.children}
        </aside>
      </CSSTransition>
    </SideDrawerWrapper>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
