import React from "react";
import styled from "styled-components";
import TextFieldInput from "../../../components/TextFieldInput";
import { AiOutlineClose } from "react-icons/ai";
import { IconButton } from "@mui/material";

const AddressStyleWrapper = styled.section`
  .title-section {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.shadow.default};
    .modal-title {
      font: ${({ theme }) => theme.fontAppearance.contentBold};
    }
    .MuiIconButton-colorPrimary {
      justify-self: flex-end;
      color: ${({ theme }) => theme.colors.tertiary};
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  .new-form {
    padding: 1rem;
  }
  form {
    h3 {
      font: ${({ theme }) => theme.fontAppearance.contentBold};
      color: ${({ theme }) => theme.colors.primary};
      text-transform: uppercase;
      margin: 1rem 0;
    }
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 100%;
    }
    .MuiInputBase-root {
      background-color: transparent;
      margin-bottom: 0.5rem;
      &::before {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      }
      &::after {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      }
    }
    .MuiFormLabel-root {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
    .MuiFormLabel-root.Mui-focused {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
    .save-address {
      margin: 1rem 0;
    }
    .address-type {
      display: flex;
      gap: 1rem;
      label {
        padding: 0.5rem 1rem;
        font: ${({ theme }) => theme.fontAppearance.defaultMedium};
        border: 1px solid ${({ theme }) => theme.colors.tertiary};
        border-radius: 50px;
        color: ${({ theme }) => theme.colors.tertiary};
      }
      #home:checked ~ .home,
      #work:checked ~ .work {
        color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
      input[type="radio"] {
        display: none;
      }
    }
    .submit-section {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const AddAddress = (props) => {
  const { handleClose } = props;
  return (
    <AddressStyleWrapper>
      <div className="title-section">
        <div className="modal-title">Add New Address</div>
        <IconButton
          size="small"
          color="primary"
          component="span"
          className="cancel-icon"
          onClick={handleClose}
        >
          <AiOutlineClose />
        </IconButton>
      </div>
      <div className="new-form">
        <form>
          <h3>Contact Details</h3>
          <TextFieldInput
            label="Name *"
            id="name"
            name="name"
            variant="standard"
          />
          <TextFieldInput
            label="Mobile No *"
            id="mobile"
            name="mobile"
            variant="standard"
          />
          <TextFieldInput
            label="Email *"
            id="email"
            name="email"
            variant="standard"
          />
          <TextFieldInput
            label="Address line1 *"
            id="addressline1"
            name="addressline1"
            variant="standard"
          />
          <div className="flex">
            <TextFieldInput
              label="State *"
              id="state"
              name="state"
              variant="standard"
            />
            <TextFieldInput
              label="City *"
              id="city"
              name="city"
              variant="standard"
            />
          </div>
          <TextFieldInput
            label="Postcode *"
            id="postcode"
            name="postcode"
            variant="standard"
          />
          <h3 className="save-address">Save Address as</h3>
          <div className="address-type">
            <input type="radio" name="select" id="home" />
            <input type="radio" name="select" id="work" />
            <label for="home" className="home">
              <div className="text">Home</div>
            </label>
            <label for="work" className="work">
              <div className="text">Work</div>
            </label>
          </div>
          <div className="submit-section">
            <button className="addToCart__btn">Submit</button>
          </div>
        </form>
      </div>
    </AddressStyleWrapper>
  );
};

export default AddAddress;
