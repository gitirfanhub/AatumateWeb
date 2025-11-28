import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BreadcrumbStyleWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  color: ${({ theme }) => theme.colors.primary};
  h3 {
    font: ${({ theme }) => theme.fontAppearance.contentBold};
  }
  a {
    font: ${({ theme }) => theme.fontAppearance.contentLight};
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: all 0.3s ease;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Breadcrumb = ({ title, products }) => {
  return (
    <BreadcrumbStyleWrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {products && <Link to="/products">/Products</Link>} / {title}
        </h3>
      </div>
    </BreadcrumbStyleWrapper>
  );
};

export default Breadcrumb;
