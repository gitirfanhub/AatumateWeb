import styled from "styled-components";
import LayoutOne from "../../images/track-vehicle.png";
import LayoutThree from "../../images/services.png";
import LayoutFour from "../../images/search-mechanic.png";
import LayoutFive from "../../images/Discount_Banner.jpg";
import LayoutSix from "../../images/referral.png";
import TopSectionBg from "../../images/Mekaniku_Login_banner-2.1.png";
export const HomePageWrapper = styled.div``;

export const BannerSliderWrapper = styled.section`
  .carousel {
    display: flex;
    width: 100%;
    height: 70vh;
    .carousel-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      border-radius: 5px;
    }
    .swiper-pagination-bullet-active {
      width: 15px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 7px;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.secondary};
      box-shadow: ${({ theme }) => theme.shadow.default};
      transition: all 0.3s ease;
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 1.7rem;
        font-weight: bold;
        transform: translate(-50%, -50%);
      }
      &:hover {
        transform: scale(0.8);
      }
    }
    .swiper-button-prev {
      left: 25px;
    }
    .swiper-button-next {
      right: 25px;
    }
  }
  @media screen and (max-width: 768px) {
    .carousel {
      min-height: auto;
      .carousel-wrapper {
      }
    }
  }
`;

export const CategoryWrapper = styled.section`
  padding: 3rem 5rem;
  .category-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }
  .category-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 0.5rem;
    gap: 1rem;
  }
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
    .category-list {
      justify-content: center;
    }
  }
`;

export const FeatureServicesWrapper = styled.section`
  padding: 1rem;
`;

export const BrandsWrapper = styled.section`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.footer};
  .brands-container {
    .brands-grid {
      display: grid;
      grid-template-columns: 35% 65%;
      justify-content: flex-start;
      align-items: flex-start;
      .brands-title {
        margin-bottom: 1rem;
        margin-left: 2rem;
        .section-title {
          text-align: left;
          font: ${({ theme }) => theme.fontAppearance.headerMedium};
          padding-top: 0;
          span {
            color: ${({ theme }) => theme.colors.tertiary};
            font: ${({ theme }) => theme.fontAppearance.subheaderMedium};
          }
        }
      }
      .brands-right {
        .brands-box {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        .more-brands {
          width: 100%;
          padding: 2rem 1rem;
          background-color: ${({ theme }) => theme.colors.secondary};
          border-radius: 6px;
          text-align: center;
          margin-top: 8px;
          p {
            font: ${({ theme }) => theme.fontAppearance.commonSize};
          }
          a {
            color: ${({ theme }) => theme.colors.primary};
            font: ${({ theme }) => theme.fontAppearance.commonSize};
            text-decoration: underline;
          }
        }
      }
    }
  }
  @media screen and (max-width: 990px) {
    .brands-container {
      .brands-grid {
        display: block;
        .brands-title {
          margin-bottom: 1rem;
          margin-left: 0;
          .section-title {
            font: ${({ theme }) => theme.fontAppearance.titleMedium};
          }
        }
        .brands-right {
          .brands-box {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
        }
      }
    }
  }
`;

