import Vision from "../json/Vision.json";
import Mission from "../json/Mission.json";
import Values from "../json/Values.json";

export const responsive = {
  450: {
    slidesPerView: 1
  },
  630: {
    slidesPerView: 1
  },
  920: {
    slidesPerView: 1
  },
  1232: {
    slidesPerView: 3
  },
  1520: {
    slidesPerView: 4
  }
};

export const breakpoints = {
  450: {
    slidesPerView: 1
  },
  750: {
    slidesPerView: 2
  },
  990: {
    slidesPerView: 3
  },
  1232: {
    slidesPerView: 5
  },
  1520: {
    slidesPerView: 6
  }
};

export const workshopBreakpoints = {
  450: {
    slidesPerView: 1
  },
  630: {
    slidesPerView: 1
  },
  920: {
    slidesPerView: 1
  },
  1232: {
    slidesPerView: 2
  },
  1520: {
    slidesPerView: 2
  }
};

export const brandsBreakpoints = {
  450: {
    slidesPerView: 2
  },
  630: {
    slidesPerView: 3
  },
  920: {
    slidesPerView: 4
  },
  1232: {
    slidesPerView: 7
  },
  1520: {
    slidesPerView: 9
  }
};

export const merchantBreakpoints = {
  450: {
    slidesPerView: 1
  },
  767: {
    slidesPerView: 2
  },
  920: {
    slidesPerView: 1
  },
  1232: {
    slidesPerView: 1
  },
  1520: {
    slidesPerView: 1
  }
};

export const services = [
  {
    id: 1,
    icon: Vision,
    title: "Vision",
    text: "To be the leader in providing car owners convenient and low-cost access to reliable, honest and transparent car repair workshops who meet the expected high quality standards as set by Aatumate."
  },
  {
    id: 2,
    icon: Mission,
    title: "Mission",
    text: "To dedicate our business to be technologically equipped and agile in provide high standards of service with high efficiency and without compromise. To narrow the gap between principles and practise of providing access to workshops, whilst making fairness, honesty and transparency part of our daily lives. To balance the needs of our all stakeholders: employee, partners, customers, suppliers and stakeholders."
  },
  {
    id: 3,
    icon: Values,
    title: "Values",
    text: "To dedicate our business to be technologically equipped and agile in provide high standards of service with high efficiency and without compromise. To narrow the gap between principles and practise of providing access to workshops, whilst making fairness, honesty and transparency part of our daily lives. To balance the needs of our all stakeholders: employee, partners, customers, suppliers and stakeholders."
  }
];

/* .workshop-card {
    position: relative;
    box-shadow: ${({ theme }) => theme.shadow.default};
    border-radius: 15px 15px 0 0;
    width: 350px;
    height: 250px;
    margin: auto;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
    }
    &:hover .workshop-details {
      height: 35%;
    }

    .workshop-details {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 28%;
      padding: 5px 10px;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(2px);
      transition: all 0.3s ease-in;
      .workshop-name,
      .workshop-address {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 5px;
        .kilometer-badge,
        .workshop-rating {
          display: flex;
          padding: 0.2rem;
          background-color: ${({ theme }) => theme.colors.secondary};
          color: ${({ theme }) => theme.colors.primary};
          font: ${({ theme }) => theme.fontAppearance.defaultLight};
          border-radius: 3px;
          vertical-align: middle;
        }
        h6 {
          font: ${({ theme }) => theme.fontAppearance.contentBold};
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
      .rating-details {
        display: flex;
        gap: 0.5rem;
      }
      .workshop-name {
        justify-content: space-between;
      }
      .workshop-address {
        p {
          font: ${({ theme }) => theme.fontAppearance.defaultLight};
          color: ${({ theme }) => theme.colors.secondary};
          text-align: left;
        }
        svg {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
  @media (max-width: 768px) {
    .workshop-card {
      .workshop-details {
        height: 30%;
        padding: 3px 5px;
        overflow: hidden;
        .workshop-name {
          h6 {
            font: ${({ theme }) => theme.fontAppearance.defaultBold};
          }
          .kilometer-badge,
          .workshop-rating {
            padding: 0.1rem;
            font: 400 0.5rem "Barlow";
          }
        }
        .workshop-address {
          p {
            font: 400 0.5rem "Barlow";
          }
        }
      }
    }
  } */

/* <img src={workshopImage} alt={workshopName} />
        <div className="workshop-details">
          <div className="workshop-name">
            <h6>{workshopName}</h6>
            <div className="rating-details">
              <div className="kilometer-badge">{kilometers}</div>
              <div className="workshop-rating">
                <AiFillStar />
                <span>{rating}</span>
              </div>
            </div>
          </div>
          <div className="workshop-address">
            <HiLocationMarker />
            <p>{address}</p>
          </div>
        </div> */
