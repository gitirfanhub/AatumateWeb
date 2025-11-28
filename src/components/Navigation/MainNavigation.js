import React, { useState } from "react";
import styled from "styled-components";
import Backdrop from "../Backdrop";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";
import CustomModal from "../CustomModal";
import VehicleAdd from "../../pages/Profile/components/VehicleAdd";
import Button from "../Button";
import { useBrandsContext } from "../../context/brands_context";
import { useCartContext } from "../../context/cart_context";
import { baseUrl } from "../../utils/constants";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import Logo from "../../images/aatumate-logo.png";
import defaultImage from "../../images/Aatumate_Icon_Grey.svg";

const MainNavigationWrapper = styled.nav`
  .main-navigation__menu-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    margin-right: 2rem;
    cursor: pointer;
    span {
      display: block;
      width: 2rem;
      height: 2.5px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  .main-navigation__logo {
    img {
      width: 55px;
      height: auto;
    }
  }
  .main-navigation__header-nav {
    display: none;
  }
  .name {
    margin-left: 0.5rem;
    font: ${({ theme }) => theme.fontAppearance.contentLight};
  }
  .customer-details {
    display: flex;
    align-items: center;
    gap: 10px;
    .customer-location {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;
      position: relative;
      width: 250px;
      .location {
        font: ${({ theme }) => theme.fontAppearance.contentLight};
      }
      &::after {
        content: "";
        position: absolute;
        top: -6px;
        right: 0;
        width: 1px;
        height: 35px;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
    .car-details {
      display: flex;
      align-items: center;
      gap: 10px;
      position: relative;
      img {
        width: 50px;
        height: auto;
      }
      .car-name {
        font: ${({ theme }) => theme.fontAppearance.contentLight};
        .car-model {
          font: ${({ theme }) => theme.fontAppearance.defaultLight};
        }
      }
      &::after {
        content: "";
        position: absolute;
        top: 5px;
        right: -5px;
        width: 1px;
        height: 35px;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
    .add-vehicle {
      font: ${({ theme }) => theme.fontAppearance.contentBold};
      cursor: pointer;
    }
    .nav-login {
      font: ${({ theme }) => theme.fontAppearance.contentBold};
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      top: 100%;
      left: 0;
      padding: 0 1rem;
      width: 150px;
      background-color: ${({ theme }) => theme.colors.secondary};
      box-shadow: ${({ theme }) => theme.shadow.cardShadow};
      opacity: 0;
      visibility: hidden;
      z-index: 1;
      transition: all 0.3s ease;
      .name {
        font: ${({ theme }) => theme.fontAppearance.contentBold};
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        padding: 0.5rem 0;
        text-align: left;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
  .login-icon {
    display: flex;
    align-items: center;
    position: relative;
    padding: 5px;
    cursor: pointer;
    &:hover > .profile {
      opacity: 1;
      visibility: visible;
    }
    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
    img {
      width: 25px;
      height: 25px;
      object-fit: cover;
      clip-path: circle();
    }
    .cart-count {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      border-radius: 50%;
      top: -5px;
      right: -5px;
      font: ${({ theme }) => theme.fontAppearance.contentMedium};
    }
  }

  @media (min-width: 900px) {
    .main-navigation__menu-btn {
      display: none;
    }

    .main-navigation__header-nav {
      display: block;
    }
  }
  @media only screen and (max-width: 900px) {
    .customer-details {
      .car-details,
      .customer-location {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 1040px) {
    .customer-details {
      .car-details {
        img {
          width: 40px;
        }
        .car-name {
          font: ${({ theme }) => theme.fontAppearance.defaultMedium};
          span {
            font: ${({ theme }) => theme.fontAppearance.defaultLight};
          }
        }
      }
      .customer-location {
        width: 225px;
        .location {
          font: ${({ theme }) => theme.fontAppearance.defaultMedium};
          line-height: 1.4;
        }
      }
      .login-icon {
        .name {
          font: ${({ theme }) => theme.fontAppearance.defaultBold};
        }
      }
    }
  }
`;

