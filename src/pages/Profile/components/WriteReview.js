import React, { useState } from "react";
import styled from "styled-components";
import TextFieldInput from "../../../components/TextFieldInput";
import Button from "../../../components/Button";
import { postData } from "../../../utils/fetchData";
import { MSG_TYPE, useToaster } from "../../../components/Toastbar";
import { IconButton, Rating } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { Formik } from "formik";
import * as Yup from "yup";

const WriteReviewStyles = styled.section`
  .title-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.shadow.default};
    .modal-title {
      font: ${({ theme }) => theme.fontAppearance.contentMedium};
    }
    .MuiIconButton-colorPrimary {
      justify-self: flex-end;
      color: ${({ theme }) => theme.colors.tertiary};
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  .rating-container {
    padding: 1.5rem;
    .submit-btn {
      text-align: left;
      margin-top: 0.5rem;
    }
  }
`;

const initialValues = {
  rating: 0,
  description: ""
};

const validationSchema = Yup.object().shape({
  rating: Yup.number().required("Required"),
  description: Yup.string().required("Required")
});

const WriteReview = (props) => {
  const { handleClose, product } = props;
  const toaster = useToaster();
  const [state, setState] = useState(initialValues);

  const onsubmit = async (values, submitProps) => {
    if (product.vehicleType === "Bike") {
      const data = {
        bikeOrder: product._id,
        bikeProductMerchantId: product.bikeProductMerchant._id,
        customerId: product.customer._id,
        merchantId: product.merchantId,
        description: values.description,
        rating: values.rating
      };
      try {
        await postData("bike-order-review", data);
        submitProps.resetForm();
        toaster(MSG_TYPE.SUCCESS, "Review Submitted Successfully");
        setState(initialValues);
      } catch (error) {
        toaster(MSG_TYPE.ERROR, error);
      }
    } else {
      const data = {
        lmvOrder: product._id,
        lmvProductMerchantId: product.lmvProductMerchant._id,
        customerId: product.customer._id,
        merchantId: product.merchantId,
        description: values.description,
        rating: values.rating
      };
      try {
        await postData("lmv-order-review", data);
        submitProps.resetForm();
        toaster(MSG_TYPE.SUCCESS, "Review Submitted Successfully");
        setState(initialValues);
      } catch (error) {
        toaster(MSG_TYPE.ERROR, error);
      }
    }
  };

  return (
    <WriteReviewStyles>
      <div className="title-section">
        <div className="modal-title">Add Vehicle</div>
        <IconButton
          size="small"
          color="primary"
          component="span"
          className="cancel-icon"
          onClick={handleClose}
        >
          <IoIosClose />
        </IconButton>
      </div>
      <Formik
        initialValues={state}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={onsubmit}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          console.log(values);
          return (
            <form onSubmit={handleSubmit}>
              <div className="rating-container">
                <Rating
                  name="rating"
                  value={values.rating}
                  onChange={(e, value) => {
                    setState({ ...state, rating: value });
                  }}
                />
                <TextFieldInput
                  variant="outlined"
                  name="description"
                  id="description"
                  label="Description"
                  placeholder="Write Your Review"
                  value={values.description}
                  multiline
                  maxRows={5}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.description &&
                    touched.description &&
                    errors.description
                  }
                  error={errors.description && touched.description}
                />
                <Button
                  size
                  rounded
                  type="submit"
                  // onClick={() => onsubmit(values, resetForm)}
                >
                  Submit
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
    </WriteReviewStyles>
  );
};

export default WriteReview;
