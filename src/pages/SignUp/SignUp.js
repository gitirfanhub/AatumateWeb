import React from "react";
import SignUpStyleWrapper from "./SignUpStyles";
import TextFieldInput from "../../components/TextFieldInput";
import SignupJson from "../../json/Signup.json";
import { postData } from "../../utils/fetchData";
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import { MSG_TYPE, useToaster } from "../../components/Toastbar";

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
  password: "",
  confirmPassword: ""
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  addressLine1: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postCode: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().required("Required")
});

const SignUp = () => {
  const toaster = useToaster();
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SignupJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const onsubmit = async (values, submitProps) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
      state: values.state,
      city: values.city,
      postCode: values.postCode,
      password: values.password
    };
    if (values.password !== values.confirmPassword) {
      toaster(MSG_TYPE.WARNING, "Password and Confirm Password must be same");
    } else {
      const response = await postData("cregister", data);
      if (response.data) {
        console.log(response);
        submitProps.resetForm();
        navigate("/otpverification", { state: response.data.phoneNumber });
      } else if (
        response.message.includes("customer_user_mst validation failed")
      ) {
        toaster(MSG_TYPE.WARNING, "Phone number and Email ID already in use");
      } else {
        toaster(MSG_TYPE.ERROR, response.message);
      }
    }
  };
  return (
    <SignUpStyleWrapper>
      <div className="signup-container">
        <div className="signup-text">
          <div className="lottie-json">
            {/* <Lottie options={defaultOptions} /> */}
          </div>
          <h3>Let's Make it Happen Together! </h3>
        </div>
        <div className="signup-form__section">
          <div className="signup-title">
            <h2 className="create">Create An Account</h2>
            <p>
              Already have an account? <Link to="/login">Login here</Link>{" "}
            </p>
          </div>
          <Formik
            initialValues={initialValues}
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
              return (
                <form onSubmit={handleSubmit}>
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
                          errors.firstName &&
                          touched.firstName &&
                          errors.firstName
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
                        helperText={
                          errors.email && touched.email && errors.email
                        }
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
                      lg={6}
                      xl={6}
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
                        helperText={
                          errors.state && touched.state && errors.state
                        }
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
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={6}
                      xl={6}
                      className="field"
                    ></Grid>
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
                        id="password"
                        name="password"
                        label="Password *"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.password && touched.password && errors.password
                        }
                        error={errors.password && touched.password}
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
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password *"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.confirmPassword &&
                          touched.confirmPassword &&
                          errors.confirmPassword
                        }
                        error={
                          errors.confirmPassword && touched.confirmPassword
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button type="submit">Create Account</Button>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </SignUpStyleWrapper>
  );
};

export default SignUp;
