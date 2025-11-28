import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.section`
  border: none;
  background: transparent;
  padding: 0;
  .button {
    display: inline-block;
    width: 100%;
    font: ${({ theme }) => theme.fontAppearance.contentMedium};
    padding: 0.675rem 1rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    text-decoration: none;
    border: none;
    &:focus {
      outline: none;
    }
    &:hover,
    &:active {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  .button--inverse {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover,
    &:active {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .button--lite {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
    padding: 0.675rem 1rem;
    border-radius: 5px;
    &:hover{
      background-color: ${({ theme }) => theme.colors.backgroundGrey};
      color: inherit;
    }
  }
  .round {
    border-radius: 20px;
    box-shadow: 0px 1px 10px rgb(0 0 0 / 13%);
    padding: 0.5rem 1rem;
  }
  .button--true {
    width: 170px;
  }
  @media screen and (max-width: 768px) {
    .button--true {
      width: auto;
    }
    .round {
      padding: 0.675rem;
    }
  }
`;

const Button = (props) => {
  return (
    <ButtonWrapper>
      <button
        className={`button button--${props.size || "default"} ${
          props.inverse ? "button--inverse" : ""
        } ${props.rounded ? "round" : ""} ${props.lite ? "button--lite" : ""}`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </ButtonWrapper>
  );
};

export default Button;
