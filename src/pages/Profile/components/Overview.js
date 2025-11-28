import React, { useState } from "react";
import styled from "styled-components";
import CustomModal from "../../../components/CustomModal";
import { useBrandsContext } from "../../../context/brands_context";
import { baseUrl } from "../../../utils/constants";
import EditProfile from "./EditProfile";
import defaultImage from "../../../images/Aatumate_Icon_Grey.svg";

const OverviewStyles = styled.section`
  .user-profile {
    .user {
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.primary};
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .user-image {
        width: 130px;
        height: 130px;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .edit {
        padding: 0.5rem 1rem;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        cursor: pointer;
      }
    }
    .details {
      width: 70%;
      margin: 1.5rem 0;
      .detail-box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
        .vehicles {
          font: ${({ theme }) => theme.fontAppearance.contentMedium};
          padding-left: 1rem;
          li {
            line-height: 1.5;
          }
        }
        p {
          font: ${({ theme }) => theme.fontAppearance.contentMedium};
        }
      }
    }
  }
`;

const Overview = () => {
  const { customer_vehicle } = useBrandsContext();
  const customerDetails = JSON.parse(localStorage.getItem("user_detail"));

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <OverviewStyles>
      <CustomModal
        open={open}
        FadeIn={open}
        onClose={handleClose}
        data={customerDetails}
      >
        <EditProfile handleClose={handleClose} data={customerDetails} />
      </CustomModal>
      <div className="user-profile">
        <div className="user">
          <div className="user-image">
            <img
              src={`${baseUrl}/customerServerImage/${customerDetails.customerProfile}`}
              alt={`${customerDetails.fullName}`}
              onError={(event) => {
                event.target.src = `${defaultImage}`;
                event.onerror = null;
              }}
            />
          </div>
          <button className="edit" onClick={handleOpen}>
            Edit Profile
          </button>
        </div>
        <div className="details">
          <div className="detail-box">
            <p>Full Name</p>
            <p>{customerDetails.fullName}</p>
          </div>
          <div className="detail-box">
            <p>Mobile Number</p>
            <p>{customerDetails.phoneNumber}</p>
          </div>
          <div className="detail-box">
            <p>Email</p>
            <p>{customerDetails.email}</p>
          </div>
          <div className="detail-box">
            <p>Address</p>
            <p>
              {customerDetails.addressLine1} {customerDetails?.addressLine2}
            </p>
          </div>
          <div className="detail-box">
            <p>Vehicle</p>
            <ol className="vehicles">
              {customer_vehicle?.map((item) => (
                <li key={item._id}>
                  {item?.vehicle?.carBrand.brandName}{" "}
                  {item?.vehicle?.carModel.carmodelName}{" "}
                  {item?.vehicle?.carModel.variant}{" "}
                  {item?.vehicle?.vehicleType.vehicletypeName}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </OverviewStyles>
  );
};

export default Overview;
