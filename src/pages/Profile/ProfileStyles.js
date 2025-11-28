import styled from "styled-components";

const ProfileStyleWrapper = styled.section`
  padding: 1rem 3rem;
  width: 100%;
  .profile-container {
    /* position: relative; */
    height: 80vh;
    display: grid;
    grid-template-columns: 11rem auto;
    margin: 1rem 5rem;
    overflow-y: auto;
    .sidebar {
      border-right: 1px solid #eaeaec;
      background-color: ${({ theme }) => theme.colors.primary};
      /* height: fit-content; */
      .menu {
        padding: 10px;
        position: sticky;
        top: 0;
        .menu-item {
          padding: 1rem 0;
          font: ${({ theme }) => theme.fontAppearance.contentMedium};
          color: ${({ theme }) => theme.colors.tertiary};
          border-bottom: 1px solid #eaeaec;
          cursor: pointer;
        }
      }
    }
    .active {
      color: ${({ theme }) => theme.colors.secondary} !important;
    }
    .main-section {
      padding: 1rem;
      margin: 0;
      background-color: ${({ theme }) => theme.colors.backgroundGrey};
      .render-page {
      }
    }
  }
  @media only screen and (max-width: 992px) {
    padding: 1rem;
    .profile-container {
      margin: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
    .profile-container {
      grid-template-columns: 6rem auto;
      margin: 0;
      .sidebar {
        .menu {
          padding: 0;
          .menu-item {
            padding: 10px 0;
          }
        }
      }
    }
  }
`;

export default ProfileStyleWrapper;
