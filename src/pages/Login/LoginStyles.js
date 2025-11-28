import styled from "styled-components";

const LoginStyleWrapper = styled.section`
  padding: 1rem 3rem;
  min-height: 75vh;
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  .login-container {
    position: relative;
    .login-form {
      width: 400px;
      margin: 0 auto;
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.secondary};
      .image-section {
        max-width: 300px;
        margin: auto;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .instruct {
        font: ${({ theme }) => theme.fontAppearance.contentMedium};
        color: ${({ theme }) => theme.colors.tertiary};
        margin: 1rem 0;
        text-align: center;
      }
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  .field {
    min-height: 4rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 1rem;
    .login-container {
      .login-form {
        width: 100%;
      }
    }
  }
`;

export default LoginStyleWrapper;
