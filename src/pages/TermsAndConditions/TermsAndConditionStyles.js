import styled from "styled-components";

export const TermsAndConditionsWrapper = styled.section`
  padding: 1.5rem 4rem;
  .terms-container {
    .terms-title {
      padding-bottom: 1.5rem;
      text-align: center;
      font: ${({ theme }) => theme.fontAppearance.headerBold};
    }
    .terms-content {
      font: ${({ theme }) => theme.fontAppearance.contentLight};
      line-height: 1.3;
    }
    p.terms-content {
      margin-bottom: 10px;
      &:last-child {
        margin: 0;
      }
    }
    .terms-subtitle {
      padding: 1rem 0;
      text-transform: uppercase;
      font: ${({ theme }) => theme.fontAppearance.titleBold};
    }
    ul {
      margin: 0;
      padding: 0 20px;
      li {
        margin-bottom: 10px;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
`;
