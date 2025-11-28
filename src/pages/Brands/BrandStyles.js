import styled from "styled-components";

const BrandStyleWrapper = styled.section`
  .brands-container {
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
    padding: 2rem 3rem;
    .brands-title {
      font: ${({ theme }) => theme.fontAppearance.headerSemiBold};
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
      margin-bottom: 1rem;
      span {
        font: ${({ theme }) => theme.fontAppearance.headerSemiBold};
        color: ${({ theme }) => theme.colors.tertiary};
      }
    }
    .brands-content {
      margin-bottom: 1rem;
      font: ${({ theme }) => theme.fontAppearance.contentMedium};
    }
    .brands-list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
    }
  }

  @media only screen and (min-width: 1450px) {
    .brands-container {
      .brands-list {
        grid-template-columns: repeat(6, 1fr);
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .brands-container {
      .brands-list {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .brands-container {
      .brands-list {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .brands-container {
      .brands-list {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .brands-container {
      .brands-list {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

export default BrandStyleWrapper;
