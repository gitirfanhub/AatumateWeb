import styled from "styled-components";

const OrderSuccessStyles = styled.section`
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    font: ${({ theme }) => theme.fontAppearance.contentMedium};
    text-align: center;
  }
  .animation {
    width: 40%;
    margin: auto;
    height: auto;
  }
  a {
    text-decoration: none;
  }
`;

export default OrderSuccessStyles;
