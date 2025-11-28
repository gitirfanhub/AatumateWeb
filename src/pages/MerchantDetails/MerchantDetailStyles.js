import styled from "styled-components";

const MerchantDetailStyleWrapper = styled.section`
  min-height: 75vh;
  .no-merchant {
    text-align: center;
    padding: 3rem;
    font: ${({ theme }) => theme.fontAppearance.contentMedium};
  }
  .animation {
    padding-top: 3rem;
  }
  .merchant-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 2rem 3rem;
  }
  .product {
    padding-left: 3rem;
    .product-name {
      font: ${({ theme }) => theme.fontAppearance.defaultMedium};
      color: ${({ theme }) => theme.colors.tertiary};
      span {
        padding: 0.3rem 1rem;
        background-color: ${({ theme }) => theme.colors.primary};
        font: ${({ theme }) => theme.fontAppearance.contentMedium};
        color: ${({ theme }) => theme.colors.secondary};
        border-radius: 20px;
        vertical-align: middle;
        margin-left: 0.5rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .merchant-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 1268px) {
    .merchant-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (min-width: 1660px) {
    .merchant-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MerchantDetailStyleWrapper;
