import styled from "styled-components";

const CheckoutStyleWrapper = styled.section`
  padding: 1rem 3rem;
  min-height: 75vh;
  .checkout-container {
    display: grid;
    grid-template-columns: 3fr 2fr;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    padding: 1rem;
    .checkout-address {
      .heading {
        font: ${({ theme }) => theme.fontAppearance.contentBold};
        margin-bottom: 1rem;
      }
      .checkout-card {
        padding: 10px;
        box-shadow: ${({ theme }) => theme.shadow.default};
        border-radius: 5px;
        margin-bottom: 1rem;
        h2 {
          font: ${({ theme }) => theme.fontAppearance.contentBold};
          margin-bottom: 0.3rem;
        }
        p {
          font: ${({ theme }) => theme.fontAppearance.contentLight};
          margin-bottom: 0.775rem;
        }
      }
      .input {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
      .field {
        min-height: 4rem;
      }
      .submit {
        margin-top: 1rem;
        text-align: right;
      }
    }
  }
`;

export default CheckoutStyleWrapper;
