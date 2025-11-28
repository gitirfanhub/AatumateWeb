import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import CustomModal from "../../../components/CustomModal";
import { baseUrl } from "../../../utils/constants";
import { formatDate } from "../../../utils/utilsfunction";
import WriteReview from "./WriteReview";
import { Link } from "react-router-dom";
import defaultImage from "../../../images/Aatumate_Icon_Grey.svg";

const OrderCardStyles = styled.section`
  .order-card {
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 5px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    hr {
      background-color: ${({ theme }) => theme.colors.tertiary};
    }
    .order-status {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2rem;
      padding: 0.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
      /* margin-bottom: 0.8rem; */
      .order-badge {
        font: ${({ theme }) => theme.fontAppearance.contentMedium};
        .badge {
          padding: 0.2rem 0.5rem;
          margin-left: 0.5rem;
          font: ${({ theme }) => theme.fontAppearance.defaultMedium};
          border-radius: 2px;
        }
      }
      .success {
        background-color: #bff5a2;
        color: #3e9310;
      }
      .cancel {
        background-color: #fdb3b3;
        color: #ef0606;
      }
      .vehicle {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
    .order-id {
      font: ${({ theme }) => theme.fontAppearance.contentMedium};
    }
    .order-flex {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
      padding: 0.5rem;
      .garage {
        padding-right: 0.5rem;
        h4 {
          font: ${({ theme }) => theme.fontAppearance.defaultBold};
          margin-bottom: 0.4rem;
        }
        p {
          font: ${({ theme }) => theme.fontAppearance.defaultLight};
          line-height: 1.5;
        }
      }
    }
    h4 {
      font: ${({ theme }) => theme.fontAppearance.defaultBold};
      margin-bottom: 0.4rem;
    }
    .product {
      padding-right: 0.5rem;
      .product-flex {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;

        .image {
          width: 60px;
          height: 60px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .product-details {
          p {
            font: ${({ theme }) => theme.fontAppearance.defaultLight};
            line-height: 1.5;
          }
        }
      }
    }
  }
  .review-btn {
    text-align: right;
    margin-top: 0.5rem;
  }
  @media only screen and (max-width: 870px) {
    .order-card {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
      .order-status {
        flex-direction: column;
        align-items: baseline;
        .order-badge {
          font: ${({ theme }) => theme.fontAppearance.defaultMedium};
          .badge {
            font: ${({ theme }) => theme.fontAppearance.defaultMedium};
          }
        }
      }
      .order-id {
        font: ${({ theme }) => theme.fontAppearance.defaultMedium};
      }
      .order-flex {
        flex-direction: column;
      }
    }
  }
`;