export const WorkProcessWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 1rem 3rem;
  .section-title {
    color: ${({ theme }) => theme.colors.primary};
  }
  .work-process {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;
    margin: 1rem 0;
    background-color: ${({ theme }) => theme.colors.footer};
    background-blend-mode: color;
    .work-process-card {
      align-self: stretch;
      width: 25%;
      padding: 4rem 3rem;
      background-color: ${({ theme }) => theme.colors.secondary};
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: translateY(-0.5rem);
      }

      .count {
        font: 900 100px/1 "Neurial Grotesk Bold";
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
      }
      .work-title {
        padding: 1rem 0;
        font: ${({ theme }) => theme.fontAppearance.titleMedium};
        color: ${({ theme }) => theme.colors.grey};
        text-align: center;
      }
      .work-content {
        font: ${({ theme }) => theme.fontAppearance.contentLight};
        color: ${({ theme }) => theme.colors.tertiary};
        text-align: center;
        line-height: 1.2rem;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    .work-process {
      display: block;
      margin-bottom: 0.5rem;
      &:nth-last-child() {
        margin-bottom: 0;
      }
      .work-process-card {
        width: 100%;
        margin-bottom: 1rem;
        transform: translateY(0);
      }
    }
  }
  @media (max-width: 992px) {
    .work-process {
      .work-process-card {
        padding: 1rem;
      }
    }
  }
`;

export const CustomerBenefitsWrapper = styled.section`
  padding: 7rem 3rem 1rem 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  .section-title {
    font: ${({ theme }) => theme.fontAppearance.headerMedium};
    color: ${({ theme }) => theme.colors.secondary};
    text-align: left;
    span {
      font: ${({ theme }) => theme.fontAppearance.titleMedium};
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
  .customer-benefits {
    margin: 1rem 0;
    .customer-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: flex-start;
      gap: 1.5rem;
      .customer-benefit-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        transition: all 0.3s ease-in-out;
        &:hover .customer-benefit-content {
          bottom: 1.6rem;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        .customer-benefit-content {
          width: 100%;
          padding: 1.5rem;
          transition: all 0.3s ease-in-out;
          background-color: ${({ theme }) => theme.colors.secondary};
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          .customer-benefit-title {
            color: ${({ theme }) => theme.colors.primary};
            font: ${({ theme }) => theme.fontAppearance.titleMedium};
            text-align: left;
            margin-bottom: 0.5rem;
          }
          .customer-benefit-para {
            color: ${({ theme }) => theme.colors.tertiary};
            font: ${({ theme }) => theme.fontAppearance.contentLight};
            text-align: left;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    .customer-benefits {
      .customer-container {
        display: block;
        .customer-benefit-card {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export const FeaturedWorkshopsWrapper = styled.section`
  padding: 2rem 2rem 2rem 11rem;
  background-color: ${({ lmv }) => (lmv ? "#000000" : "#EFEFEF")};
  .title {
    font: ${({ theme }) => theme.fontAppearance.largeFont};
    color: ${({ lmv }) => (lmv ? "#ffffff" : "#000000")};
    padding-bottom: 2rem;
    .small {
      font: ${({ theme }) => theme.fontAppearance.commonSize};
      color: ${({ lmv }) => (lmv ? "#ffffff" : "#000000")};
    }
    .large {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
  .swiper-pagination {
    position: relative;
    .swiper-pagination-bullet {
      width: 18px;
      height: 2px;
      background-color: #020202;
      border-radius: 0;
    }
    .swiper-pagination-bullet-active {
      width: 32px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 2rem;
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;

export const FeedbackWrapper = styled.section`
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  .feedback-section {
    display: grid;
    grid-template-columns: 65% 45%;
    align-items: center;
    width: 80%;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
    .feedback-left {
      .customer-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        align-items: center;
        justify-content: space-around;
        gap: 1rem;
        .image-section {
          text-align: center;
          img {
            border-radius: 50%;
            padding: 5px;
            width: 100px;
            height: 100px;
            margin: auto;
            transition: all 0.3s ease;
          }
          .name {
            font: ${({ theme }) => theme.fontAppearance.defaultLight};
            text-align: center;
          }
        }
        .active-img {
          border: 2px solid ${({ theme }) => theme.colors.primary};
        }
      }
    }
    .feedback-right {
      padding: 0.5rem 1rem;
      .title {
        font: ${({ theme }) => theme.fontAppearance.titleMedium};
        padding-bottom: 1rem;
      }
      .line {
        width: 3rem;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 1.5rem;
      }
      .text {
        display: none;
        .customer-name {
          font: ${({ theme }) => theme.fontAppearance.commonSize};
          margin-bottom: 1rem;
        }
        .review {
          font: ${({ theme }) => theme.fontAppearance.contentLight};
        }
      }
      /* .active-text {
        display: block;
      } */
    }
  }
  .swiper-button-prev {
    left: 15%;
  }
  .swiper-button-next {
    right: 15%;
  }
  .swiper-pagination {
    position: relative;
    span {
      background-color: ${({ theme }) => theme.colors.tertiary};
      transition: width 0.3s;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      width: 26px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  .swiper-slide-active {
    .feedback-card {
      .wrapper {
        .thumbnail {
          &::before {
            border-radius: 33% 67% 50% 50% / 50% 14% 86% 50%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .feedback-section {
      display: block;
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
`;

export const AppAdvertisementWrapper = styled.section`
  .app-ad {
    .app-screen {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      img {
        max-width: 100%;
        height: auto;
      }
      .playstore-details {
        padding: 7rem 1rem;
        .logo-image {
          max-width: 17rem;
          img {
            max-width: 100%;
            height: auto;
          }
        }
        h2 {
          font: ${({ theme }) => theme.fontAppearance.subheaderMedium};
          color: ${({ theme }) => theme.colors.hoverLink};
          margin-top: 2rem;
          line-height: 1.5;
        }
        .store-label {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 3rem;
          gap: 2rem;

          img {
            max-width: 10rem;
            height: auto;
          }
        }
      }
    }
  }
  @media screen and (max-width: 990px) {
    .app-ad {
      .app-screen {
        display: block;
        .playstore-details {
          padding: 0 1rem;
          h2 {
            font: ${({ theme }) => theme.fontAppearance.titleMedium};
          }
          .store-label {
            margin: 1rem 0;
          }
        }
      }
    }
  }
`;

export const TopSectionStyleWrapper = styled.section`
  .top-container {
    position: relative;
    width: 100%;
    height: 80vh;
    background-color: #f6f6f6;
    .top-grid {
      display: grid;
      grid-template-columns: 55% 45%;
      align-items: center;
      height: inherit;
      .top-contents {
        padding: 10px 3rem;
        .heading {
          font: 700 3rem/1.3 "Neurial Grotesk Bold";
          color: #373737;
          padding-bottom: 1rem;
        }
        .content {
          font: ${({ theme }) => theme.fontAppearance.contentLight};
          color: ${({ theme }) => theme.colors.tertiary};
          padding-bottom: 1rem;
        }
        .store-images {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          gap: 1rem;
          align-items: center;
          img {
            max-width: 150px;
            height: auto;
            font: ${({ theme }) => theme.fontAppearance.defaultLight};
          }
        }
        .location-form {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 0.5rem;
          margin-top: 1rem;
          border: 1px solid ${({ theme }) => theme.colors.tertiary};
          background-color: ${({ theme }) => theme.colors.secondary};
          .location {
            flex: auto;
            border: none;
            outline: none;
            font: ${({ theme }) => theme.fontAppearance.contentLight};
          }
          .location-svg {
            display: flex;
            align-items: center;
            border: none;
            outline: none;
            padding: 0.5rem;
            margin-right: 0.5rem;
            background-color: transparent;
            transition: all 0.3s ease;
            cursor: pointer;
            &:hover {
              background-color: ${({ theme }) => theme.colors.backgroundGrey};
            }
          }
          .location-btn {
            padding: 1rem 2rem;
            font: ${({ theme }) => theme.fontAppearance.contentMedium};
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.secondary};
            border: none;
            outline: none;
            cursor: pointer;
          }
          p {
            font: ${({ theme }) => theme.fontAppearance.contentMedium};
          }
        }
      }
      .top-image {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${TopSectionBg});
        background-repeat: no-repeat;
        background-position: bottom;
        height: 100%;
        img {
          max-width: 100%;
          height: 70vh;
        }
      }
    }
  }

  @media screen and (max-width: 990px) {
    .top-container {
      height: auto;
      .top-grid {
        display: block;
        .top-contents {
          .store-images {
            img {
              max-width: 110px;
            }
          }
        }
      }
    }
  }
`;

export const StaticLayoutStyleWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 2rem 0;
  .layout,
  .nested-layout {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
    .left-section {
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
      .layout-1 {
        flex: 0 0 100%;
        max-width: 100%;
        .img-section {
          display: block;
          max-width: 100%;
          height: 456px;
          border-radius: 10px;
          margin: 0 24px 0 0;
          background-color: ${({ theme }) => theme.colors.secondary};
          background-image: url(${LayoutOne});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center bottom;
          .img-position {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            padding-top: 44px;
            padding-left: 44px;
          }
        }
        .image-section {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          position: relative;
          height: 300px;
          border-radius: 10px;
          margin: 24px 24px 0 0;
          background-color: ${({ theme }) => theme.colors.secondary};
          background-image: url(${LayoutThree});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: right center;
          .img-position {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 4rem;
            padding-left: 44px;
          }
        }
      }
    }

    .layout-2 {
      flex: 0 0 66.66666667%;
      max-width: 66.66666667%;
      max-height: 300px;
      .image-section {
        display: block;
        max-width: 100%;
        height: 300px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.secondary};
        .img-position {
          position: relative;
          height: inherit;
          border-radius: inherit;
          .content-section {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            justify-content: center;
            position: relative;
            height: 300px;
            padding-left: 44px;
            z-index: 1;
            .title {
              display: flex;
              align-items: flex-end;
              padding-top: 4px;
              text-align: left;
            }
          }
          .image {
            display: block;
            position: absolute;
            inset: 0;
            padding: 0;
            border: 0;
            margin: 0;
            background: none;
            width: initial;
            height: initial;
            overflow: hidden;
            img {
              display: block;
              position: absolute;
              inset: 0;
              min-width: 100%;
              max-width: 100%;
              min-height: 100%;
              max-height: 100%;
              padding: 0;
              border: none;
              margin: auto;
              object-fit: cover;
              object-position: center center;
              border-radius: 10px;
            }
          }
        }
      }
      .nested-layout {
        .layout-3 {
          display: block;
          position: relative;
          flex: 0 0 41.66666667%;
          max-width: 41.66666667%;
          .layout-3-section {
            height: 456px;
            border-radius: 10px;
            background-color: ${({ theme }) => theme.colors.secondary};
            margin: 24px 24px 0 0;
            background-image: url(${LayoutFour});
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            .layout-3-position {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              height: 146px;
              padding: 44px 0 0 44px;
            }
            .link {
              font: ${({ theme }) => theme.fontAppearance.contentLight};
              padding-bottom: 2px;
              background-color: transparent;
              border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
              text-decoration: none;
              color: ${({ theme }) => theme.colors.primary};
            }
          }
        }
        .layout-section {
          display: block;
          flex: 0 0 58.33333333%;
          max-width: 58.33333333%;
          .layout-4 {
            height: 216px;
            .layout-4-section {
              height: 216px;
              border-radius: 10px;
              background-color: ${({ theme }) => theme.colors.secondary};
              margin: 24px 0;
              background-image: url(${LayoutFive});
              background-position: right center;
              background-repeat: no-repeat;
              background-size: auto;
              .layout-4-position {
                display: flex;
                flex-direction: column;
                padding-top: 44px;
                align-items: baseline;
                padding-left: 3rem;
              }
            }
            .bg-dif {
              background-image: url(${LayoutSix});
              background-position: right center;
            }
          }
        }
      }
    }
    .title {
      text-align: left;
      padding-bottom: 4px;
      font: ${({ theme }) => theme.fontAppearance.subheaderMedium};
    }
    .cont {
      font: ${({ theme }) => theme.fontAppearance.contentLight};
    }
  }
  @media screen and (max-width: 990px) {
    height: 390vh;
    .container {
      max-width: 90%;
      margin: auto;
    }
    .layout {
      flex-direction: column;
      .left-section {
        .layout-1 {
          width: 100%;
          .img-section {
            margin: 24px 0 0 0;
            background-size: contain;
            background-position: right center;
          }
          .image-section {
            margin: 24px 0 0 0;
          }
        }
      }
      .layout-2 {
        max-width: 100%;
        flex: 0 0 100%;
        .image-section {
          margin: 24px 0 0 0;
        }
        .nested-layout {
          flex-direction: column;
          .layout-3 {
            max-width: 100%;
            flex: 0 0 100%;
            .layout-3-section {
              margin: 24px 0 0 0;
              background-size: contain;
              background-position: right center;
            }
          }
          .layout-section {
            flex: 0 0 100%;
            max-width: 100%;
            .layout-4 {
              .layout-4-section {
                margin: 24px 0 0 0;
              }
            }
          }
        }
      }
      .left-section,
      .layout-3 {
        max-width: 100%;
        flex: 0 0 100%;
      }
    }
  }
`;

export const OneAppStyleWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10rem 1rem 3rem 1rem;
  .title {
    color: ${({ theme }) => theme.colors.secondary};
    font: ${({ theme }) => theme.fontAppearance.largeFont};
    margin-left: 180px;
    padding-bottom: 48px;
    span {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
  .app-section {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    height: 480px;
    margin-top: 0;
    margin-right: 180px;
    margin-left: 180px;
    .image-section {
      display: block;
      position: absolute;
      inset: 0;
      padding: 0;
      border: 0;
      margin: 0;
      background: none;
      width: initial;
      height: initial;
      overflow: hidden;
      opacity: 1;
      img {
        display: block;
        position: absolute;
        inset: 0px;
        padding: 0px;
        border: none;
        margin: auto;
        width: 0px;
        height: 0px;
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }
    .facility-flex {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      z-index: 1;
      .flex-box {
        display: flex;
        padding-bottom: 31px;
        align-items: center;
        width: 182px;
        span {
          display: inline-block;
          position: relative;
          overflow: hidden;
          width: 24px;
          height: 24px;
          background: none;
          opacity: 1;
          border: 0px;
          margin: 0px;
          padding: 0px;
          img {
            display: block;
            position: absolute;
            inset: 0;
            padding: 0;
            border: none;
            margin: auto;
            width: 0;
            height: 0;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
            object-fit: contain;
          }
        }
        p {
          display: flex;
          font-size: 14px;
          line-height: 20px;
          margin-left: 16px;
          color: ${({ theme }) => theme.colors.primary};
          margin-bottom: 0px;
        }
        .responsive {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    .app-section,
    .title {
      margin: 0 96px;
    }
  }
  @media screen and (max-width: 840px) {
    .app-section {
      .facility-flex {
        .flex-box {
          width: auto;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .title {
      margin: 0 20px;
    }
    .app-section {
      margin: 0 20px;
      align-items: center;
      .facility-flex {
        gap: 0px;
        width: 100%;
        padding: 62px;
        height: 88%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        .flex-box {
          padding-bottom: 0;
          p {
            display: none;
          }
          .responsive {
            display: flex;
          }
        }
      }
    }
  }
`;

export const UnknownIssuesFormWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
  .unknown-container {
    padding: 1rem;
    margin: 0 auto 2rem auto;
    background-color: ${({ theme }) => theme.colors.secondary};
    .header-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .close-icon {
        cursor: pointer;
      }
    }
    .heading {
      font: ${({ theme }) => theme.fontAppearance.titleMedium};
      padding-bottom: 0.5rem;
    }
    .help-text {
      font: ${({ theme }) => theme.fontAppearance.contentLight};
      color: ${({ theme }) => theme.colors.tertiary};
      margin-bottom: 1rem;
    }
    .field {
      margin-bottom: 1rem;
    }
    .unknown-svg {
      max-width: 300px;
      margin: auto;
      padding: 10px;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .unknown-json {
      margin: 3rem auto 1.5rem auto;
      max-width: 150px;
      height: auto;
    }
    .app {
      font: 500 20px/1 "Neurial Grotesk Medium";
      letter-spacing: 2px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 768px) {
    .unknown-container {
      .heading {
        font: ${({ theme }) => theme.fontAppearance.commonSize};
      }
      .unknown-json {
        margin: 1rem auto;
      }
      .app {
        font: ${({ theme }) => theme.fontAppearance.contentMedium};
      }
    }
  }
`;
