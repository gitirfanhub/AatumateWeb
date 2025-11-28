import styled from "styled-components";

const CartStyleWrapper = styled.section`
  width: 100%;
  min-height: 75vh;
  .cart-section {
    h5 {
      font: ${({ theme }) => theme.fontAppearance.contentBold};
    }
    .link-btn {
      width: 100%;
      text-align: center;
      margin-top: 1.5rem;
      a {
        text-decoration: none;
      }
    }
    .empty-cart {
      max-width: 400px;
      height: auto;
      margin: 1rem auto;
    }
    .cart-container {
      display: grid;
      grid-template-columns: 65% 35%;
      margin: 2rem 5rem;
      .cart {
        margin-bottom: 1rem;
        padding-right: 10px;
        border-right: 1px solid #eaeaec;
        .address-box {
          padding: 0.5rem;
          border: 1px solid #eaeaec;
          margin-bottom: 1rem;
          flex-basis: 70%;
          .address {
            font: ${({ theme }) => theme.fontAppearance.contentLight};
            line-height: 1.4;
            span {
              ${({ theme }) => theme.fontAppearance.defaultLight}
            }
          }
        }
        .cart-card {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          position: relative;
          gap: 1rem;
          border: 1px solid #eaeaec;
          /* border-radius: 10px; */
          padding: 10px;
          margin-bottom: 1.5rem;
          .product-image {
            position: relative;
            width: 150px;
            img {
              max-width: 100%;
              height: auto;
            }
            .MuiRadio-root {
              position: absolute;
              top: 5px;
              left: 5px;
            }
          }
          .product-info {
            .product-name {
              font: ${({ theme }) => theme.fontAppearance.commonSize};
              padding-bottom: 0.775rem;
            }
            .price-details {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              gap: 10px;
              padding-bottom: 0.775rem;
              h3 {
                font: ${({ theme }) => theme.fontAppearance.contentMedium};
              }
              h4 {
                font: ${({ theme }) => theme.fontAppearance.defaultMedium};
                color: ${({ theme }) => theme.colors.tertiary};
                text-decoration: line-through;
              }
            }
            .quotes {
              p {
                font: ${({ theme }) => theme.fontAppearance.contentMedium};
                line-height: 2;
                svg {
                  fill: #9aef6c;
                }
              }
            }
            h2 {
              font: ${({ theme }) => theme.fontAppearance.contentBold};
              padding-bottom: 0.775rem;
            }
            .addon-product {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 3rem;
              font: ${({ theme }) => theme.fontAppearance.defaultMedium};
              margin-bottom: 0.5rem;
              p {
                &:nth-child(2) {
                  color: ${({ theme }) => theme.colors.tertiary};
                  text-decoration: line-through;
                }
              }
              h2 {
                font: ${({ theme }) => theme.fontAppearance.commonSize};
                padding: 0;
              }
            }
          }
          .close-icon {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 10px;
            right: 15px;
            cursor: pointer;
            svg {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .cart__page-btn {
      position: absolute;
      bottom: 15px;
      right: 20px;
      a {
        color: ${({ theme }) => theme.colors.secondary};
        font: ${({ theme }) => theme.fontAppearance.defaultMedium};
        text-decoration: none;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .cart-section {
      .cart {
        .cart-card {
          width: 80%;
          .product-info {
            .addon-product {
              gap: 1rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .cart-section {
      .cart {
        .cart-card {
          width: 95%;
          .product-image {
            width: 100px;
          }
          .product-info {
            .price-details {
              h3 {
                font: ${({ theme }) => theme.fontAppearance.defaultBold};
              }
              h4 {
                font: ${({ theme }) => theme.fontAppearance.defaultLight};
              }
            }
          }
        }
      }
      .cart__page-btn {
        position: relative;
        bottom: auto;
        right: auto;
      }
    }
  }
`;

export default CartStyleWrapper;