const OrderCard = (props) => {
  const { item } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const customerDetail = JSON.parse(localStorage.getItem("user_detail"));

  return (
    <OrderCardStyles>
      <CustomModal
        open={open}
        FadeIn={open}
        onClose={handleClose}
        product={item}
      >
        <WriteReview handleClose={handleClose} product={item} />
      </CustomModal>
      <div className="order-card">
        <Link
          to={`/orderdetails/${item?._id}`}
          state={{ vehicleType: item.vehicleType }}
        >
          <div className="order-status">
            <h5 className="order-id">ORDER ID: {item.orderNumber}</h5>
            <div className="order-badge">
              Vehicle Type:{" "}
              <span className="badge vehicle">{item.vehicleType}</span>
            </div>
            <div className="order-badge">
              OrderStatus:
              <span
                className={`${
                  item.orderStatus.stateName === "Delivered"
                    ? "success badge"
                    : item.orderStatus.stateName === "Cancelled"
                    ? "cancel badge"
                    : "badge vehicle"
                }`}
              >
                {item.orderStatus.stateName}
              </span>
            </div>
          </div>
          <div className="order-flex">
            <div className="garage">
              <h4>Garage Details</h4>
              <p>
                {item.vehicleType === "Bike" &&
                  (item.issueType === "UnKnown"
                    ? item.vehicleConsultation?.merchant.businessName
                    : item.bikeProductMerchant?.merchantId.businessName)}
                {item.vehicleType === "LMV" &&
                  (item.issueType === "UnKnown"
                    ? item.vehicleConsultation?.merchant.businessName
                    : item.lmvProductMerchant?.merchantId.businessName)}
              </p>
              <p>
                {item.vehicleType === "Bike" &&
                  (item.issueType === "UnKnown"
                    ? `${item.vehicleConsultation?.merchant.addressLine1} ${
                        item.vehicleConsultation?.merchant.addressLine2
                          ? item.vehicleConsultation?.merchant.addressLine2
                          : ""
                      }`
                    : `${item.bikeProductMerchant?.merchantId.addressLine1} ${
                        item.bikeProductMerchant?.merchantId.addressLine2
                          ? item.bikeProductMerchant?.merchantId.addressLine2
                          : ""
                      }`)}
                {item.vehicleType === "LMV" &&
                  (item.issueType === "UnKnown"
                    ? `${item.vehicleConsultation?.merchant.addressLine1} ${
                        item.vehicleConsultation?.merchant.addressLine2
                          ? item.vehicleConsultation?.merchant.addressLine2
                          : ""
                      }`
                    : `${item.lmvProductMerchant?.merchantId.addressLine1} ${
                        item.lmvProductMerchant?.merchantId.addressLine2
                          ? item.lmvProductMerchant?.merchantId.addressLine2
                          : ""
                      }`)}
              </p>
            </div>
            <div className="garage">
              <h4>Scheduled Date & Time</h4>
              <p>
                {formatDate(item.preferredDate)} {item.pickTimeSlot}{" "}
              </p>
              <p>
                {item.customerVehicle?.vehicle.carBrand.brandName}{" "}
                {item.customerVehicle?.vehicle.modelyear}{" "}
                {item.customerVehicle?.vehicle.carModel.carmodelName}{" "}
                {item.customerVehicle?.carNumber}
              </p>
            </div>
            <div className="product">
              <h4>Product Details</h4>
              <div className="product-flex">
                <div className="image">
                  {item.vehicleType === "Bike" && (
                    <img
                      src={
                        item.issueType === "UnKnown"
                          ? `${baseUrl}/productServerImage/${item.vehicleConsultation?.vehicleDiagnosisReport[0].issuePart?.product.productImage[0]}`
                          : `${baseUrl}/productServerImage/${item.bikeProductMerchant?.product.productImage[0]}`
                      }
                      alt={
                        item.issueType === "UnKnown"
                          ? `${item.vehicleConsultation?.vehicleDiagnosisReport[0].issuePart?.product.productName}`
                          : `${item.bikeProductMerchant?.product.productName}`
                      }
                      onError={(event) => {
                        event.target.src = `${defaultImage}`;
                        event.onerror = null;
                      }}
                    />
                  )}
                  {item.vehicleType === "LMV" && (
                    <img
                      src={
                        item.issueType === "UnKnown"
                          ? `${baseUrl}/productServerImage/${item.vehicleConsultation?.vehicleDiagnosisReport[0].issuePart?.product.productImage[0]}`
                          : `${baseUrl}/productServerImage/${item.lmvProductMerchant?.product.productImage[0]}`
                      }
                      alt={
                        item.issueType === "UnKnown"
                          ? `${item.vehicleConsultation?.vehicleDiagnosisReport[0].issuePart?.product.productName}`
                          : `${item.lmvProductMerchant?.product.productName}`
                      }
                      onError={(event) => {
                        event.target.src = `${defaultImage}`;
                        event.onerror = null;
                      }}
                    />
                  )}
                </div>
                <div className="product-details">
                  <p>
                    {item.vehicleType === "Bike" &&
                      (item.issueType === "UnKnown"
                        ? item.vehicleConsultation?.vehicleDiagnosisReport[0]
                            .issuePart?.product.productName
                        : item.bikeProductMerchant?.product.productName)}
                    {item.vehicleType === "LMV" &&
                      (item.issueType === "UnKnown"
                        ? item.vehicleConsultation?.vehicleDiagnosisReport[0]
                            .issuePart?.product.productName
                        : item.lmvProductMerchant?.product.productName)}
                  </p>
                  <p>INR {parseFloat(item.adminAmount).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {item.orderStatus.stateName === "Delivered" &&
        item.issueType === "Known" &&
        (item.vehicleType === "Bike"
          ? item?.bikeOrderReview?.customerId !== customerDetail._id
          : item?.lmvOrderReview?.customerId !== customerDetail._id) ? (
          <div className="review-btn">
            <Button size rounded onClick={handleOpen}>
              Write Review
            </Button>
          </div>
        ) : null}
      </div>
    </OrderCardStyles>
  );
};

export default OrderCard;
