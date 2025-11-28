import React, { useState } from "react";
import styled from "styled-components";
import CustomModal from "../../../components/CustomModal";
import Button from "../../../components/Button";
import VehicleAdd from "./VehicleAdd";
import { useBrandsContext } from "../../../context/brands_context";
import { baseUrl } from "../../../utils/constants";
import { putData } from "../../../utils/fetchData";
import { MdCreate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Lottie from "react-lottie";
import AddVehicle from "../../../json/Add_Vehicle.json";
import defaultImage from "../../../images/Aatumate_Icon_Grey.svg";

const MyVehicleStyles = styled.section`
  .animation {
    max-width: 600px;
  }
  .vehicle-card {
    width: 100%;
    height: auto;
    section {
      text-align: right;
      margin-bottom: 1rem;
    }
    .card {
      background-color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid #eaeaec;
      margin-bottom: 1rem;

      .vehicle-details {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .vehicle {
          .badge {
            width: fit-content;
            padding: 5px 7px;
            font: ${({ theme }) => theme.fontAppearance.defaultBold};
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.secondary};
            margin-top: 0.675rem;
          }
          .info {
            padding: 0.5rem 1rem;
            .brand {
              font: ${({ theme }) => theme.fontAppearance.commonSize};
              padding-bottom: 0.775rem;
            }
            .info-flex {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              justify-content: flex-start;
              align-items: center;
              gap: 1.5rem;
              p {
                font: ${({ theme }) => theme.fontAppearance.contentMedium};
                padding-bottom: 0.5rem;
              }
            }
          }
        }
        .vehicle-image {
          width: 150px;
          height: auto;
          margin: auto;
          img {
            max-width: 100%;
            height: 100%;
          }
        }
      }
      .button-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        .icon-button {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .edit-btn {
            position: relative;
            font: ${({ theme }) => theme.fontAppearance.contentMedium};
            color: ${({ theme }) => theme.colors.tertiary};
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            z-index: 10;
            span {
              vertical-align: middle;
              padding-left: 5px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .vehicle-card {
      width: 100%;
      .card {
        .vehicle-details {
          .vehicle {
            .info {
              padding: 0.5rem;
              .info-flex {
                gap: 0.5rem;
                p {
                  font: ${({ theme }) => theme.fontAppearance.defaultMedium};
                }
              }
            }
          }
          .vehicle-image {
            width: 100px;
            height: 80px;
            img {
              max-width: 100%;
              height: auto;
            }
          }
        }
        .button-section {
          padding: 0.5rem;
          .icon-button {
            .edit-btn {
              font: ${({ theme }) => theme.fontAppearance.defaultBold};
            }
          }
        }
      }
    }
  }
`;

const MyVehicles = () => {
  const {
    customer_vehicle,
    updateCustomerVehicleStatus,
    deleteCustomerVehicle
  } = useBrandsContext();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const token = localStorage.getItem("jwt_token");

  const selectedVehicle = customer_vehicle.find((item) => item.isSelected);

  const updateVehicleStatus = async (url, id, data, token) => {
    if (!selectedVehicle) {
      await putData(url, data, `Bearer ${token}`);
    } else {
      updateCustomerVehicleStatus(
        `${url}?selectedCarId=${id}`,
        data,
        `Bearer ${token}`
      );
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AddVehicle,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if (customer_vehicle.length === 0) {
    return (
      <MyVehicleStyles>
        <div className="animation">
          <Lottie options={defaultOptions} />
        </div>
      </MyVehicleStyles>
    );
  }

  return (
    <MyVehicleStyles>
      <CustomModal open={open} FadeIn={open} onClose={handleClose} data={data}>
        <VehicleAdd handleClose={handleClose} data={data} />
      </CustomModal>
      <div className="vehicle-card">
        <Button
          size
          inverse
          onClick={() => {
            handleOpen();
            setData(null);
          }}
        >
          Add Vehicle
        </Button>
        {customer_vehicle?.map((vehicle) => (
          <div className="card" key={vehicle?._id}>
            <div className="vehicle-details">
              <div className="vehicle">
                {vehicle?.isSelected ? <p className="badge">Selected</p> : null}
                <div className="info">
                  <p className="brand">
                    {vehicle?.vehicle?.carBrand?.brandName}
                  </p>
                  <div className="info-flex">
                    <p>Vehicle Number:</p>
                    <p>{vehicle?.carNumber}</p>
                  </div>
                  <div className="info-flex">
                    <p>Model:</p>
                    <p>{vehicle?.vehicle?.carModel?.carmodelName}</p>
                  </div>
                  <div className="info-flex">
                    <p>Year: </p>
                    <p>{vehicle?.vehicle?.modelyear}</p>
                  </div>
                  <div className="info-flex">
                    <p>Variant:</p>
                    <p>{vehicle?.vehicle?.carModel?.variant}</p>
                  </div>
                  <div className="info-flex">
                    <p>Type:</p>
                    <p>{vehicle?.vehicle?.vehicleType?.vehicletypeName}</p>
                  </div>
                </div>
              </div>
              <div className="vehicle-image">
                <img
                  src={`${baseUrl}/productServerImage/${vehicle?.vehicle?.carModel?.carmodelImage}`}
                  alt={`${vehicle?.vehicle?.carBrand?.brandName}`}
                  onError={(event) => {
                    event.target.src = `${defaultImage}`;
                    event.onerror = null;
                  }}
                />
              </div>
            </div>
            <div className="button-section">
              <div className="icon-button">
                <button
                  className="edit-btn"
                  onClick={() => {
                    handleOpen();
                    setData(vehicle);
                  }}
                >
                  Edit
                  <span>
                    <MdCreate />
                  </span>
                </button>
                <button
                  className="edit-btn"
                  onClick={() =>
                    deleteCustomerVehicle(
                      "customer-car",
                      vehicle?._id,
                      `Bearer ${token}`
                    )
                  }
                >
                  Delete
                  <span>
                    <MdDelete />
                  </span>
                </button>
              </div>
              {!vehicle?.isSelected ? (
                <button
                  className="addToCart__btn"
                  onClick={() =>
                    updateVehicleStatus(
                      `customer-car/${vehicle?._id}`,
                      selectedVehicle?._id,
                      {
                        _id: vehicle?._id,
                        carNumber: vehicle.carNumber,
                        vehicle: vehicle.vehicle._id,
                        customer: vehicle.customer._id,
                        isSelected: !vehicle.isSelected,
                        selectedCarId: selectedVehicle?._id
                      },
                      token
                    )
                  }
                >
                  Select this vehicle
                </button>
              ) : //   <button
              //     className="addToCart__btn"
              //     onClick={() =>
              //       updateCustomerVehicleStatus(
              //         `customer-car/${vehicle?._id}?selectedCarId=${selectedVehicle?._id}`,
              //         vehicle,
              //         `Bearer ${token}`
              //       )
              //     }
              //   >
              //     Unselect this vehicle
              //   </button>
              null}
            </div>
          </div>
        ))}
      </div>
    </MyVehicleStyles>
  );
};

export default MyVehicles;
