import styled from "styled-components";

const OrderDetailStyles = styled.section`
  .order-details {
    width: 90%;
    min-height: 75vh;
    margin: 1rem auto;
    padding-top: 3rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    h4 {
      font: ${({ theme }) => theme.fontAppearance.commonSize};
      line-height: 2;
    }
    .details {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: flex-start;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      margin-bottom: 1.5rem;
      .address-details {
        border-right: 1px solid ${({ theme }) => theme.colors.backgroundGrey};
        padding: 0.7rem 1rem;
        .name {
          font: ${({ theme }) => theme.fontAppearance.contentBold};
          line-height: 1.7;
        }
        .address {
          font: ${({ theme }) => theme.fontAppearance.defaultBold};
          color: ${({ theme }) => theme.colors.tertiary};
          line-height: 1.4;
          span {
            font: ${({ theme }) => theme.fontAppearance.contentLight};
          }
        }
        .phone {
          font: ${({ theme }) => theme.fontAppearance.defaultBold};
          color: ${({ theme }) => theme.colors.tertiary};
          line-height: 4;
          span {
            font: ${({ theme }) => theme.fontAppearance.contentMedium};
          }
        }
      }
      .product-details {
        border-right: 1px solid ${({ theme }) => theme.colors.backgroundGrey};
        padding: 0.7rem 1rem;
        .product-flex {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 1rem;
          .image {
            width: 100px;
            height: 100px;
            flex: none;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .product-info {
            .product,
            .price {
              font: ${({ theme }) => theme.fontAppearance.contentMedium};
              line-height: 1.8;
            }
            .subcategory,
            .category {
              font: ${({ theme }) => theme.fontAppearance.defaultBold};
              color: ${({ theme }) => theme.colors.tertiary};
              line-height: 1.8;
              span {
                font: ${({ theme }) => theme.fontAppearance.contentLight};
              }
            }
          }
        }
      }
    }
    .stepper-section {
      padding: 0.5rem 1rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
  }

  @media only screen and (max-width: 992px) {
    .order-details {
      .details {
        .product-details {
          .product-flex {
            flex-direction: column;
          }
        }
      }
    }
  }
`;

export default OrderDetailStyles;
