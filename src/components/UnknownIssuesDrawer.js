import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const UnknownIssuesDrawerStyles = styled.div`
  .unknown-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100vh;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  .alert-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms, transform 500ms;
  }
  .alert-exit {
    opacity: 1;
  }
  .alert-exit-active {
    opacity: 1;
    transform: translateX(100%);
    transition: opacity 500ms, transform 500ms;
  }
  @media screen and (max-width: 768px) {
    .unknown-sidebar {
      width: 90%;
    }
  }
`;

const UnknownIssuesDrawer = (props) => {
  const ref = useRef(null);
  const drawerUnknown = (
    <UnknownIssuesDrawerStyles>
      <CSSTransition
        nodeRef={ref}
        in={props.show}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <div className="unknown-sidebar" ref={ref} onClick={props.onClick}>
          {props.children}
        </div>
      </CSSTransition>
    </UnknownIssuesDrawerStyles>
  );

  return ReactDOM.createPortal(
    drawerUnknown,
    document.getElementById("unknown-drawer")
  );
};

export default UnknownIssuesDrawer;
