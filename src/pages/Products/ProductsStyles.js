import styled from "styled-components";

export const ProductsStyleWrapper = styled.section`
  padding: 0 3rem;
  .arrow {
    top: 0 !important;
  }
  .swiper-slide {
    width: fit-content !important;
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 30px !important;
    height: 30px !important;
    top: 73%;
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
  .category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .category-items {
      font: ${({ theme }) => theme.fontAppearance.contentBold};
      color: ${({ theme }) => theme.colors.primary};
      padding-bottom: 10px;
    }
  }
  .subcategories {
    display: grid;
    grid-template-columns: 80% 20%;
    align-items: center;
    margin-bottom: 0.775rem;
  }
  .feature {
    margin: 0.4rem 0.5rem 0.4rem 0;
  }
  .btn {
    min-width: 100px;
    padding: 8px 10px;
    font: ${({ theme }) => theme.fontAppearance.contentLight};
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
    color: #555;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.footer};
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.footer};
    }
  }
  .active-btn {
    min-width: 100px;
    padding: 8px 10px;
    font: ${({ theme }) => theme.fontAppearance.contentMedium};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  .form-wrapper {
    p {
      text-transform: capitalize;
      margin-bottom: 0;
    }
    .search-input {
      width: 100%;
      font: ${({ theme }) => theme.fontAppearance.contentLight};
      padding: 6px 10px;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.grey};
      border-radius: 20px;
    }
  }

  @media (max-width: 576px) {
    .form-wrapper {
      form {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.75rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .products-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    .products-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 576px) {
    .products-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
