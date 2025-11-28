import styled from "styled-components";
const AddressStyleWrapper = styled.section`
  padding: 1rem 3rem;
  .address-page {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: flex-start;
    align-items: flex-start;
    .delivery-address {
      .address-title {
        display: flex;
        justify-content: space-between;
        .select-address {
          font: ${({ theme }) => theme.fontAppearance.commonSize};
        }
        .new-address-btn {
          padding: 0.5rem 1rem;
          font: ${({ theme }) => theme.fontAppearance.contentMedium};
          border: 1px solid ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
export default AddressStyleWrapper;
