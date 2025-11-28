import styled from "styled-components";

export const ProductDetailStyleWrapper = styled.section`
  padding: 1rem 3rem;
  .product-grid {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    position: relative;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 992px) {
    .product-grid {
      display: block;
      gap: 10px;
      grid-template-rows: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 1rem;
    .product-grid {
      display: block;
    }
  }
`;

export const AddonsStyleWrapper = styled.section`
  margin-bottom: 2rem;
  .free-service {
    .free-service__title {
      font: ${({ theme }) => theme.fontAppearance.subheaderMedium};
      text-align: center;
      padding: 1.5rem 0;
    }
    .addons-items {
      .addons-flex {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        .items-box {
          display: flex;
          flex-direction: column;
          position: relative;
          background-color: ${({ theme }) => theme.colors.backgroundGrey};
          .MuiCheckbox-root {
            position: absolute;
            top: -5px;
            right: -5px;
            padding: 3px;
            color: ${({ theme }) => theme.colors.primary};
            background-color: ${({ theme }) => theme.colors.secondary};
            .MuiSvgIcon-root {
              font-size: 1.2rem;
            }
          }
          .MuiFormControlLabel-root {
            margin-right: 0;
            margin-left: 0;
          }
          .MuiTypography-body1 {
            border: 1px solid ${({ theme }) => theme.colors.tertiary};
            width: 120px;
            height: 120px;
            img {
              max-width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .MuiIconButton-root {
            padding: 0;
          }
          .MuiCheckbox-colorPrimary.Mui-checked {
            color: ${({ theme }) => theme.colors.primary};
          }
          .MuiCheckbox-colorPrimary.Mui-checked ~ .MuiTypography-body1 {
            border-color: ${({ theme }) => theme.colors.primary};
          }
          .items-details {
            padding: 5px;
            .product-name {
              font: 500 12px/1 "Neurial Grotesk Medium";
              text-align: center;
              margin-bottom: 10px;
            }
            .price {
              font: 500 10px/1 "Neurial Grotesk Medium";
              text-align: center;
            }
          }
        }
      }
    }
  }
`;
