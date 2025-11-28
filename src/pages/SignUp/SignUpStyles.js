import styled from "styled-components";

const SignUpStyleWrapper = styled.section`
  padding: 1rem 3rem;
  .field {
    min-height: 4rem;
  }
  .signup-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: flex-end;
    align-items: flex-start;
    .signup-text {
      padding: 1rem;
      .lottie-json {
        width: fit-content;
        height: 450px;
        margin: auto;
      }
      h3 {
        font: ${({ theme }) => theme.fontAppearance.titleBold};
        text-align: center;
        line-height: 2.5rem;
      }
    }
    .signup-form__section {
      padding: 1rem;
      .signup-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        .create {
          font: ${({ theme }) => theme.fontAppearance.titleBold};
        }
        p {
          font: ${({ theme }) => theme.fontAppearance.defaultMedium};
        }
        a {
          font: ${({ theme }) => theme.fontAppearance.contentBold};
          color: ${({ theme }) => theme.colors.tertiary};
          text-decoration: none;
        }
      }
      .addToCart__btn {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
    .signup-container {
      display: block;
      .signup-text {
        .lottie-json {
          height: 300px;
          margin: auto;
        }
      }
      .signup-form__section {
        .signup-title {
          flex-direction: column-reverse;
          p {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 996px) {
    .signup-container {
      .signup-form__section {
        .create {
          font: ${({ theme }) => theme.fontAppearance.contentBold} !important;
        }
      }
    }
  }
`;

export default SignUpStyleWrapper;
