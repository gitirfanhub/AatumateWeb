import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextFieldInput from "../../../components/TextFieldInput";
import AutocompleteInput from "../../../components/AutocompleteInput";
import Button from "../../../components/Button";
import { useBrandsContext } from "../../../context/brands_context";
import { Formik } from "formik";
import * as Yup from "yup";
import { IconButton } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import CustomAutocomplete from "../../../components/CustomAutocomplete";
import { MSG_TYPE, useToaster } from "../../../components/Toastbar";

const VehicleAddStyles = styled.section`
  .title-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.shadow.default};
    .modal-title {
      font: ${({ theme }) => theme.fontAppearance.contentMedium};
      justify-self: center;
    }
    .MuiIconButton-colorPrimary {
      justify-self: flex-end;
      color: ${({ theme }) => theme.colors.tertiary};
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  .vehicle-form {
    padding: 1rem;
    .field {
      height: 4rem;
      .MuiFormLabel-root {
        font: ${({ theme }) => theme.fontAppearance.contentLight};
        color: rgb(151 151 151 / 87%);
      }
    }
    .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    section {
      text-align: center;
    }
  }
`;

const initialValues = {
  carNumber: "",
  brand: "",
  model: "",
  variant: "",
  year: "",
  vehicleType: "",
  btnText: "Add"
};

const validationSchema = Yup.object().shape({
  carNumber: Yup.string()
    .required("Required")
    .matches(/^[A-Z]{2}/, "Enter State Abbreviation")
    .matches(/[ -]/, "Enter space")
    .matches(/[0-9]{2}/, "Enter your regional RTO code")
    .matches(/[ -]/, "Enter space")
    .matches(/^[A-Z]{2}/, "Enter your serial alphabet")
    .matches(/[0-9]{4}/, "Enter your serial number"),
  brand: Yup.object().required("Required"),
  model: Yup.object().required("Required"),
  variant: Yup.object().required("Required"),
  year: Yup.string().required("Required")
});

const VehicleAdd = ({ handleClose, data }) => {
  const toaster = useToaster();
  const [state, setState] = useState(initialValues);
  const {
    brands,
    fetchVehicle,
    vehicle,
    fetchModels,
    models,
    createCustomerVehicle,
    updateCustomerVehicle
  } = useBrandsContext();

  const brandsDropdown = (name, setFieldValue) => (e, value) => {
    setFieldValue(name, value !== null ? value : initialValues[name]);
    fetchVehicle("vehiclelist", value._id);
  };

  const modelDropdown = (name, setFieldValue) => (e, value) => {
    setFieldValue(name, value !== null ? value : initialValues[name]);
    fetchModels("vehiclelist", value._id);
  };

  const token = localStorage.getItem("jwt_token");

  const onEditVehicle = (data) => {
    console.log(data);
    const EditData = {
      id: data._id,
      carNumber: data.carNumber,
      brand: data.vehicle?.carBrand,
      model: data.vehicle?.carModel,
      variant: data.vehicle?.carModel,
      year: data.vehicle?.modelyear,
      vehicleType: data.vehicle?.vehicleType.vehicletypeName,
      btnText: "Update"
    };
    setState(EditData);
  };

  useEffect(() => {
    if (data) onEditVehicle(data);
  }, [data]);

  const onsubmit = (values, submitProps) => {
    console.log(values);
    try {
      if (values && values.id) {
        const postData = {
          carNumber: values.carNumber,
          vehicle: data.vehicle?._id,
          customer: JSON.parse(localStorage.getItem("user_detail"))._id
        };
        console.log(data);
        updateCustomerVehicle("customer-car", values.id, postData, token);
        submitProps.resetForm();
        toaster(MSG_TYPE.SUCCESS, "Vehicle Updated Successfully");
        setState(initialValues);
        handleClose();
      } else {
        const data = {
          _id: "0",
          carNumber: values.carNumber,
          vehicle: models[0]?._id,
          customer: JSON.parse(localStorage.getItem("user_detail"))._id
        };
        createCustomerVehicle("customer-car", data, token);
        submitProps.resetForm();
        toaster(MSG_TYPE.SUCCESS, "Vehicle Added Successfully");
        setState(initialValues);
        handleClose();
      }
    } catch (error) {
      toaster(MSG_TYPE.ERROR, error);
    }
  };

  return (
    <VehicleAddStyles>
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
            handleSubmit,
            setFieldValue
          } = props;
          return (
            <form className="vehicle-form" onSubmit={handleSubmit}>
              <div className="field">
                <TextFieldInput
                  variant="outlined"
                  id="carNumber"
                  name="carNumber"
                  label="Vehicle Number *"
                  value={values.carNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.carNumber && touched.carNumber && errors.carNumber
                  }
                  error={errors.carNumber && touched.carNumber}
                />
              </div>
              <div className="field">
                <CustomAutocomplete
                  options={brands}
                  variant="outlined"
                  id="brand"
                  name="brand"
                  label="Brand *"
                  optionLabel="brandName"
                  value={values.brand}
                  onChange={brandsDropdown("brand", setFieldValue)}
                  onBlur={handleBlur}
                  helperText={errors.brand && touched.brand && errors.brand}
                  error={errors.brand && touched.brand}
                />
              </div>
              <div className="field">
                <CustomAutocomplete
                  options={vehicle.map((v) => v.carModel)}
                  variant="outlined"
                  id="model"
                  name="model"
                  label="Model"
                  optionLabel="carmodelName"
                  value={values.model}
                  onChange={modelDropdown("model", setFieldValue)}
                  onBlur={handleBlur}
                  helperText={errors.model && touched.model && errors.model}
                  error={errors.model && touched.model}
                />
              </div>
              <div className="field">
                <CustomAutocomplete
                  options={models.map((model) => model.carModel)}
                  variant="outlined"
                  id="variant"
                  name="variant"
                  label="Variant"
                  optionLabel="variant"
                  value={values.variant}
                  onChange={(e, value) => {
                    setFieldValue(
                      "variant",
                      value !== null ? value : initialValues.variant
                    );
                  }}
                  onBlur={handleBlur}
                  helperText={
                    errors.variant && touched.variant && errors.variant
                  }
                  error={errors.variant && touched.variant}
                />
              </div>
              <div className="field">
                <AutocompleteInput
                  options={models.map((model) => model.modelyear)}
                  noOptionsText="No Records Found"
                  variant="outlined"
                  id="year"
                  name="year"
                  label="Year"
                  value={values.year}
                  onChange={(e, value) => {
                    setFieldValue(
                      "year",
                      value !== null ? value : initialValues.year
                    );
                  }}
                  onBlur={handleBlur}
                  helperText={errors.year && touched.year && errors.year}
                  error={errors.year && touched.year}
                />
              </div>
              <div className="field">
                <AutocompleteInput
                  options={models.map(
                    (model) => model.vehicleType.vehicletypeName
                  )}
                  noOptionsText="No Records Found"
                  variant="outlined"
                  id="vehicleType"
                  name="vehicleType"
                  label="Vehicle Type"
                  value={values.vehicleType}
                  onChange={(e, value) => {
                    setFieldValue(
                      "vehicleType",
                      value !== null ? value : initialValues.vehicleType
                    );
                  }}
                  onBlur={handleBlur}
                />
              </div>
              <Button size>{values.btnText}</Button>
            </form>
          );
        }}
      </Formik>
    </VehicleAddStyles>
  );
};

export default VehicleAdd;
