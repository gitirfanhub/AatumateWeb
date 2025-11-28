import styled from "styled-components";
import AboutBg from "../../images/aatumate-logo.png";

export const AboutStyleWrapper = styled.section`
  .about-container {
    .about-vision {
      background-color: ${({ theme }) => theme.colors.secondary};
      padding: 5rem 0;
      .vision-content {
        width: 90vw;
        margin: 0 auto;
        max-width: 1170px;
        .header {
          h3 {
            font: ${({ theme }) => theme.fontAppearance.subheaderMedium};
            color: ${({ theme }) => theme.colors.primary};
            margin-bottom: 2rem;
          }
          p {
            color: ${({ theme }) => theme.colors.primary};
          }
        }

        .services-center {
          margin-top: 4rem;
          display: grid;
          gap: 2.5rem;
          .service {
            background-color: ${({ theme }) => theme.colors.hoverLink};
            text-align: center;
            padding: 2rem 2.5rem;
            border-radius: 0.25rem;
            p {
              color: ${({ theme }) => theme.colors.primary};
            }
            h4 {
              color: ${({ theme }) => theme.colors.primary};
            }
            span {
              width: 6rem;
              height: 6rem;
              display: grid;
              margin: 0 auto;
              padding: 10px;
              place-items: center;
              margin-bottom: 1rem;
              border-radius: 50%;
              background: ${({ theme }) => theme.colors.secondary};
              color: ${({ theme }) => theme.colors.primary};
              svg {
                font-size: 2rem;
              }
            }
          }
        }
      }
    }
    .about-us {
      padding: 10rem 4rem 1rem 4rem;
      .about-flex {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        gap: 2rem;
        .about-content {
          background-image: url(${AboutBg});
          background-color: rgba(255, 255, 255, 0.6);
          background-position: center;
          background-repeat: no-repeat;
          background-size: 85%;
          background-blend-mode: color;
          .about-title {
            font: ${({ theme }) => theme.fontAppearance.subheaderMedium};
            color: ${({ theme }) => theme.colors.primary};
            margin: 1rem 0;
          }
          .about-para {
            font: ${({ theme }) => theme.fontAppearance.contentLight};
            margin-bottom: 10px;
            line-height: 1.3;
            &:nth-last-child() {
              margin: 0;
            }
          }
        }
        .about-image {
          position: relative;
          margin: 1rem 3rem;
          img {
            position: relative;
            max-width: 100%;
            height: auto;
            z-index: 1;
          }
          &::before {
            content: "";
            position: absolute;
            top: -2rem;
            right: -2rem;
            width: 100%;
            height: 100%;
            border: 1rem solid ${({ theme }) => theme.colors.primary};
            z-index: 0;
          }
          &::after {
            content: "";
            position: absolute;
            bottom: -2rem;
            left: -2rem;
            width: 100%;
            height: 100%;
            border: 1rem solid ${({ theme }) => theme.colors.grey};
            z-index: 0;
          }
        }
      }
    }
  }
  @media (min-width: 1280px) {
    .about-container {
      .about-vision {
        padding: 0;
        .vision-content {
          transform: translateY(5rem);
        }
      }
    }
  }
  @media (max-width: 1040px) {
    .about-container {
      .about-vision {
        margin: 1rem;
      }
      .about-us {
        .about-flex {
          display: block;
          .about-content {
            background-size: 50%;
          }
          .about-image {
            margin: 4rem 0;
          }
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    .vision-content {
      width: 95vw;
    }
    .header {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 768px) {
    .about-container {
      .about-vision {
        .vision-content {
          .header {
            h3 {
              font-size: 1.5rem;
            }
            p {
              font-size: 0.875rem;
            }
          }
          .services-center {
            .service {
              p {
                font-size: 0.875rem;
              }
              h4 {
                font-size: 1.25rem;
              }
            }
          }
        }
      }
      .about-us {
        padding: 1rem;
        .about-flex {
          display: block;
          .about-content {
            background-size: 90%;
          }
          .about-image {
            margin: 2rem 0;
            &::before {
              right: -1rem;
              top: -1rem;
            }
            &::after {
              left: -1rem;
              bottom: -1rem;
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) {
    .about-vision {
      .vision-content {
        .services-center {
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
      }
    }
  }
  @media (min-width: 800px) {
    .vision-content {
      .header h3 {
        font: 900 2rem/1 "Barlow";
        line-height: 1;
      }
      p {
        font: ${({ theme }) => theme.fontAppearance.contentLight};
      }
      .services-center {
        margin-top: 4rem;
        display: grid;
        gap: 2.5rem;
        .service {
          background-color: ${({ theme }) => theme.colors.hoverLink};
          text-align: center;
          padding: 2rem 2.5rem;
          border-radius: 0.25rem;
          background-color: ${({ theme }) => theme.colors.footer};
          p {
            color: ${({ theme }) => theme.colors.primary};
            font: ${({ theme }) => theme.fontAppearance.contentLight};
            line-height: 1.3;
          }
          h4 {
            font: ${({ theme }) => theme.fontAppearance.titleMedium};
            margin-bottom: 0.75rem;
          }
          span {
            width: 4rem;
            height: 4rem;
            display: grid;
            margin: 0 auto;
            place-items: center;
            margin-bottom: 1rem;
            border-radius: 50%;
            background: ${({ theme }) => theme.colors.secondary};
            color: ${({ theme }) => theme.colors.primary};
            svg {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
`;