const MainNavigation = () => {
  const { customer_vehicle } = useBrandsContext();
  const { total_items } = useCartContext();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const isLoggedIn = localStorage.getItem("jwt_token");

  const selectedVehicle = customer_vehicle?.find(
    (item) => item.isSelected === true
  );
  const customerDetails = JSON.parse(localStorage.getItem("user_detail"));

  return (
    <MainNavigationWrapper className="container">
      <CustomModal open={open} FadeIn={open} onClose={handleClose}>
        <VehicleAdd handleClose={handleClose} />
      </CustomModal>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
          {isLoggedIn ? (
            <div className="customer-location">
              <div className="icon">
                <MdLocationPin />
              </div>
              <div className="location">
                {customerDetails.addressLine1}
                {customerDetails.addressLine2
                  ? customerDetails.addressLine2
                  : null}
                ,{customerDetails.city},{customerDetails.state}
              </div>
            </div>
          ) : null}
          {isLoggedIn && (
            <>
              {selectedVehicle ? (
                <div className="car-details">
                  <img
                    src={`${baseUrl}/productServerImage/${selectedVehicle?.vehicle?.carModel.carmodelImage}`}
                    alt={`${selectedVehicle?.vehicle?.carBrand.brandName}`}
                  />
                  <span className="car-name">
                    {selectedVehicle?.vehicle?.carBrand.brandName}
                    <br />
                    <span className="car-model">
                      {selectedVehicle?.carNumber}
                    </span>
                  </span>
                </div>
              ) : customer_vehicle.length === 0 ? (
                <Button lite onClick={handleOpen}>
                  ADD VEHICLE
                </Button>
              ) : null}
            </>
          )}
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="main-navigation__logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <div className="customer-details">
          {isLoggedIn ? (
            <div className="customer-location">
              <div className="icon">
                <MdLocationPin />
              </div>
              <div className="location">
                {customerDetails.addressLine1}{" "}
                {customerDetails.addressLine2
                  ? customerDetails.addressLine2
                  : null}
                {customerDetails.city}
                {customerDetails.state}
              </div>
            </div>
          ) : null}
          {isLoggedIn ? (
            <>
              {selectedVehicle ? (
                <div className="car-details">
                  <img
                    src={`${baseUrl}/productServerImage/${selectedVehicle?.vehicle?.carModel.carmodelImage}`}
                    alt={`${selectedVehicle?.vehicle?.carBrand.brandName}`}
                    onError={(event) => {
                      event.target.src = `${defaultImage}`;
                      event.onerror = null;
                    }}
                  />
                  <span className="car-name">
                    {selectedVehicle?.vehicle?.carBrand.brandName}
                    <br />
                    <span className="car-model">
                      {selectedVehicle?.carNumber}
                    </span>
                  </span>
                </div>
              ) : customer_vehicle.length === 0 ? (
                <Button lite onClick={handleOpen}>
                  ADD VEHICLE
                </Button>
              ) : null}
              <div className="login-icon">
                {isLoggedIn ? (
                  <img
                    src={`${baseUrl}/customerServerImage/${customerDetails.customerProfile}`}
                    alt={`${customerDetails.fullName}`}
                    onError={(event) => {
                      event.target.src = `${defaultImage}`;
                      event.onerror = null;
                    }}
                  />
                ) : (
                  <BsPersonCircle />
                )}
                <p className="name">{customerDetails.fullName}</p>
                <div className="profile">
                  {isLoggedIn ? (
                    <Link to="/profile" className="name">
                      Profile
                    </Link>
                  ) : (
                    <Link to="/login" className="name">
                      Login
                    </Link>
                  )}
                  {isLoggedIn && (
                    <button className="name" onClick={() => logoutHandler()}>
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <Link to="/login" className="nav-login">
              Login
            </Link>
          )}

          <Link to={isLoggedIn ? "/cart" : "/login"} className="login-icon">
            <BsCart3 />
            {total_items ? (
              <div className="cart-count">{total_items}</div>
            ) : null}
          </Link>
        </div>
      </MainHeader>
    </MainNavigationWrapper>
  );
};

export default MainNavigation;
