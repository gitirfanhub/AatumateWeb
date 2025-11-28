import React from "react";
import styled from "styled-components";

const SubHeaderStyles = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font: ${({ theme }) => theme.fontAppearance.defaultBold};
  margin: ${({ margin }) => (margin ? "1rem 0 0.5rem" : "")};
  padding: ${({ padding }) => (padding ? "0.2rem 0.5rem" : "")};
  text-transform: ${({ textappear }) =>
    textappear === "normal" ? "capitalize" : "uppercase"};
  &.error-text {
    margin-top: 2rem;
    color: #f44336;
    font: ${({ theme }) => theme.fontAppearance.defaultLight};
  }
`;

const SubHeaderLabel = ({
  children,
  className,
  margin,
  textappear,
  padding
}) => {
  return (
    <SubHeaderStyles
      className={className}
      margin={margin}
      padding={padding}
      textappear={textappear}
    >
      {children}
    </SubHeaderStyles>
  );
};

export default SubHeaderLabel;
