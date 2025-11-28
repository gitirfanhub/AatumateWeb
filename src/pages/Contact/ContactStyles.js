import styled from "styled-components";
import ContactBg from "../../images/man.jpg";

export const ContactStyleWrapper = styled.section`
  .contact-container {
    /* height: 100vh; */
    .contact-flex {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .contact {
        background: rgba(0, 0, 0, 0.7) url(${ContactBg}) center no-repeat;
        background-blend-mode: color;
        .contact-title {
          font: 900 50px/1 "Neurial Grotesk Regular";
          color: ${({ theme }) => theme.colors.secondary};
          margin: 1.5rem;
        }
        .social-media-flex {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 3rem 5rem;
          .social-media {
            background-color: ${({ theme }) => theme.colors.secondary};
            border-radius: 50%;
            svg {
              fill: ${({ theme }) => theme.colors.primary};
            }
          }
        }
      }
      .contact-details {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
        margin: 0 1.5rem 1rem 3rem;
        .contact-para {
          font: 500 18px/1 "Neurial Grotesk Regular";
          color: ${({ theme }) => theme.colors.secondary};
        }
        svg {
          color: ${({ theme }) => theme.colors.grey};
        }
      }
    }
  }
`;
