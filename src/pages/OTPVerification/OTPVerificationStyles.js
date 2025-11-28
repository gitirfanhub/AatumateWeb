import styled from "styled-components";

const OtpVerificationStyles = styled.section`
  padding: 1rem 3rem;
  min-height: 75vh;
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  .otp-container {
    position: relative;
    .otp-form {
      width: 400px;
      margin: 0 auto;
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.secondary};
      .image-section {
        img {
          max-width: 65%;
          height: auto;
          margin: auto;
        }
      }
      p {
        font: ${({ theme }) => theme.fontAppearance.contentMedium};
        color: ${({ theme }) => theme.colors.tertiary};
        margin: 1rem 0;
        text-align: center;
      }
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
      }
      .email-container {
        padding: 1rem;
        .label {
          font: ${({ theme }) => theme.fontAppearance.contentMedium};
        }
        .otp-field {
          padding: 1.5rem 0;
          div:nth-child(1) {
            justify-content: center;
            input {
              margin: 0.5rem;
              width: 4em !important;
              height: 4em;
              border: 1px solid rgba(0, 0, 0, 0.23);
              border-radius: 5px;
              font: ${({ theme }) => theme.fontAppearance.title};
              &:hover {
                border-color: #000;
              }
              &:focus {
                border: 2px solid #39607f;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 450px) {
    padding: 1rem;
    .otp-container {
      .otp-form {
        width: 100%;
      }
    }
  }
`;

export default OtpVerificationStyles;
