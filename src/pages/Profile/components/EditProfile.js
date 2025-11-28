import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import TextFieldInput from "../../../components/TextFieldInput";
import { MSG_TYPE, useToaster } from "../../../components/Toastbar";
import CustomFileUpload from "../../../components/CustomFileUpload";
import { putDataForm } from "../../../utils/fetchData";
import {
  nameTrimHandler,
  stringSliceHandler
} from "../../../utils/utilsfunction";
import { baseUrl } from "../../../utils/constants";
import { Formik } from "formik";
import * as Yup from "yup";
import { IoIosClose } from "react-icons/io";
import { Grid, IconButton } from "@mui/material";

const EditProfileStyles = styled.section`
  .title-section {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
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
  .vehicle-form {
    padding: 1rem;
    .field {
      height: 4rem;
    }
    .mt-1 {
      section {
        text-align: center;
      }
    }
  }
`;

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  addressLine1: "",
  addressLine2: "",
  state: "",
  city: "",
  postCode: "",
  customerProfile: "",
  fileName: "",
  imageUrl: "",
  preview: ""
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  addressLine1: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postCode: Yup.string().required("Required")
});

const EditProfile = ({ handleClose, data }) => {
  const toaster = useToaster();
  const [state, setState] = useState(initialValues);
  const [previewImage, setPreviewImage] = useState(false);

  const handleUploadChange = (e, setFieldValue) => {
    setPreviewImage(false);
    if (e.target.files && e.target.files.length > 0) {
      setFieldValue("customerProfile", e.target.files[0]);
      setFieldValue("fileName", `${e.target.files[0]?.name}`);
      setFieldValue("imageUrl", URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemoveImage = async (e, setFieldValue) => {
    setPreviewImage(false);
    setFieldValue("customerProfile", "");
    setFieldValue("fileName", "");
    setFieldValue("imageUrl", "");
  };

  const token = localStorage.getItem("jwt_token");

  const onEditData = (item) => {
    setState({
      ...state,
      id: item._id,
      firstName: item.firstName,
      lastName: item.lastName,
      phoneNumber: item.phoneNumber,
      email: item.email,
      addressLine1: item.addressLine1,
      addressLine2: item.addressLine2,
      state: item.state,
      city: item.city,
      postCode: item.postCode,
      customerProfile: item.customerProfile,
      fileName: stringSliceHandler(item.customerProfile),
      preview: `${baseUrl}/customerServerImage/${item.customerProfile}`
    });
    setPreviewImage(true);
  };

  useEffect(() => {
    if (data._id) onEditData(data);
  }, [data._id]);

  const onsubmit = async (values, submitProps) => {
    console.log(values);
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("email", values.email);
    formData.append("addressLine1", values.addressLine1);
    formData.append("addressLine2", values.addressLine2);
    formData.append("state", values.state);
    formData.append("city", values.city);
    formData.append("postCode", values.postCode);
    formData.append("customerProfile", values.customerProfile);
    try {
      const response = await putDataForm(
        `customerbyid/${values.id}`,
        formData,
        `Bearer ${token}`
      );
      localStorage.setItem("user_detail", JSON.stringify(response.data));
      submitProps.resetForm();
      toaster(MSG_TYPE.SUCCESS, "Profile Updated Successfully");
      setState(initialValues);
      handleClose();
    } catch (error) {
      toaster(MSG_TYPE.ERROR, error);
    }
  };

  return (
    <EditProfileStyles>
      <div className="title-section">
        <div className="modal-title">Edit Profile</div>
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
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className="field"
                >
                  <TextFieldInput
                    variant="outlined"
                    id="firstName"
                    name="firstName"
                    label="First Name *"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.firstName && touched.firstName && errors.firstName
                    }
                    error={errors.firstName && touched.firstName}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className="field"
                >
                  <TextFieldInput
                    variant="outlined"
                    id="lastName"
                    name="lastName"
                    label="Last Name *"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.lastName && touched.lastName && errors.lastName
                    }
                    error={errors.lastName && touched.lastName}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className="field"
                >
                  <TextFieldInput
                    variant="outlined"
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number *"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber
                    }
                    error={errors.phoneNumber && touched.phoneNumber}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className="field"
                >
                  <TextFieldInput
                    variant="outlined"
                    id="email"
                    name="email"
                    label="Email *"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.email && touched.email && errors.email}
                    error={errors.email && touched.email}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="field"
                >
                  <TextFieldInput
                    variant="outlined"
                    id="addressLine1"
                    name="addressLine1"
                    label="Address Line1 *"
                    value={values.addressLine1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.addressLine1 &&
                      touched.addressLine1 &&
                      errors.addressLine1
                    }
                    error={errors.addressLine1 && touched.addressLine1}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="field"
                >
                  <TextFieldInput
                    variant="outlined"
                    id="addressLine2"
                    name="addressLine2"
                    label="Address Line 2 "
                    value={values.addressLine2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="field"
                >
                  <TextFieldInput
                    variant="outlined"
                    id="state"
                    name="state"
                    label="State * "
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.state && touched.state && errors.state}
                    error={errors.state && touched.state}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className="field"
                >
                  <TextFieldInput
                    variant="outlined"
                    id="city"
                    name="city"
                    label="City * "
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.city && touched.city && errors.city}
                    error={errors.city && touched.city}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className="field"
                >
                  <TextFieldInput
                    variant="outlined"
                    id="postCode"
                    name="postCode"
                    label="Post Code *"
                    value={values.postCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.postCode && touched.postCode && errors.postCode
                    }
                    error={errors.postCode && touched.postCode}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <CustomFileUpload
                    uploadType="Image"
                    fileIndex="image"
                    isImage={values.customerProfile}
                    accept="image/*"
                    fileName={
                      values.fileName ? nameTrimHandler(values.fileName) : ""
                    }
                    onChange={(e) => {
                      handleUploadChange(e, setFieldValue);
                    }}
                    onRemove={(e) => {
                      handleRemoveImage(e, setFieldValue, "customerProfile");
                    }}
                    previewUrl={previewImage ? values.preview : values.imageUrl}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="mt-1"
                >
                  <Button size rounded type="submit">
                    Update
                  </Button>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </EditProfileStyles>
  );
};

export default EditProfile;
